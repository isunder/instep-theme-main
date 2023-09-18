
const express = require("express");
const router = express.Router();

const { create_brand } = require("../controller/brandController");

router.post("/addbrand", create_brand);

module.exports = router;
