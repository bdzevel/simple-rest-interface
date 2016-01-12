// ROOT/api/authentication

var express = require("express");
var router = express.Router();

var POST = require("./handlers/post");
var DELETE = require("./handlers/delete");
var ValidateUserSession = require("./validate-user-session");

router.post("/", POST);
router.delete("/", ValidateUserSession, DELETE);

module.exports = router;