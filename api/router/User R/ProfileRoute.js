const express = require("express")
const { model } = require("mongoose")
const router = express.Router()
const proflie = require("../../controller/user/Profilecontroller");
const { profileupload } = require("../../midellwear/profile");


router.post(
    '/createProfile',
    profileupload.fields([
        {
            name: 'htmlFiles',
            maxCount: 50,
        },
        {
            name: 'pdfFiles',
            maxCount: 50,
        },
    ]),
    proflie.createProfile
);

module.exports = router;