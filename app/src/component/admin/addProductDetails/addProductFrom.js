import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsPlusCircleDotted } from "react-icons/bs";
import { Field, Form as FinalForm } from "react-final-form";

import { adminPostProduct } from "../../../Redux/action/adminPostProductAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const options = [
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
];
const ProductForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const [selectedOption, setSelectedOption] = useState(null);
  const [imgupload, setImgupload] = useState("");

  console.log(imgupload, "kkkkkkkkkkkkkkkkkkkkkkkk");

  const [selectedFile, setSelectedFile] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (filesObject, name) => {
    const uniqueId = Date.now();
    const filename = uniqueId + "_" + filesObject[0].name;
    let file = new File(filesObject, filename);
    console.log(filename, "Upload IMAGE HEREEE", filesObject);
    // file["nameType"] = name;
    setImgupload(file);
    console.log(file, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  };
  const handleImgeFile = (e) => {
    // console.log(e?.target?.files[0], "eeee");
    const file = e?.target?.files[0];
    setSelectedFile(file);

    if (file) {
      // setMessage(URL.createObjectURL(selectedFile));
    }
  };
  console.log(selectedFile, "selectedFile");
  const onSubmit = (values) => {
    console.log(values, imgupload, "dddd");
    var formData = new FormData();

    const payload = {
      description: values?.description,
      category: values?.category,
      subcategory: values?.subcategory,
      title: values?.title,
      price: values?.price,
      brand: values?.brand,
      discountpercentage: values?.discountpercentage,
      stock: values?.stock,
      rating: values?.rating,
      image: selectedFile,
    };

    console.log("SHIKHA", payload);

    formData.append("images", selectedFile);
    //formData.append("imgesdd", JSON.stringify("uttututu"));
    formData.append("userData", JSON.stringify(payload));
    console.log(payload, "ggg");
    console.log(JSON.parse(formData.getAll("userData")), "data");
    dispatch(adminPostProduct(formData)).then((res) =>
      console.log(res, "Response from dispatch")
    );

    toast.success("Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });

    console.log(values, "aaaaaaaaaaaaaaaa");
  };

  const initialValues = {
    description: "",
    brand: "",
    discountpercentage: "",
    stock: "",
    // code: "",
    title: "",
    // images: "",
    price: "",
    rating: "",
  };

  const [selectedImage, setSelectedImage] = useState();
  const [uploadedImageUrl, setUploadedImageUrl] = useState();

  console.log(uploadedImageUrl, "selectedImage");
  return (
    <>
      <FinalForm
        onSubmit={onSubmit}
        // validate={validate}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <Row>
              <Col className="Admin_dashboard margin_bottom" lg={12}>
                <h3> Add Product</h3>
              </Col>
            </Row>
            <Row>
              <Col lg={9}>
                <div className=" Addnewpeoduct margin_bottom">
                  <h3 className="margin_bottom"> Basic Information</h3>
                  <div className="margin_bottom">
                    <h5 className="margin_bottom">Subcategory</h5>
                    <Field
                      className="descirption_box"
                      name="subcategory"
                      component="input"
                      type="text"
                      placeholder="subcategory"
                      required
                    />
                  </div>
                  <div className="margin_bottom">
                    <h5 className="margin_bottom">Short Description</h5>
                    <Field
                      className="descirption_box"
                      name="description"
                      component="input"
                      type="text"
                      placeholder="description"
                      required
                    />
                  </div>
                </div>
                {/* <Button className="Brandsave_button" variant="success">
            Save Brand
          </Button>{" "} */}
              </Col>
            </Row>
            <Row>
              <Col lg={9}>
                <div className=" Addnewpeoduct margin_bottom py-4">
                  <div>
                    <h5 className="margin_bottom"> Images</h5>
                    {uploadedImageUrl ? (
                      <img
                        src={uploadedImageUrl}
                        alt="image"
                        style={{ width: "inherit", height: "150px" }}
                      />
                    ) : (
                      "ggggggg"
                    )}
                    <p>Thumbnail (592x592)</p>
                    <div>
                      <h2>Upload Image</h2>

                      {/* <input
                        name="images"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImage(e)}
                      /> */}

                      <input
                        // onChange={(e) => {
                        //   handleFileChange(e?.target.files, `image${"1"}`);
                        // }}
                        name="images"
                        type="file"
                        className="form-control signup_form_input"
                        onChange={handleImgeFile}
                      />
                      {/* <button onClick={handleImageUpload}>Upload Image</button> */}
                    </div>
                    <div>
                      <h2>Uploaded Image</h2>
                      {/* {uploadedImageUrl ? (
                        <img src={uploadedImageUrl} alt="Uploaded" />
                      ) : (
                        <p>No image uploaded yet</p>
                      )} */}
                    </div>
                    {/* <div className="brand_image margin_bottom">
                      <h3>Choose brand Thumbnail</h3>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />

                       <button onClick={handleUpload}>
                        Upload Image
                        <BsPlusCircleDotted className="brand_img_icon" />
                      </button>
                    </div> */}
                  </div>
                  {/* <div>
                    <h5>Gallery</h5>
                    <div className="brand_image">
                      <h3>Choose brand Thumbnail</h3>
                      <BsPlusCircleDotted className="brand_img_icon" />
                    </div>
                  </div> */}
                </div>
                <div className="Addnewpeoduct margin_bottom py-4">
                  <div className="margin_bottom">
                    <h5 className="margin_bottom">Product Categories</h5>
                    <Field
                      className="descirption_box"
                      name="category"
                      component="select"
                      required
                    >
                      <option>Select Category</option>
                      <option>Electronics</option>
                      <option>Men</option>
                      <option>Women</option>
                      <option>Home & Kitchen</option>
                      <option>Appliances</option>
                      <option>Sports & More</option>
                      {/* {categories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))} */}
                    </Field>
                  </div>
                </div>
                <div className="Addnewpeoduct margin_bottom py-4">
                  <div className="margin_bottom">
                    <h5 className="margin_bottom">Title </h5>
                    <Field
                      className="descirption_box"
                      name="title"
                      component="input"
                      type="text"
                      placeholder="Title"
                      required
                    />
                  </div>
                </div>
                <div className="Addnewpeoduct margin_bottom py-4">
                  <div className="margin_bottom">
                    <h5>Product Brand</h5>
                    <Field
                      className="descirption_box"
                      name="brand"
                      component="input"
                      type="text"
                      placeholder="Brand Name"
                      required
                    />
                  </div>
                  {/* <div className="product_brand "> */}
                  {/* <h5>Product Unit</h5> */}
                  {/* <div className="">
                      <Select
                        name="unit"
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div> */}
                  {/* </div> */}
                </div>
                <Row>
                  <div className="Addnewpeoduct margin_bottom ">
                    <div className="sku_stok_price">
                      <div>
                        <h3>Price,Stock & Rating</h3>
                      </div>
                      {/* <Field
                        className="descirption_box"
                        name="stock"
                        component="input"
                        type="text"
                        placeholder="Avalaible stocks"
                        required
                      /> */}

                      <span>Has Variations?</span>
                    </div>
                    <div className="d-flex price_flex">
                      <Col lg={3}>
                        <h6>Price</h6>
                        <Field
                          className="descirption_box price_flex"
                          name="price"
                          component="input"
                          type="number"
                          step="0.01"
                          placeholder="$"
                          required
                        />
                      </Col>
                      <Col lg={3}>
                        <h6>Stock</h6>
                        <Field
                          className="descirption_box price_flex"
                          name="stock"
                          component="input"
                          type="text"
                          placeholder="Avalaible stocks"
                          required
                        />
                      </Col>
                      <Col lg={3}>
                        <label htmlFor="rating">Rating:</label>
                        <Field
                          className="descirption_box price_flex"
                          name="rating"
                          component="input"
                          type="text"
                          placeholder="Rating:"
                          required
                        />
                      </Col>
                      <Col lg={3}>
                        <h6>Code</h6>
                        <Field
                          className="descirption_box price_flex"
                          name="discountpercentage"
                          component="input"
                          type="text"
                          placeholder="discount percentage"
                          required
                        />
                      </Col>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
            <Button className="addproduct_button margin_bottom" type="submit">
              Add product
            </Button>
            <ToastContainer />
          </form>
        )}
      />
    </>
  );
};

export default ProductForm;
