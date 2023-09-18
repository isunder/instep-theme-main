
const express = require("express");
const router = express.Router();

const CategoryControlermain = require("../controller/CategoryControler");

router.post("/addcategory",CategoryControlermain.adddCategory );
router.post("/getcategory",CategoryControlermain.filtercategory );


module.exports = router;
