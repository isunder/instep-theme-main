
const express = require("express");
const router = express.Router();

const Subcategory = require("../controller/Subcategory");

router.post("/addsubcatgeory", Subcategory.create_subcategory);
router.get("/getOnlysubcatgeory", Subcategory.subcategorydata);
router.post("/Deletesubcatgeory", Subcategory.deletesubcategory);



module.exports = router;
