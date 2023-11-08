const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const Userproducts = require("../models/ProductsSchema");
const { UserState } = require("realm");
const { status } = require("express/lib/response");
const categorytable = require("../models/categorytable");
const subcategorytable = require("../models/subcategorytable");
const brandtable = require("../models/brandSchema");
const { default: mongoose } = require("mongoose");
const specification = require("../models/specificationSchema");
const SchemaOrder = require("../models/OrderSummary");

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
    const page = parseInt(req.body.page); // Default to page 1
    const perPage = parseInt(req.body.perPage); // Default to 10 items per page

    const skip = (page - 1) * perPage;

    if (page && perPage) {


      const countQuery = [
        {
          $count: "totalCount"
        }
      ];

      const productsQuery = [
        {
          $lookup: {
            from: "categorytables",
            localField: "category",
            foreignField: "_id",
            as: "category"
          }
        },
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
        },
        {
          $skip: skip // Skip items based on the page number
        },
        {
          $limit: perPage // Limit the number of items per page
        }
      ];

      const [countResult, productsResult] = await Promise.all([
        Userproducts.aggregate(countQuery),
        Userproducts.aggregate(productsQuery)
      ]);

      const totalCount = countResult.length > 0 ? countResult[0].totalCount : 0;

      // Log the products to inspect the results
      console.log("Products:", JSON.stringify(productsResult, null, 2));

      if (productsResult.length > 0) {
        res.status(200).json({ products: productsResult, count: totalCount });
      } else {
        res.status(404).json({ result: "No products found" });
      }

    } else {
      const products = await Userproducts.aggregate([
        {
          $lookup: {
            from: "categorytables",
            localField: "category",
            foreignField: "_id",
            as: "category"
          }
        },
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

      // Log the products to inspect the results
      const count = products.length; // Get the count of products

      // Log the products to inspect the results
      console.log("Products:", JSON.stringify(products, null, 2));

      if (count > 0) {
        res.status(200).json({ products, count });
      } else {
        res.status(404).json({ result: "No products found" });
      }

    }

  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching products", error });
  }
});

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
      // Assuming you have uploaded and saved the new image file as 'newImage'
      const newImage = req.files["newImage"];
      if (newImage) {
        // Save the new image to the server and update the database with the new image data
        // You may also want to delete the old image from the server
        // Example code for handling the new image is needed here
        updateFields.images = newImage.filename; // Update the database with the new image filename
      }
    }

    if (updateThumbnail) {
      // Similar logic for updating the thumbnail
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
      updateFields,
      { new: true }
    );

    res.send(findbyid);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

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
// 25/08 category/id
const categoryfilter = expressAsyncHandler(async (req, res) => {

  try {

    const categoryId = req.params.category; // Assuming you're using "categoryid" as the parameter name
    console.log(categoryId, 'categoryId')
    // Use the Mongoose model for Userproducts
    const products = await Userproducts.aggregate([
      {
        $match: {
          category: new mongoose.Types.ObjectId(categoryId), // Convert categoryId to ObjectId
        },
      },
      {
        $lookup: {
          from: 'categorytables',
          localField: 'category',
          foreignField: '_id',
          as: 'category',
        },
      },
      {
        $lookup: {
          from: 'subcategorytables',
          localField: 'subcategory',
          foreignField: '_id',
          as: 'subcategory',
        },
      },
      {
        $lookup: {
          from: 'brandtables',
          localField: 'brand',
          foreignField: '_id',
          as: 'brand',
        },
      },
    ]);
    console.log(products, "ddd")
    if (products.length > 0) {
      // Assuming you want to return the first product found
      const product = products;
      console.log(product,)
      // Extract category, subcategory, and brand
      const category = product.category;
      const subcategory = product.subcategory;
      const brand = product.brand;

      // Merge the extracted data into a single object
      const result = [
        ...product,
        category,
        subcategory,
        brand,
      ];

      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'No products found for the given category ID' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message, message: 'Server error' });
  }
});

