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
    const { userId, items } = req.body;
  
    try {
        const wishlist = new Wishlist({ userId: userId, items: items });
        const x = await wishlist.save();
        res.status(200).send({ data: x, success: true });
    } catch (err) {
        if (err.code === 11000 && err.keyPattern && err.keyPattern.items) {
            // Duplicate key error for the 'items' field
            res.status(202).json({ message: 'Duplicate items found in the wishlist.',success:false });
        } else {
            // Handle other errors
            res.status(500).json({ message: err.message });
        }
    }
});

// Endpoint to remove an item from the wishlist

const wishListdelete = expressAsyncHandler(async (req, res) => {
    const { itemId, userId } = req.body; // Ensure itemId is retrieved correctly
    try {
        const wishlist = await Wishlist.findOneAndUpdate(
            { userId: userId }, // Find Wishlist for the user
            { $pull: { items: itemId } }, // Pull/remove the specific itemId from the items array
            { new: true } // To get the updated wishlist after modification
        );

        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        res.json(wishlist.items); // Send the updated items array from the wishlist
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = { getwishlist, Wishlistpost, wishListdelete };
