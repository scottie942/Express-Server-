const topSpots = require("./data.json")
const express = require("express");
const morgan = require("morgan")
const app = express();

app.use(morgan("tiny"));

app.get("/data", (req, res) => {
    res.json(topSpots)
})

app.get("/", (req, res) => {
    res.send("")
})

module.exports = app;