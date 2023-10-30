const express = require("express");
const router = express.Router();
const adresscontrole = require("../controller/AddressController")

router.post("/addresscreate", adresscontrole.createaddres)

module.exports = router;