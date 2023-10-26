const express = require("express");
const router = express.Router();
const Razercontrole = require("../controller/rajorPayment");

router.post("/order", Razercontrole.razerpayorders);

module.exports = router;
