const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const Userproducts = require("../models/ProductsSchema");
const { UserState } = require("realm");
const { status } = require("express/lib/response");
const categorytable = require("../models/categorytable");
const subcategorytable = require("../models/subcategorytable");
const brandtable = require("../models/brandSchema");
const { default: mongoose } = require("mongoose");

dotenv.config();

const postproduct = expressAsyncHandler(async (req, res) => {
  console.log("req.body.userData:", req.body?.userData?.id);
  const userData = JSON.parse(req.body.userData);

  try {

    const userData = JSON.parse(req.body.userData);

    const imagesFilenames = req.files["images"].map((file) => file.filename); // Array of image filenames
    console.log(req.files.images[0].filename, "req.files");

    const thumbnailFilename = req.files.thumbnail[0].filename;


    console.log(userData, "ggggggggggg")



    const productadd = new Userproducts({
      category: userData.category_id,
      description: userData.description,
      title: userData.title,
      price: userData.price,
      images: imagesFilenames,
      brand: userData.brand_id,
      rating: userData.rating,
      subcategory: userData.subcategory_id,
      thumbnail: thumbnailFilename,
      stock: userData.stock,
      discountpercentage: userData.discountpercentage,

    });

    await productadd.save();

    // Send a JSON response indicating success
    res.status(200).json({ message: "Success: Product uploaded.", product: productadd });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }




});

// get all products
const getproduct = expressAsyncHandler(async (req, res) => {
  try {


    // ////
    const products = await Userproducts.aggregate([
      // idConversionStage, // Comment this out for now
      {
        $lookup: {
          from: "categorytables",
          localField: "category",
          foreignField: "_id",
          as: "category"
        }
      }
      ,
      {
        $lookup: {
          from: "subcategorytables",
          localField: "subcategory",
          foreignField: "_id",
          as: "subcategory"
        }
      },
      {
        $lookup: {
          from: "brandtables",
          localField: "brand",
          foreignField: "_id",
          as: "brand"
        }
      }
    ]);

    // Log the products and categoryData to inspect the results
    console.log("Products:", JSON.stringify(products, null, 2));

    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ result: "No products found" });
    }





  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching products", error });
  }
})
// api category and subcategory,brand for admin filter
const getfilter = expressAsyncHandler(async (req, res) => {

  const {
    category,
    description,
    title,
    price,
    image,
    brand,
    rating,
    subcategory,
    thumbnail,
    stock,
    discountpercentage,
  } = req.body;

  if (req.body) {
    if (req.body.category) {
      const filter = await Userproducts.find({ category: category });

      console.log(filter);

      try {
        res.send(filter);
      } catch (error) {
        res.send({ result: "no category products found" });
      }
    } else if (req.body.subcategory) {
      console.log("sssssssssssssss");
      const filter = await Userproducts.find({
        subcategory: req.body.subcategory,
      });

      console.log(filter, "filter");
      try {
        res.send(filter);
      } catch (error) {
        res.send({ result: "no subcategory products found" });
      }
    } else if (req.body.brand) {
      const filter = await Userproducts.find({ brand: req.body.brand });
      try {
        res.send(filter);
      } catch (error) {
        res.send({ result: "no brand products found" });
      }
    }
  } else {
    {
      res.send({ result: "no products found" });
    }
  }

})
// category find onlyyyyyy filter
// 25/08 category/men
const categoryfilter = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.params.category, "category");
    const name = req.params.category;
    console.log("Querying for category:", name);
    const filter = await Userproducts.find({ category: name });
    console.log("Filter result:", filter);
    res.send(filter);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message, message: "Server error" });
  }
})
// subcategory find onlyyyyyy filter
const subcategoryfilter = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.params.subcategory, "aaa");
    const name = req.params.subcategory;
    console.log("Querying for category:", name);
    const filter = await Userproducts.find({ subcategory: name });
    console.log("Filter result:", filter);
    res.send(filter);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message, message: "Server error" });
  }
})

const updateproduct = expressAsyncHandler(async (req, res) => {
  try {
    const userData = JSON.parse(req.body.userData);
    const product = userData?.id;

    // Check if the user wants to update images and thumbnail
    const updateImages = userData?.updateImages;
    const updateThumbnail = userData?.updateThumbnail;

    // Create an object to store the fields to be updated
    const updateFields = {};

    if (updateImages) {
      const imagesFilenames = req.files["images"].map((file) => file.filename);

      updateFields.images = imagesFilenames;
    }

    if (updateThumbnail) {
      const thumbnailFilename = req.files.thumbnail[0].filename;
      updateFields.thumbnail = thumbnailFilename;
    }

    // Update other fields if needed
    updateFields.description = userData?.description;
    updateFields.title = userData?.title;
    updateFields.price = userData?.price;
    updateFields.rating = userData?.rating;
    updateFields.stock = userData?.stock;
    updateFields.discountPercentage = userData?.discountPercentage;

    const findbyid = await Userproducts.findByIdAndUpdate(
      { _id: product },
      updateFields, // Use the updateFields object to only update selected fields
      { new: true }
    );

    res.send(findbyid);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
// getSingleProduct 
const getSingleProduct = expressAsyncHandler(async (req, res) => {
  const productId = req.body._id; // Assuming the product ID is in the URL params
  console.log(productId, "product ID");
  
  try {
   

    // Aggregate to retrieve the single product with category, subcategory, and brand
   
    const product = await Userproducts.aggregate([
      {
        $match: { _id:new  mongoose.Types.ObjectId(productId) }, // Match the product by ID
      },
      {
        $lookup: {
          from: "categorytables",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $lookup: {
          from: "subcategorytables",
          localField: "subcategory",
          foreignField: "_id",
          as: "subcategory",
        },
      },
      {
        $lookup: {
          from: "brandtables",
          localField: "brand",
          foreignField: "_id",
          as: "brand",
        },
      },
    ]);
    console.log(product, "product");

    if (product.length > 0) {
      // Since product is an array, return the first (and only) result
      const singleProduct = product[0];

      // Extract the category, subcategory, and brand objects from the arrays
      const category = singleProduct.category[0];
      const subcategory = singleProduct.subcategory[0];
      const brand = singleProduct.brand[0];

      // Merge the extracted data into a single object
      const result = {
        ...singleProduct,
        category,
        subcategory,
        brand,
      };

      res.status(200).json(result);
    } else {
      res.status(404).json({ result: "Product not found" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching the product", error });
  }
});








module.exports = { postproduct, getproduct, getfilter, categoryfilter, subcategoryfilter, updateproduct, getSingleProduct };