// subcategory find onlyyyyyy filter
const subcategoryfilter = expressAsyncHandler(async (req, res) => {

  try {
    const subcategoryId = req.params.subcategory; // Assuming you're using "categoryid" as the parameter name
    console.log(subcategoryId, 'categoryId')
    // Use the Mongoose model for Userproducts
    const products = await Userproducts.aggregate([
      {
        $match: {
          subcategory: new mongoose.Types.ObjectId(subcategoryId), // Convert categoryId to ObjectId
        },
      },
      {
        $lookup: {
          from: 'categorytables',
          localField: 'category',
          foreignField: '_id',
          as: 'category',
        },
      },
      {
        $lookup: {
          from: 'subcategorytables',
          localField: 'subcategory',
          foreignField: '_id',
          as: 'subcategory',
        },
      },
      {
        $lookup: {
          from: 'brandtables',
          localField: 'brand',
          foreignField: '_id',
          as: 'brand',
        },
      },
    ]);
    console.log(products, "ddd")
    if (products.length > 0) {
      // Assuming you want to return the first product found
      const product = products;

      // Extract category, subcategory, and brand
      const category = product.category;
      const subcategory = product.subcategory;
      const brand = product.brand;

      // Merge the extracted data into a single object
      const result = {
        ...product,
        category,
        subcategory,
        brand,
      };

      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'No products found for the given subcategory ID' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message, message: 'Server error' });
  }
})


