const mongoose = require('mongoose');

// Define the Wishlist schema
const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true // Each user should have only one wishlist
  },
  items: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product' // Assuming there's a Product model to reference
  }
});

// Create the Wishlist model
const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
