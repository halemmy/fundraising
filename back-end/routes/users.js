var express = require("express");
var router = express.Router();

const userController = require("../controllers/users.controller");
const { loginRequired } = require("../middlewares/authentication");

//Create new user
router.post("/", userController.createUser);

//Edit a user
router.put("/:id", loginRequired, userController.editUser);

//Get user info
router.get("/:id", loginRequired, userController.getUserInfo);

module.exports = router;
