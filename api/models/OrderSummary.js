const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    deliveryAddress: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    products: [
        {
            productID: {
                type: mongoose.Schema.ObjectId,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
});

const SchemaOrder = mongoose.model('Order', orderSchema);
module.exports = SchemaOrder;