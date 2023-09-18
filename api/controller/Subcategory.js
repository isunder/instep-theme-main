
const SUBCATEGORY = require("../models/subcategorytable")
const create_subcategory = async (req, res) => {


    try {
        const check_sub = await SUBCATEGORY.find({ category_id: req.body.category_id, })

        req.body.cotData.map(async(item)=>{
            console.log(item,"first")
                      const subcategrySave = new SUBCATEGORY({
                    category_id: item.category_id,
                    subcategory: item.subcategory
                })
                const sub_cat_data = await subcategrySave.save()
                res.status(200).send({ sucess: true, msg: "subcategory details", data: sub_cat_data })
        })

        // if (check_sub.length > 0) {
        //     let checking = false
        //     for (let i = 0; i < check_sub.length; i++) {
        //         console.log(req.body.subcategory,"Ddddddddddddddddd")

        //         if (check_sub[i]['subcategory'].toLowerCase() === req.body.subcategory.toLowerCase()) {
        //             checking = true;
        //             break;
        //         }

        //     }
        //     if (checking === false) {

        //         const subcategrySave = new SUBCATEGORY({
        //             category_id: req.body.category_id,
        //             subcategory: req.body.subcategory
        //         })
        //         const sub_cat_data = await subcategrySave.save()
        //         res.status(200).send({ sucess: true, msg: "subcategory details", data: sub_cat_data })

        //     } else {


        //         res.status(200).send({ sucess: true, msg: "this subcategory (" + req.body.subcategory + ") is exist", })

        //     }

        // }
    



    } catch (error) {
        res.status(400).send({ sucess: false, msg: error.message })
    }

}
module.exports = {
    create_subcategory
}