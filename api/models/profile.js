const mongoose = require('mongoose');

const userprofileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserLogin', // Reference to the UserLogin schema for authentication
        required: true,
    },
    image: {
        type: String,
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: String,

    phone: {
        type: String,
        trim: true,
    },
    orders: [
        {
            orderId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Order',
            },
            orderDate: {
                type: Date,
                default: Date.now,
            },
            status: String,
            totalAmount: Number,
        },
    ],
    wishlist: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
            addedDate: {
                type: Date,
                default: Date.now,
            },

        },
    ],
});

module.exports = mongoose.model('Profile', userprofileSchema);