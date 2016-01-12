var tokens = require("../../tokens");

function DELETE(request, response)
{
	// Log user out
	if (tokens.length > 0)
		tokens.splice(1, 0);
	response.status(200).end();
};

module.exports = DELETE;