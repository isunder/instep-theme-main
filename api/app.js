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
// const userproducts = require("./models/ProductsSchema");
// const categorytable = require("./models/categorytable");
const productsjson = require("./home");
const Userproducts = require("./models/ProductsSchema");
dotenv.config();

const DB =
  // "mongodb+srv://amit71instep:Amit123@cluster0.kmujczi.mongodb.net/?retryWrites=true&w=majority";
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
          username: UserEmail[0]?.username,
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
server.post("/api/products", async (req, res) => {
  const {
    category,
    description,
    title,
    price,
    images,
    brand,
    rating,
    subcategory,
    thumbnail,
    stock,
    discountpercentage,
  } = req.body;

  const data = new Userproducts({
    category: req.body.category,
    description: req.body.description,
    title: req.body.title,
    price: req.body.price,
    images: req.body.images,
    brand: req.body.brand,
    rating: req.body.rating,
    subcategory: req.body.subcategory,
    thumbnail: req.body.subcategory,
    stock: req.body.stock,
    discountpercentage: req.body.discountpercentage,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

//api of products all   category and subcategory,brand for admin

server.post("/api/Getproducts", async (req, resp) => {
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

  if (req.body.category) {
    if (req.body.category) {
      const filter = await Userproducts.find({ category: req.body.category });

      console.log(filter);

      try {
        resp.send(filter);
      } catch (error) {
        resp.send({ result: "no category products found" });
      }
    } else if (req.body.subcategory) {
      console.log("object", req.body.subcategory);
      const filter = await Userproducts.find({
        subcategory: "smartphones",
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
    console.log(req, resp, "console.log");
    let products = await Userproducts.find();

    if (products.length > 0) {
      resp.send(products);
    } else {
      resp.send({ result: "no products found" });
    }
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
    console.log("dlet ho gya");
  } catch (error) {
    // Handle any errors that occurred during the delete process
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
