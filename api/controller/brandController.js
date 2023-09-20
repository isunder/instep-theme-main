const brands = require("../models/brandSchema")
const create_brand = async (req, res) => {
    try {
        const check_sub = await brands.find({ subcategory_id: req.body.subcategory_id, })
        console.log(check_sub, "dddddddddddd")
        const savebrand = new brands({
            // category_id: req.body.category_id,
            subcategory_id: req.body.subcategory_id,
            brand: req.body.brand
        })
        const brand_cat_data = await savebrand.save()
        res.status(200).send({ sucess: true, msg: "brand details", data: brand_cat_data })

        // if (check_sub.length > 0) {

        //     let checking = false
        //     for (let i = 0; i < check_sub.length; i++) {
        //         console.log(req.body.brand, "Ddddddddddddddddd")


        //         if (check_sub[i]['brand'].toLowerCase() === req.body.brand.toLowerCase()) {
        //             checking = true;
        //             break;
        //         }

        //     }
        //     if (checking === false) {


        //         const savebrand = new brands({
        //             // category_id: req.body.category_id,
        //             subcategory_id: req.body.subcategory_id,
        //             brand: req.body.brand
        //         })
        //         const brand_cat_data = await savebrand.save()
        //         res.status(200).send({ sucess: true, msg: "brand details", data: brand_cat_data })

        //     } else {
        //         res.status(200).send({ sucess: true, msg: "this brand (" + req.body.brand + ") is exist", })


        //     }
        // } else {


        // }



    } catch (error) {

        res.status(400).send({ sucess: false, msg: error.message })

    }
}
const brandgetdata = async (req, res) => {
    try {
        const getdata = await brands.find();
        if (getdata.length > 0) {
            res.send(getdata);
        } else {
            res.send({ result: "no brands  found" });
        }

    } catch (error) {
        res.status(400).send({ succes: false, msg: error.message })

    }

}

const deletebrand = async (req, res) => {

    try {
        const { _id } = req.body;


        const deletedbrand = await brands.findByIdAndDelete(_id);

        if (!deletedbrand) {
            // If the product with the given ID doesn't exist, return an error response
            return res.status(404).json({ message: "brand not found" });
        }

        // Return the deleted product

        // res.send(deletedcategory)
        res.status(200).send({ success: true, msg: "brand data delete", data: deletedbrand })


        console.log("delete done category");
    } catch (error) {
        // Handle any errors that occurred during the delete process
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    create_brand, brandgetdata, deletebrand
}
