var tokens = require("../tokens");

function ValidateUserSession(request, response, next)
{
	var token = request.body["token"] || request.headers.token;
	for (var i in tokens)
	{
		var tk = tokens[i];
		if (tk === token)
		{
			console.log("User session validated!");
			next();
			return;
		}
	}
	console.error("Invalid user session");
	response.status(401).end();
}

module.exports = ValidateUserSession;