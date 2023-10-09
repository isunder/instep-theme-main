
const express = require("express");
const router = express.Router();

const CategoryControlermain = require("../controller/CategoryControler");
const { categoeyupload } = require("../midellwear/diskcategory");

router.post("/addcategory", categoeyupload.fields([
    { name: "images", maxCount: 1 },
]), CategoryControlermain.adddCategory);
router.post("/getcategory", CategoryControlermain.filtercategory);
router.get("/getOnlycategory", CategoryControlermain.getcategorydata);
// router.post("/Deletecategory", CategoryControlermain.deletecategory);
router.post("/Deletecategory", CategoryControlermain.categoryfull);





module.exports = router;
