
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

module.exports = {
    create_subcategory,subcategorydata
}