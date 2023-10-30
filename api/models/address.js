const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({

    userID: {
        type: mongoose.Schema.ObjectId,
    }, name: {
        type: String
    }, mobilenumber: {
        type: Number
    },
    pincode: {
        type: String
    }, Locality: {
        type: String
    }, Address: {
        type: String
    }, state:
    {
     type: String
    }, landmark: {
        type: String
    }, AlternateNumber: {
        type: Number
    }
});
addressSchema.set("addressSchema", true);

const UserAddress = mongoose.model("address", addressSchema);

module.exports = UserAddress;
