const Usercart = require("../models/CartSchema")
const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const Userproducts = require("../models/ProductsSchema");
const User = require("../models/RegisterSchema");

dotenv.config();

const addtocart = expressAsyncHandler(async (req, res) => {
    try {
        const { productid, userid, quantity } = req.body;
        if (userid) {
            const filter = { userid, productid }; // Match existing cart entry
            const update = { $inc: { quantity } }; // Increment quantity by the provided value
            const options = { upsert: true, new: true, setDefaultsOnInsert: true };

            // Use async/await to wait for the operation to complete
            const updatedCart = await Usercart.findOneAndUpdate(
                filter,
                update,
                options
            );

            if (updatedCart) {
                res
                    .status(200)
                    .json({ message: "Success: Added to cart", cart: updatedCart });
            } else {
                res.status(404).json({ error: "Product or user not found" });
            }
        } else {
            res.status(400).json({ error: "Invalid userid" });
        }
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ error: "An error occurred while adding to the cart" });
    }
});
const getcartdata = expressAsyncHandler(async (req, res) => {
    try {
        const userid = req.body.userid;

        const cartItems = await Usercart.find({ userid });

        const productIds = cartItems.map((item) => item.productid);
        console.log(productIds, "productIds");

        const userProductDetails = await Userproducts.find({
            _id: { $in: productIds },
        });
        const userdetails = await User.find({
            _id: { $in: userid },
        });

        // Create an object to hold both results
        const responseData = {
            userProductDetails,
            userdetails,
        };

        res.status(200).json(responseData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

const removeFromCart = expressAsyncHandler(async (req, res) => {
    try {
        const userId = req.body.userId; // Assuming you have a userId to identify the user
        const productIdToRemove = req.body.productIdToRemove; // Assuming you send the product ID to remove
        if (userId && productIdToRemove) {
            await Usercart.findOneAndDelete({ userid: userId, productid: productIdToRemove });

            res.status(200).json({ message: 'Product removed from cart successfully' });
        } else {
            res.status(400).json({ message: 'Product  is  not removed from cart ' });

        }
        // Remove the product from the user's cart

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});



module.exports = { addtocart, getcartdata, removeFromCart };
