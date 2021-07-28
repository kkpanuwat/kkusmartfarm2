const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);



app.post("/login", async (req, res) => {
    console.log(req.body.tel)
    res.json({message:"ok"})
});

app.listen(PORT);
