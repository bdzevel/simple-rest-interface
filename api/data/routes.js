// ROOT/api/goals

var express = require("express");
var router = express.Router();

var ValidateUserSession = require("../authentication/validate-user-session");
var GET = require("./handlers/get");
var POST = require("./handlers/post");
var DELETE = require("./handlers/delete");

router.get("/", ValidateUserSession, GET);
router.post("/", ValidateUserSession, POST);
router.delete("/:name", ValidateUserSession, DELETE);

module.exports = router;