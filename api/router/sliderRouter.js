const express = require("express");
const router = express.Router();
const slider = require("../controller/sliderController")

router.post("sliderpost",slider.slidercreate)


module.exports = router;