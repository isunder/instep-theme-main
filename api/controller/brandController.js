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

module.exports = {
    create_brand
}
