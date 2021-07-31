import { Application, Request, Response } from "express";
import "reflect-metadata";
import { createConnection, getCustomRepository } from "typeorm";
import { FertilizerItemRepository } from "./repositories/fertilizer.repository";
import * as jwt from "jsonwebtoken";
import * as express from "express";
import { json, urlencoded } from "body-parser";
import * as multer from "multer";
import { FertilizerItem } from "./entity/fertilizer-item.entity";
import { User } from "./entity/user.entity";
import { UserRepository } from "./repositories/user.repository";
import { loginDto } from "./dtos/login.dto";
import { RefreshToken } from "./entity/refreshToken.entity";
import { RefreshTokenRepository } from "./repositories/refreshToken.repository";

require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainTextPassword = process.env.JWT_KEY;
const { v4: uuidv4 } = require("uuid");
const app: Application = express();

app.use(urlencoded({ extended: true, limit: "50mb" }));
app.use(json({ limit: "50mb" }));

createConnection({
  name: "default",
  type: "mysql",
  host: "localhost",
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
});
// Function2
async function checkAccessToken(accessToken: string) {
  try {
    const jwtData = jwt.verify(accessToken, process.env.JWT_KEY);
    const refreshTokenData = await getCustomRepository(
      RefreshTokenRepository
    ).findOne({ refreshToken: jwtData.refreshToken });
    if (!refreshTokenData) return "refreshToken not found";
    const dateNow = new Date();
    if (dateNow > refreshTokenData.expire) return false;
    const date = new Date();
    refreshTokenData.expire.setTime(date.getTime() + 15 * 60000);
    await getCustomRepository(RefreshTokenRepository).save(refreshTokenData);
    return jwtData;
  } catch {
    return "invalid accessToken";
  }
}
// FertilizerItem

app.get("/allFertilizer", async (req: Request, res: Response) => {
  const fertilizerItem = await getCustomRepository(
    FertilizerItemRepository
  ).find();
  res.json(fertilizerItem);
});

app.post("/insertFertilizer", async (req: Request, res: Response) => {
  try {
    const fertilizer = new FertilizerItem();
    fertilizer.name = req.body["fertilizer_name"];
    fertilizer.des = req.body["fertilizer_des"];
    fertilizer.type = req.body["fertilizer_type"];
    fertilizer.status = req.body["fertilizer_status"];
    fertilizer.total = req.body["fertilizer_total"];
    fertilizer.topic = req.body["fertilizer_item_topic"];
    fertilizer.tankLevel = req.body["fertilizer_tank_level"];
    const tokenID = req.body["tokenID"];
    const userData = await checkAccessToken(tokenID);
    if (!userData) {
      res.json({ message: "tokenID expire" });
    } else {
      await getCustomRepository(FertilizerItemRepository).save(fertilizer);
      res.send("success");
    }
  } catch (error) {
    throw error;
  }
});

// Registrt

app.post("/register", async (req: Request, res: Response) => {
  try {
    const user = new User();
    user.username = req.body["username"];
    user.password = req.body["password"];
    user.firstName = req.body["fname"];
    user.lastName = req.body["lname"];
    user.email = req.body["email"];
    user.tel = req.body["tel"];
    const userDB = await getCustomRepository(UserRepository).findOne({
      username: user.username,
    });
    if (userDB) return res.json({ message: "this user is alredy" });
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(user.password, salt, function (err, hash) {
        user.password = hash;
        getCustomRepository(UserRepository).save(user);
        res.json({ message: "insert success" });
      });
    });
  } catch (error) {
    throw error;
  }
});

app.post("/login", async (req: Request, res: Response) => {
  const login = new loginDto();
  login.username = req.body["username"];
  login.password = req.body["password"];
  const response = await getCustomRepository(UserRepository).findOne(
    login.username
  );
  if (!response) {
    res.json({ message: "user not found" });
  } else {
    bcrypt
      .compare(login.password, response.password)
      .then(async (result) => {
        if (result) {
          const refreshToken = uuidv4();
          const accessToken = await jwt.sign(
            {
              username: response.username,
              refreshToken,
            },
            process.env.JWT_KEY
          );
          const date = new Date();
          const expire = new Date(date.getTime() + 15 * 60000);
          await getCustomRepository(RefreshTokenRepository).save({
            refreshToken,
            expire: expire,
          });
          res.json({ tokenID: accessToken });
        } else {
          res.json({ message: "username or password is incorrect" });
        }
      })
      .catch((err) => res.send({ message: "something went wrong" }));
  }
});

app.post("/tokenId", async (req: Request, res: Response) => {
  const tokenId = req.body["tokenID"];
  const userData = await checkAccessToken(tokenId);
  res.json(userData);
});

app.listen(process.env.PORT || 3000);
