const express = require("express");
const router = express.Router();
const adresscontrole = require("../controller/AddressController")

router.post("/addresscreate", adresscontrole.createAddress)
router.post("/addressget", adresscontrole.getAddress)


module.exports = router;