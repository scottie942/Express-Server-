// import files and packages up here
const topSpots = require("./data.json")

// create your express server below
const express = require("express");
const morgan = require("morgan")
const app = express();

// add your routes and middleware below
app.use(morgan("tiny"));

app.get("/data", (req, res) => {
    res.json(topSpots)
})

app.get("/", (req, res) => {
    res.send("")
})

// finally export the express application
module.exports = app;
