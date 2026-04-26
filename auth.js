const express = require("express");
const router = express.Router();
const { signupUser } = require("../auth"); // or controller

router.post("/signup", signupUser);

module.exports = router;