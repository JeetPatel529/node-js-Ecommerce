const express = require("express");
const app = express();
const categoryRouter = require("./categoryRouter")


app.use("/", categoryRouter)




module.exports = app