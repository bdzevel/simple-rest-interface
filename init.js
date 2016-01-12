var http = require("http");
var handlers = require("./request-handlers");

const port = 8000;
var httpServer = http.createServer(handlers);
httpServer.listen(port);
httpServer.on("error", OnError);

function OnError(error)
{
	if (error.syscall !== "listen")
	{
		throw error;
	}

	var bind = typeof port === "string"
		? "Pipe " + port
		: "Port " + port;

	// handle specific listen errors with friendly messages
	switch (error.code)
	{
		case "EACCES":
			console.error(__filename + " : " + bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(__filename + " : " + bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
}

function HandleFileError(e)
{
	console.error(__filename + " : " + e.toString());
	if (e.code == "ENOENT")
	{
		process.exit(1);
	}
	throw e;
}