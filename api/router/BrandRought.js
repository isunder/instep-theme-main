const express = require("express");
const router = express.Router();

const brandController = require("../controller/brandController");

router.post("/addbrand", brandController.create_brand);
router.get("/getOnlybrand", brandController.brandgetdata);
router.post("/Deletebrand", brandController.deletebrand);

module.exports = router;
