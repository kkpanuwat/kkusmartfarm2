const express = require("express");
const mysql = require("mysql");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const { count } = require("console");
const monk = require("monk");
const { json } = require("body-parser");
const url = "localhost:27017/kkusmartfarm";
const db = monk(url);
var router = express.Router()
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// let fertilizer = db.get("fertilizer");
// // fertilizer.find({}).then(function (reply,error){
// //   try {
// //     console.log(reply[0])
// //   } catch (error) {
// //     throw error
// //   }
// // })

// var dbConn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "kkusmartfarm",
// });
// dbConn.connect();


// app.get("/", async (req, res) => {
//   console.log("Come");
//   console.log(req.body);
//   res.header("Access-Control-Allow-Origin", "*");
//   res.status(200).json({ message: "Success" });
//   // res.status(200).json({message:200})
// });

// app.post("/login", async (req, res) => {
//   const data = req.body;
//   console.log(data);
//   let message = "success";
//   dbConn.query(
//     "SELECT * FROM username WHERE email = ? and password = ?",
//     [data.username, data.password],
//     function (error, results, fields) {
//       if (error) {
//         throw error;
//       }
//       if (results.length === 0) {
//         message = "fail";
//       }
//       res.header("Access-Control-Allow-Origin", "*");
//       res.status(200).json({ message: message, results: results[0] });
//     }
//   );
// });

// app.post("/register", async (req, res) => {
//   const form = req.body;
//   dbConn.query(
//     "INSERT INTO username set ?",
//     form,
//     function (error, results, fields) {
//       if (error) {
//         res.json({ message: "error" });
//       } else {
//         res.json({ message: "success" });
//       }
//     }
//   );
// });

// app.get("/fertilizer", async (req, res) => {
//   fertilizer.find({}).then(function (reply, err) {
//     try {
//       res.json({ datas: reply });
//     } catch (error) {}
//   });
// });

// app.put("/setmode", (req, res) => {
//   fertilizer.find({}).then(function (reply, err) {
//     try {
//       fertilizer.update(
//         { mode: reply[0].mode },
//         { $set: { mode: req.body.mode } }
//       );
//     } catch (error) {}
//   });
// });

app.listen(PORT);
