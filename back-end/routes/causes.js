var express = require("express");
var router = express.Router();

const causeController = require("../controllers/causes.controller");
const { loginRequired } = require("../middlewares/authentication");

//Create new cause
router.post("/", causeController.createCause);

//Edit a cause
router.put("/:id", causeController.editCause);

//Get cause info
router.get("/:id", causeController.getCauseInfo);

//Get all cause
router.get("/", causeController.getAllCause);

module.exports = router;
