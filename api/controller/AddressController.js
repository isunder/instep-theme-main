const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const UserAddress = require("../models/address");
dotenv.config();

const createAddress = expressAsyncHandler(async (req, res) => {
    try {
        const {
            userID,
            name,
            mobilenumber,
            pincode,
            Locality,
            address,
            state,
            landmark,
            AlternateNumber,
            addresstype
        } = req.body;
        console.log(req.body)

        // Create a new UserAddress instance with the data
        const addressToSave = new UserAddress({
            userID: userID,
            name: name,
            mobilenumber: mobilenumber,
            pincode: pincode,
            Locality: Locality,
            addresstype: addresstype,
            address: address,
            state: state,
            landmark: landmark,
            AlternateNumber: AlternateNumber,
        });

        // Save the address data to the database
        const savedAddress = await addressToSave.save();

        // Return a response indicating success
        res.status(201).json(savedAddress);
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ message: "Error saving address data", error: error.message });
    }
});

const getAddress = expressAsyncHandler(async (req, res) => {
    try {
        const { userID } = req.body; // You should typically use req.params or req.query for this

        // Find the user's address data based on the provided userID
        const userAddresses = await UserAddress.find({ userID: userID });

        if (userAddresses.length > 0) {
            res.status(200).json({ success: true, data: userAddresses });
        } else {
            res.status(404).json({
                success: false,
                msg: "No addresses found for this user.",
            });
        }
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ message: "Error getting address data", error: error.message });
    }
});



module.exports = { createAddress, getAddress }