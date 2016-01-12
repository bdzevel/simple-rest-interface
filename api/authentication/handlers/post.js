var users = require("../../users");
var tokens = require("../../tokens");

function POST(request, response)
{
	var username = request.body["username"];
	var password = request.body["password"];
	
	if (!username)
	{
		console.error("Invalid username");
		response.status(400).send({ error: "Invalid username" });
		return;
	}
	
	for (var i in users)
	{
		var user = users[i];
		
		if (user.username === username)
		{
			console.log("Found user " + user.username);
			
			if (user.password !== password)
			{
				console.error("Invalid password");
				response.status(400).send({ error: "Invalid password" });
				return;
			}
			
			tokens.push("abcdef-my-fake-token-abcdef");
			response.status(200).send({ token: "abcdef-my-fake-token-abcdef" });
			return;
		}
	}
	
	console.error("Invalid username");
	response.status(400).send({ error: "Invalid username" });
};

module.exports = POST;