// getSingleProduct 
const getSingleProduct = expressAsyncHandler(async (req, res) => {
  const productId = req.body._id; // Assuming the product ID is in the URL params
  console.log(productId, "product ID");

  try {


    const product = await Userproducts.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(productId) }, // Match the product by ID
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
      }, {
        $lookup: {
          from: "spacifecations",
          localField: "spacifecations",
          foreignField: "_id",
          as: "spacifecations",
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

// filter 
const filterall = expressAsyncHandler(async (req, res) => {
  try {
    const categoryId = req.query.categoryId; // Query parameter for category
    const subcategoryId = req.query.subcategoryId; // Query parameter for subcategory
    const brandId = req.query.brandId; // Query parameter for brand
    const minPrice = parseFloat(req.query.minPrice); // Query parameter for minimum price
    const maxPrice = parseFloat(req.query.maxPrice); // Query parameter for maximum price
    const minDiscount = parseFloat(req.query.minDiscount); // Query parameter for minimum discount percentage

    // Build the filter object based on the query parameters
    const filter = {};


    if (categoryId) {
      filter.category = new mongoose.Types.ObjectId(categoryId);
    }


    if (subcategoryId) {
      filter.subcategory = new mongoose.Types.ObjectId(subcategoryId);
    }

    if (brandId) {
      filter.brand = new mongoose.Types.ObjectId(brandId);
    }

    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      filter.price = {
        $gte: minPrice,
        $lte: maxPrice,
      };
    }

    if (!isNaN(minDiscount)) {
      filter.discountpercentage = {
        $gte: minDiscount,
      };
    }
    console.log(filter, "ddddddddd")
    // Use the Mongoose model for Userproducts to apply the filter
    const products = await Userproducts.aggregate([
      {
        $match: filter,
      },
      {
        $lookup: {
          from: 'categorytables',
          localField: 'category',
          foreignField: '_id',
          as: 'category',
        },
      },
      {
        $lookup: {
          from: 'subcategorytables',
          localField: 'subcategory',
          foreignField: '_id',
          as: 'subcategory',
        },
      },
      {
        $lookup: {
          from: 'brandtables',
          localField: 'brand',
          foreignField: '_id',
          as: 'brand',
        },
      },
    ]);

    if (products.length > 0) {
      // Return the filtered products
      res.status(200).json(products);
    } else {
      res.status(404).json({ message: 'No products found for the given filters' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message, message: 'Server error' });
  }
});

// spacifeaction create

const specificationpost = expressAsyncHandler(async (req, res) => {
  // console.log("test");

  if (req.body.ProductID) {
    try {
      // Destructure the values from req.body
      const {
        ProductID,
        color,
        size,
        Material,
        SizeChart,
        DesignStyle,
        KeyFeatures,
        TechnicalSpacifecation,
        DimensionsWeight,
        Display,
        BatteryPower,
        Connectivity,
        Camera,
        WarrantySupport,
        IncludedAccessories,
        Storage,
        UsageInstructions,
        PowerRequirements,
        InstallationRequirements,
        EnvironmentalImpact,
        AdditionalInformation,
        DimensionsSize,
        AssemblyInstructions
      } = req.body;

      // Create a new instance of your Mongoose model
      const infoofproducts = new specification({
        ProductID: ProductID,
        color: color,
        size: size,
        Material: Material,
        SizeChart: SizeChart,
        DesignStyle: DesignStyle,
        KeyFeatures: KeyFeatures,
        TechnicalSpacifecation: TechnicalSpacifecation,
        DimensionsWeight: DimensionsWeight,
        Display: Display,
        BatteryPower: BatteryPower,
        Connectivity: Connectivity,
        Camera: Camera,
        WarrantySupport: WarrantySupport,
        IncludedAccessories: IncludedAccessories,
        Storage: Storage,
        UsageInstructions: UsageInstructions,
        PowerRequirements: PowerRequirements,
        InstallationRequirements: InstallationRequirements,
        EnvironmentalImpact: EnvironmentalImpact,
        AdditionalInformation: EnvironmentalImpact,
        DimensionsSize: DimensionsSize,
        AssemblyInstructions: AssemblyInstructions,
      });

      // Save the data to the database
      await infoofproducts.save();

      res.status(201).json({ message: "Product specification saved successfully" });
    } catch (error) {
      // Handle any errors that might occur during processing.
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    }
  } else {
    res.status(400).json({ message: "Invalid request. Missing ProductID." });
  }
});

// spacifeaction update

const updateProductspecificationpost = expressAsyncHandler(async (req, res) => {
  try {
    const productId = req.body.ProducttableID;
    console.log(productId, "Dddddddddddddfdfds")

    const updateFields = {
      ProductID: req.body.ProductID,
      color: req.body.color,
      size: req.body.size,
      Material: req.body.Material,
      SizeChart: req.body.SizeChart,
      DesignStyle: req.body.DesignStyle,
      KeyFeatures: req.body.KeyFeatures,
      TechnicalSpacifecation: req.body.TechnicalSpacifecation,
      DimensionsWeight: req.body.DimensionsWeight,
      Display: req.body.Display,
      BatteryPower: req.body.BatteryPower,
      Connectivity: req.body.Connectivity,
      Camera: req.body.Camera,
      WarrantySupport: req.body.WarrantySupport,
      IncludedAccessories: req.body.IncludedAccessories,
      Storage: req.body.Storage,
      UsageInstructions: req.body.UsageInstructions,
      PowerRequirements: req.body.PowerRequirements,
      InstallationRequirements: req.body.InstallationRequirements,
      EnvironmentalImpact: req.body.EnvironmentalImpact,
      AdditionalInformation: req.body.AdditionalInformation,
      DimensionsSize: req.body.DimensionsSize,
      AssemblyInstructions: req.body.AssemblyInstructions
    };

    const product = await specification.findByIdAndUpdate(
      { _id: productId },
      updateFields,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product information updated successfully", updatedProduct: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});



//  after   DELIVERY ADDRESS done

const orderSummary = expressAsyncHandler(async (req, res) => {
  try {
    console.log("test orderSummary");

    const { userid, deliveryAddress, products } = req.body;

    if (userid) {
      console.log(products)
      // Assuming 'Userproducts' is a mongoose model, use the 'findById' method like this:
      const productPromises = products.map(async (item) => {
        console.log(item.productID, "Dfdf");
        const product = await Userproducts.findById(item.productID);
        return product;
      });

      const prices = []; 
      const pricestotal = []
      Promise.all(productPromises)
        .then((products) => {

          products.forEach((product) => {
            if (product) {
              prices.push(product.price);
              // console.log(`Price for product ${product._id}: ${product.price}`);
            } else {
              console.log("Product not found");
            }
          });

          const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);
          console.log("Total Price: ", totalPrice);
          pricestotal.push(totalPrice)
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });



      if (!products) {
        return res.status(404).json({ message: "Product not found" });
      } else {

        const order = new SchemaOrder({
          userid: userid,
          deliveryAddress: deliveryAddress,

          products: products.map((items) => {
            return { productID: items.productID, quantity: items.quantity }
          })
        });


        await order.save();


        res.status(200).json({ message: "Order created successfully", order, costing: prices, totalrpice: pricestotal });
      }



      // Save the order to the database (you need to await this if using async operations):


    } else {
      res.status(400).json({ message: "userid is missing" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});



module.exports = { postproduct, getproduct, getfilter, categoryfilter, subcategoryfilter, updateproduct, getSingleProduct, filterall, specificationpost, updateProductspecificationpost, orderSummary };
