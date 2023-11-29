const expressAsyncHandler = require("express-async-handler")
const dotenv = require("dotenv");
const userprofileSchema = require("../../models/profile")
dotenv.config();
const createProfile = expressAsyncHandler(async (req, res) => {
    try {
        const userData = JSON.parse(req.body.userData);
        const profileimg = req?.files?.image && req?.files?.image[0].filename;

        const profile = new userprofileSchema({
            userId: userData.userId,
            image: profileimg,
            firstname: userData.firstname,
            lastname: userData.lastname,
            phone: userData.phone,
            orders: userData.orders,
            wishlist: userData.wishlist,
        });

        // Save the profile to the database
        const savedProfile = await profile.save();

        if (savedProfile) {
            res.status(200).send({ success: true, data: savedProfile });
        } else {
            res.status(400).send({ msg: 'Failed to create user profile' });
        }
    } catch (error) {
        res.status(500).send({ msg: 'Server error', error: error });
    }
});


  





module.exports = { createProfile }