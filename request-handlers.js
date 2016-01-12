var express = require("express");
var app = express();

var logger = require("morgan");
app.use(logger("dev"));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var authRoutes = require("./api/authentication/routes");
app.use("/api/authentication", authRoutes);
var dataRoutes = require("./api/data/routes");
app.use("/api/data", dataRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next)
{
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

app.use(function (err, req, res, next)
{
	console.error(__filename + " : " + err.message);
	res.status(err.status || 500).send({ error: err.message });
});

module.exports = app;