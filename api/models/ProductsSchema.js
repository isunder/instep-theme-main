const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
  },

  images: [
    {
      type: String,
    },
  ],
  brand: {
    type: String,
    required: true,
  },
  discountpercentage: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

ProductSchema.set("productsof", true);

const Userproducts = mongoose.model("Userproducts", ProductSchema);
module.exports = Userproducts;
