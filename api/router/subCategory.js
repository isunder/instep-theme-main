const express = require("express");
const router = express.Router();

const Subcategory = require("../controller/Subcategory");

router.post("/addsubcategory", Subcategory.create_subcategory);
router.get("/getOnlysubcategory", Subcategory.subcategorydata);
router.post("/Deletesubcategory", Subcategory.deletesubcategory);
// api for find typesubcategory
router.post("/findtypesubcategory", Subcategory.findtypesub);


module.exports = router;
