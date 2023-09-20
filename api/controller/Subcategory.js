
const SUBCATEGORY = require("../models/subcategorytable")
const create_subcategory = async (req, res) => {


    try {
        const check_sub = await SUBCATEGORY.find({ category_id: req.body.category_id, })

        req.body.subcategoryData.map(async(item)=>{
            console.log(item,"first")
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
        const { _id } = req.body;


        const deletedsubcategory = await SUBCATEGORY.findByIdAndDelete(_id);

        if (!deletedsubcategory) {
            // If the product with the given ID doesn't exist, return an error response
            return res.status(404).json({ message: "subcategory not found" });
        }

        // Return the deleted product

        // res.send(deletedcategory)
        res.status(200).send({ success: true, msg: "subcategory data delete", data: deletedsubcategory })
   

        console.log("delete done category");
    } catch (error) {
        // Handle any errors that occurred during the delete process
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    create_subcategory,subcategorydata,deletesubcategory
}