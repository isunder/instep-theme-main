const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
    // category_id: {
    //     type: String,
    //     required: true,
    // },
    subcategory_id: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
});
brandSchema.set("brandSchema", true)
const brandtable = mongoose.model("brandtable", brandSchema)

module.exports = brandtable;