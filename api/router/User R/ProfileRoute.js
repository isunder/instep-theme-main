const express = require("express")
const { model } = require("mongoose")
const router = express.Router()
const proflie = require("../../controller/user/Profilecontroller");
const { profileupload } = require("../../midellwear/profile");
const verifyToken = require("../../midellwear/auth");


router.post(
    '/createProfile', verifyToken,
    profileupload.fields([
        {
            name: 'profileimg',
            maxCount: 1,
        }
    ]),
    proflie.createProfile
);
router.post( '/profileimgdelete', verifyToken, proflie.deleteimg);
router.post( '/getProfile', verifyToken, proflie.findprofile);

module.exports = router;