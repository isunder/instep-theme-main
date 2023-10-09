
const SUBCATEGORY = require("../models/subcategorytable")
const subcategorytable = require("../models/subcategorytable");

const create_subcategory = async (req, res) => {


    try {
        const check_sub = await SUBCATEGORY.find({ category_id: req.body.category_id, })

        req.body.subcategoryData.map(async (item) => {
            console.log(item, "first")
            const subcategrySave = new SUBCATEGORY({
                category_id: item.category_id,
                subcategory: item.subcategory
            })
            const sub_cat_data = await subcategrySave.save()
            res.status(200).send({ sucess: true, msg: "subcategory details", data: sub_cat_data })
        })





    } catch (error) {
        res.status(400).send({ sucess: false, msg: error.message })
    }

}

const subcategorydata = async (req, res) => {
    try {
        const getdata = await SUBCATEGORY.find();
        if (getdata.length > 0) {
            res.send(getdata);
        } else {
            res.send({ result: "no SUBCATEGORY  found" });
        }

    } catch (error) {
        res.status(400).send({ succes: false, msg: error.message })

    }

}



const deletesubcategory = async (req, res) => {

    try {

        if (req.body && req.body.subcategoryid) {


            const subcategoryId = req.body.subcategoryid;
           
            await brandtable.deleteMany({ subcategory_id: subcategoryId });

            await subcategorytable.deleteMany({ subcategory_id: subcategoryId });
            

            const productDlt = await Userproducts.deleteMany({ subcategory: subcategoryId });


            res.status(200).send({ result: productDlt, success: true });



        } else {

            res.status(400).send({ error: "Invalid request  give subcategoryid for delete" });

        }

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    create_subcategory, subcategorydata, deletesubcategory
}