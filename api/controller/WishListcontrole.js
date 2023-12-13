const expressAsyncHandler = require("express-async-handler");
const Wishlist = require("../models/wishlist");


const getwishlist = expressAsyncHandler(async (req, res) => {
    try {
        const wishlist = await Wishlist.find
        ({ userId: req.body.id });
   
        res.status(200).send({ data: wishlist, success: true })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

})



const Wishlistpost = expressAsyncHandler(async (req, res) => {
    console.log("first")
    const { userId, items } = req.body;
    console.log(userId, "")
    try {
        const wishlist = await Wishlist.findOneAndUpdate(
            { userId: userId },
            { $addToSet: { items: items } },
            { upsert: true, new: true }
        );

        res.status(200).send({ data: wishlist, success: true })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

})
// Endpoint to remove an item from the wishlist

const wishListdelete = expressAsyncHandler(expressAsyncHandler(async (req, res) => {
    const { itemId } = req.body.itemId;
    try {
        const wishlist = await Wishlist.findOneAndUpdate(
            { userId: req.user.id },
            { $pull: { items: itemId } },
            { new: true }
        );
        res.json(wishlist.items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }


}))

module.exports = { getwishlist, Wishlistpost, wishListdelete };
