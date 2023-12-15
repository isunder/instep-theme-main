const express = require("express");
const router = express.Router();
const slider = require("../controller/sliderController");
const { uploadForImages } = require("../midellwear/slider");

router.post("sliderpost", uploadForImages.fields([{ name: "sliderimg", maxCount: 4 }]),slider.slidercreate)


module.exports = router;