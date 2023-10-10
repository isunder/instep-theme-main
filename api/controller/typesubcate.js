
const brandtable = require("../models/brandSchema")
const subcategorytable = require("../models/subcategorytable")
const Userproducts = require("../models/ProductsSchema");
const typeofsubcategorytable = require("../models/typesubcarte")

const create_typesubcategory = async (req, res) => {


    try {
        const check_sub = await subcategorytable.find({ category_id: req.body.category_id, })

        if (check_sub) {
            console.log(req.body)

            // req.body.subcategoryData.map(async (item) => {
            const typesubcategrySave = new typeofsubcategorytable({
                category_id: req.body.category_id,
                subcategory_id: req.body.subcategory_id,
                typesubcategory: req.body.typesubcategory
            })
            const typesub_cat_data = await typesubcategrySave.save()
            res.status(200).send({ sucess: true, msg: "type_subcategory details", data: typesub_cat_data })
            // }
            // )
        } else {

            res.status(400).send({ sucess: false, msg: "give me categoryid ", data: sub_cat_data })


        }




    } catch (error) {
        res.status(400).send({ sucess: false, msg: error.message })
    }

}
const get_typesubcategory = async (req, res) => {

    try {
        const dataoftypesub = await typeofsubcategorytable.find()

        if (dataoftypesub?.length > 0) {

            res.status(200).send({ sucess: true, data: dataoftypesub })



        } else {

            res.status(400).send({ sucess: false, msg: "give me categoryid " })


        }




    } catch (error) {
        res.status(400).send({ sucess: false, msg: error.message })
    }

}

const delete_typesubcat = async (req, res) => {
    try {
        const typesubcategory_id = req.body.typesubcategory_id;

        if (!typesubcategory_id) {
            return res.status(400).json({ error: "Invalid request, provide typesubcategory_id for deletion" });
        }

        // Assuming brandtable, Userproducts, and typeofsubcategorytable are properly defined or imported
        await brandtable.deleteMany({ type_subcategory_id: typesubcategory_id });
        await Userproducts.deleteMany({ type_subcategory_id: typesubcategory_id });
        const data = await typeofsubcategorytable.findByIdAndDelete({ _id: typesubcategory_id });

        res.status(200).json({ success: true, msg: "Deleted brands, products, and typeofsubcategory", data: data });
    } catch (error) {
        // Handle specific errors here, e.g., validation error or database error
        res.status(500).json({ error: error.message });
    }
};




module.exports = {
    create_typesubcategory, get_typesubcategory, delete_typesubcat
}