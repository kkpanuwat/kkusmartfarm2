const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());
var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kkusmartfarm",
});
app.get("/me", (req, res) => {
  return res.json({
    data: {
      user,
    },
  });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  dbConn.query(
    "SELECT * FROM username WHERE email = ? and password = ?",
    [email, password],
    function (error, results, fields) {
      if (error) {
        throw error;
      }
      if (results.length === 0) {
        return res.status(401).json({
          message: "Invalid Password",
        });
      }
      return res.json({
        data: {
          results,
          token: "THIS_IS_TOKEN",
        },
      });
    }
  );
});



app.listen(5000);
