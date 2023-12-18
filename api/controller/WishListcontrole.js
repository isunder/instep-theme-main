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
    console.log(userId, items, "ssd");
    try {
        const wishlist = new Wishlist(
            { userId: userId, items: items },

        );

        const x = await wishlist.save()
        res.status(200).send({ data: x, success: true });
    } catch (err) {
        res.status(500).json({ message: err.message });
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
