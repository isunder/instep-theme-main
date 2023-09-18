
const express = require("express");
const router = express.Router();

const { create_subcategory } = require("../controller/Subcategory");

router.post("/addsubcatgeory", create_subcategory);

module.exports = router;
