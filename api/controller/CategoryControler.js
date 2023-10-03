const { response } = require("express")
const modelcategory = require("../models/categorytable")
const SUBCATEGORY = require("../models/subcategorytable")
const brandtable = require("../models/brandSchema")

const adddCategory = async (req, res) => {
    console.log(req.body.userData, "data")


    try {

        const userData = JSON.parse(req.body.userData);

        // const imagesFilenames = req.files["images"].map((file) => file.filename);
        // console.log(req.files.images[0].filename, "req.files");


        const imagesFilenames = req.files.images[0].filename;


        const category_data = await modelcategory.find()
        if (category_data.length > 0) {
            let checking = false;
            for (let i = 0; i < category_data.length; i++) {
                if (category_data[i]['category'].toLowerCase() === userData?.category.toLowerCase()) {
                    checking = true;
                    break;
                }
            }

            if (checking == false) {
                const savecategory = new modelcategory({ category: userData?.category, images: imagesFilenames })
                const cat_data = await savecategory.save()
                res.status(200).send({ success: true, msg: "category data", data: cat_data })
            }
            else {
                res.status(200).send({ success: true, msg: "this category (" + userData?.category + ") is already exist." })

            }
        } else {
            const savecategory = new modelcategory({ category: userData?.category, images: imagesFilenames })
            const cat_data = await savecategory.save()
            res.status(200).send({ success: true, msg: "category data", data: cat_data })

        }
    } catch (error) {
        res.status(400).send({ succes: false, msg: error.message })
    }



}


const getcategorydata = async (req, res) => {
    try {
        const getdata = await modelcategory.find();
        if (getdata.length > 0) {
            res.send(getdata);
        } else {
            res.send({ result: "no category  found" });
        }

    } catch (error) {
        res.status(400).send({ succes: false, msg: error.message })

    }

}

const deletecategory = async (req, res) => {

    try {
        const { _id } = req.body;


        const deletedcategory = await modelcategory.findByIdAndDelete(_id);

        if (!deletedcategory) {
            // If the product with the given ID doesn't exist, return an error response
            return res.status(404).json({ message: "category not found" });
        }

        // Return the deleted product

        // res.send(deletedcategory)
        res.status(200).send({ success: true, msg: "category data delete", data: deletedcategory })


        console.log("delete done category");
    } catch (error) {
        // Handle any errors that occurred during the delete process
        res.status(500).json({ message: "Server error" });
    }
}

const filtercategory = async (req, res) => {
    const { category_id, subcategory_id } = req.body;

    try {
        if (!category_id && !subcategory_id) {
            const categories = await modelcategory.find();
            if (categories.length > 0) {
                res.send(categories);
            } else {
                res.send({ result: "No categories found" });
            }
        } else if (category_id) {
            console.log("sssssssssssssss");
            const filter = await SUBCATEGORY.find({
                category_id: category_id,
            });
            console.log(filter, "filter");
            try {
                res.send(filter);
            } catch (error) {
                res.send({ result: "no category_id found" });
            }
        } else if (subcategory_id) {
            console.log(subcategory_id, "ggggggg")
            const filter = await brandtable.find({ subcategory_id: subcategory_id })
            console.log(filter, "filter");
            try {
                res.send(filter);
            } catch (error) {
                res.send({ result: "no subcategory id found" });
            }

        }
    } catch (error) {
        res.status(500).send({ error: "An error occurred while fetching categories" });
    }
};


module.exports = {
    adddCategory, filtercategory, getcategorydata, deletecategory
}