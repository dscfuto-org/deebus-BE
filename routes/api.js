var express = require("express");
var authRouter = require("./auth");
var queueRouter = require("./queue");
var checkAuth = require("../middlewares/checkAuth");

var app = express();

app.use("/auth/", authRouter);
app.use("/queue",checkAuth,  queueRouter);

module.exports = app;