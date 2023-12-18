const expressAsyncHandler = require("express-async-handler");
const Wishlist = require("../models/wishlist");
const { default: mongoose } = require("mongoose");

const getwishlist = expressAsyncHandler(async (req, res) => {
  try {
    const wishlist = await Wishlist.aggregate([
      {
        $match: { userId: new mongoose.Types.ObjectId(req.body.userId) },
      },
      {
        $lookup: {
          from: "userproducts",
          localField: "items",
          foreignField: "_id",
          as: "items",
        },
      },
      // Add more aggregation stages if needed
    ]);

    res.status(200).send({ data: wishlist, success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const Wishlistpost = expressAsyncHandler(async (req, res) => {
  console.log("first");
  const { userId, items } = req.body;

  try {
    const findItems = await Wishlist.find({ items: { $all: items } });

    if (findItems.length > 0) {
      res.status(201).send({ msg: "Product is existing", success: false });
    } else {
      const wishlist = new Wishlist({ userId, items });
      await wishlist.save();
      console.log("Wishlist created:", wishlist);
      res.status(200).send({ data: wishlist, success: true });
    }
  } catch (err) {
    console.error("Error creating Wishlist:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to remove an item from the wishlist

const wishListdelete = expressAsyncHandler(async (req, res) => {
  const { tableid } = req.body; // Ensure itemId is retrieved correctly
  try {
    const wishlist = await Wishlist.findByIdAndDelete(tableid);

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    res.json({ wishlist, success: true }); // Send the updated items array from the wishlist
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = { getwishlist, Wishlistpost, wishListdelete };
