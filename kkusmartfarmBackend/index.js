const express = require("express");
const mysql = require("mysql");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const { count } = require("console");
const monk = require("monk");
const { json } = require("body-parser");
const url = "localhost:27017/kkusmartfarm";
const db = monk(url);

// require routes
var fertilizer = require('./routes/fertilizer');

const app = express();
app.use(cors());
app.use(express.json());

// use routes
app.use('/fertilizer', fertilizer);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(5000);