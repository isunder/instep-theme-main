const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { App } = require("realm");
const mongoose = require("mongoose");
const User = require("./models/RegisterSchema");
const jwt = require("jsonwebtoken");
const secretkey = "secretkey";
const dotenv = require("dotenv");
const multer = require("multer");
const productsjson = require("./home");
const Userproducts = require("./models/ProductsSchema");
const Usercart = require("./models/CartSchema");
dotenv.config();

const DB =
  "mongodb+srv://noutiyalgopal:MDgopal87@cluster0.mo1orsr.mongodb.net/instepcart-backend?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log(`connection is mongoose  success`);
  })
  .catch((err) => console.log(`no connection`, err));

server.use(cors());
server.use(bodyParser.json());

//register api
server.post("/api/register", async (req, res) => {
  const { email, password, username } = req.body;

  const role = "user";
  const data = new User({
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    role: role,
  });

  try {
    const useremail = await User.findOne({ email: email });

    if (useremail) {
      res
        .status(200)
        .send({ success: false, msg: "this email is already exists" });
    } else {
      const dataToSave = await data.save();
      res.status(200).send({ success: true });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

//login api
server.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const UserEmail = await User.find({ email: email });
  if (!UserEmail) {
    res.send({ loginStatus: false, err: "User Does not Exist" });
  } else if (UserEmail) {
    const LoginVeryfy =
      UserEmail[0]?.email === email && UserEmail[0]?.password === password;
    if (LoginVeryfy) {
      console.log(UserEmail[0]);

      const token = jwt.sign(
        {
          userEmail: UserEmail[0]?.email,
          userRole: UserEmail[0]?.role,
          username: UserEmail[0].username,
          id: UserEmail[0]._id,
        },

        secretkey,
        {
          expiresIn: "8h",
        }
      );

      res.json({ loginStatus: LoginVeryfy, tokenuigiugitygtyigtyi: token });
      console.log(token, "token huuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
    } else if (!LoginVeryfy) {
      res.send({ loginStatus: false, err: "Password Dose not match" });
    }
  }
});

//api of products addd only for admin

//25/08

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const storagethumbnail = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
const uploadthumb = multer({ storage: storagethumbnail });

server.post(
  "/api/products",
  upload.fields([
    { name: "images", maxCount: 4 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const userData = JSON.parse(req.body.userData);

      console.log(userData.aaa, "aaaaaaaaaaaaaaaa");
      const imagesFilenames = req.files["images"].map((file) => file.filename); // Array of image filenames
      console.log(req.files.images[0].filename, "req.files");

      const thumbnailFilename = req.files.images[0].filename;

      // Log filenames to see if they are being extracted correctly
      console.log("Images Filenames:", imagesFilenames);
      console.log("Thumbnail Filename:", thumbnailFilename);

      let pic;
      imagesFilenames.forEach((file) => {
        pic = file;
      });
      console.log(pic, "11111111111111111");

      // Rest of your code to create and save the Userproducts document
      // ...

      const productadd = new Userproducts({
        category: userData.category,
        description: userData.description,
        title: userData.title,
        price: userData.price,
        images: imagesFilenames,
        brand: userData.brand,
        rating: userData.rating,
        subcategory: userData.subcategory,
        thumbnail: thumbnailFilename,
        stock: userData.stock,
        discountpercentage: userData.discountpercentage,
      });

      await productadd.save();
      // console.log( productadd)
      res.status(200).send("Success: Product uploaded.");
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }
);

//api of products all
server.use("/uploads", express.static("uploads"));
// http://localhost:5000/uploads/1693806012738-Capture.PNG

server.post("/api/Getproducts", async (req, resp) => {
  try {
    const products = await Userproducts.find();
    if (products.length > 0) {
      resp.send(products);
    } else {
      resp.send({ result: "no products found" });
    }
  } catch (error) {
    resp
      .status(500)
      .send({ error: "An error occurred while fetching products" });
  }
});

// category and subcategory,brand for admin filter

server.post("/api/FilterProducts", async (req, resp) => {
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
        resp.send(filter);
      } catch (error) {
        resp.send({ result: "no category products found" });
      }
    } else if (req.body.subcategory) {
      console.log("sssssssssssssss");
      const filter = await Userproducts.find({
        subcategory: req.body.subcategory,
      });

      console.log(filter, "filter");
      try {
        resp.send(filter);
      } catch (error) {
        resp.send({ result: "no subcategory products found" });
      }
    } else if (req.body.brand) {
      const filter = await Userproducts.find({ brand: req.body.brand });
      try {
        resp.send(filter);
      } catch (error) {
        resp.send({ result: "no brand products found" });
      }
    }
  } else {
    {
      resp.send({ result: "no products found" });
    }
  }
});

// category find onlyyyyyy filter

// 25/08

server.get("/api/category/:category", async (req, res) => {
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
});

// subcategory find onlyyyyyy filter

// 28/08

// http://localhost:5000/subcategory/smartphones    how to use

server.get("/api/subcategory/:subcategory", async (req, res) => {
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
});

//table addd api category

// server.post("/api/addproducts", async (req, res) => {
//   const { name } = req.body;

//   const arr = req.body.categoryData;
//   console.log(arr, "aaa");
//   categorytable.insertMany(arr);

//   try {
//     // const dataToSave = await data.save();
//     res.status(200).send({ success: true });
//   } catch (error) {
//     res.status(400).send({ message: error.message });
//   }
// });

///   category  api  next plain

server.post("/api/category", async (req, res) => {
  try {
    res.send(productsjson);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

//admn api for update from id

server.post("/api/productUpdate", async (req, res) => {
  console.log("productUpdate ddddddddddddddddddd");
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
    discountPercentage,
  } = req.body;

  const findbyid = await Userproducts.findByIdAndUpdate(
    { _id: req.body._id },
    {
      category: category,
      description: description,
      title: title,
      price: price,
      image: image,
      brand: brand,
      rating: rating,
      subcategory: subcategory,
      thumbnail: thumbnail,
      stock: stock,
      discountPercentage: discountPercentage,
    },
    {
      new: true,
    }
  );
  try {
    res.send(findbyid);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// adim api for delete

server.post("/api/procustdlt", async (req, res) => {
  try {
    const { _id } = req.body;

    // Use the findByIdAndDelete method to delete the product by its ID
    const deletedProduct = await Userproducts.findByIdAndDelete(_id);

    if (!deletedProduct) {
      // If the product with the given ID doesn't exist, return an error response
      return res.status(404).json({ message: "Product not found" });
    }

    // Return the deleted product

    res.json(deletedProduct);
    console.log("delete done");
  } catch (error) {
    // Handle any errors that occurred during the delete process
    res.status(500).json({ message: "Server error" });
  }
});

//search api   title,subcategry,categry,brand

////25/08
server.post("/api/Search", async (req, res) => {
  console.log(req.body, "hhhhhhhhhhhh");

  try {
    const keyword = req.body.name; // Get the search query parameter from the request body

    const searchResults = await Userproducts.find({
      // Customize this based on how you want to search (title, description, etc.)
      $or: [
        { title: { $regex: keyword, $options: "i" } }, // Case-insensitive search
        { description: { $regex: keyword, $options: "i" } },
        { category: { $regex: keyword, $options: "i" } },
        { brand: { $regex: keyword, $options: "i" } },
      ],
    });

    res.status(200).json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while searching." });
  }
});

// add to cart for user

// server.post("/api/Add-to-cart", async (req, res) => {

//   try {

//     const { productid, userid, quantity } = req.body;

//     if (userid) {
//       console.log(userid,"userid")
//       const cart = new Usercart({
//         productid: productid,
//         userid: userid,
//         quantity: quantity,
//       })
//       await cart.save();
//       res.status(200).send("Success: Add in cart ");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// })

server.post("/api/Add-to-cart", async (req, res) => {
  try {
    const { productid, userid, quantity } = req.body;

    if (userid) {
      const filter = { userid, productid }; // Match existing cart entry
      const update = { $inc: { quantity } }; // Increment quantity by the provided value
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };

      const updatedCart = await Usercart.findOneAndUpdate(
        filter,
        update,
        options
      );

      res
        .status(200)
        .json({ message: "Success: Added to cart", cart: updatedCart });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// getting all products from cart

server.post("/api/get-cart", async (req, res) => {
  try {
    const userid = req.body.userid;

    const cartItems = await Usercart.find({ userid });

    const productIds = cartItems.map((item) => item.productid);
    console.log(productIds, "productIds");

    const userProductDetails = await Userproducts.find({
      _id: { $in: productIds },
    });
    const userdetails = await User.find({
      _id: { $in: userid },
    });

    // Create an object to hold both results
    const responseData = {
      userProductDetails,
      userdetails,
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
