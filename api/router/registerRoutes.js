const express = require("express");
const router = express.Router();

const { UserRegister } = require("../controller/registerControllers");

router.post("/register", UserRegister);


module.exports = router;
