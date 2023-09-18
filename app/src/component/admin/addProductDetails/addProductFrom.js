import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Field, Form as FinalForm } from "react-final-form";

import { adminPostProduct } from "../../../Redux/action/adminPostProductAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { MdCancel } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";

const options = [
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
];
const ProductForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  // const [selectedOption, setSelectedOption] = useState(null);
  const [imgupload, setImgupload] = useState("");

  console.log(imgupload, "kkkkkkkkkkkkkkkkkkkkkkkk");

  const [selectedthumbnalFile, setselectedthumbnalFile] = useState([]);
  const [thumbnail, setthumbnail] = useState("");

  const handlethumbnalfile = (e) => {
    const files = e.target.files;
    const uniqueId = Date.now();
    let name = e.target.files[0].name;
    const filename = uniqueId + "_" + name;

    let file = new File(files, filename);

    setselectedthumbnalFile(file);
    console.log(file, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

    let imagesArray = [];
    // Iterate through the selected files again to read and display them as previews
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        imagesArray.push(event.target.result);
        if (imagesArray.length === files.length) {
          setthumbnail([imagesArray]);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };
  console.log(selectedthumbnalFile, "selectedthumbnalFile");

  const [selectedImagesforpost, setselectedImagesforpost] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImgeFile = (e) => {
    const files = e.target.files;
    const uniqueId = Date.now();
    let name = e.target.files[0].name;
    const filename = uniqueId + "_" + name;

    let file = new File(files, filename);
    setselectedImagesforpost([...selectedImagesforpost, file]);
    // images  which is upoads
    let imagesArray = [];
    // Iterate through the selected files again to read and display them as previews
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        imagesArray.push(event.target.result);
        if (imagesArray.length === files.length) {
          setSelectedImages([...selectedImages, imagesArray]);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };
  console.log(selectedImagesforpost, "first");
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
      image: selectedImagesforpost,
    };

    console.log("shar", payload);
    selectedImagesforpost.map((items) => {
      formData.append("images", items);
    });
    formData.append("thumbnail", selectedthumbnalFile);

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
    title: "",
    // images: "",
    price: "",
    rating: "",
  };

  const deleteimage = (index) => {
    let imagedataArray = [...selectedImagesforpost];
    let showimageArray = [...selectedImages];
    imagedataArray.splice(index, 1);
    showimageArray.splice(index, 1);
    setSelectedImages(showimageArray);
    setselectedImagesforpost(imagedataArray);
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
                    <h5 className="margin_bottom">Product Categories</h5>
                    <div className="d-flex newpeo_div">
                      <Field
                        className="addnewproduct_changes"
                        name="category"
                        component="input"
                        type="text"
                        placeholder="category"
                        required
                      />
                      <Field
                        className="addnewproduct_changes right_Addnew"
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
                  <div className="margin_bottom">
                    <h5 className="margin_bottom">Subcategory</h5>
                    <div className="d-flex newpeo_div">
                      <Field
                        className="addnewproduct_changes"
                        name="subcategory"
                        component="input"
                        type="text"
                        placeholder="subcategory"
                        required
                      />
                      <Field
                        className="addnewproduct_changes right_Addnew"
                        name="subcategory"
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
                </div>
                <div className="Addnewpeoduct margin_bottom py-4">
                  <div className="margin_bottom">
                    <h5>Product Brand</h5>
                    <div className="d-flex newpeo_div">
                      <Field
                        className="addnewproduct_changes"
                        name="brand"
                        component="input"
                        type="text"
                        placeholder="Brand Name"
                        required
                      />
                      <Field
                        className="addnewproduct_changes right_Addnew"
                        name="brand"
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
                {/* <Button className="Brandsave_button" variant="success">
            Save Brand
          </Button>{" "} */}

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
              </Col>
            </Row>
            <Row>
              <Col lg={9}>
                <div className=" Addnewpeoduct margin_bottom py-4">
                  <div>
                    <h5 className="margin_bottom"> Images</h5>

                    <div className="margin_bottom">
                      <h4>Upload image</h4>
                      <div>
                        <input
                          name="images"
                          type="file"
                          className="form-control signup_form_input margin_bottom"
                          onChange={handleImgeFile}
                        />
                        {selectedImages?.length > 0 && (
                          <div>
                            <h4>Selected Images:</h4>
                            <ul className="row">
                              {selectedImages?.map((imageUrl, index) => (
                                <li
                                  key={index}
                                  className=" productupload_item col-md-3"
                                >
                                  <img
                                    className="productupload_image"
                                    src={imageUrl}
                                    alt={`Image ${index}`}
                                  />
                                  <p
                                    className="addimagecncel_icon"
                                    onClick={() => {
                                      deleteimage(index);
                                    }}
                                  >
                                    <MdCancel className="cancelicon_addproduct" />
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4>Upload thumbnail</h4>
                      <input
                        name="images"
                        type="file"
                        className="form-control signup_form_input"
                        onChange={handlethumbnalfile}
                      />
                      {thumbnail?.length > 0 && (
                        <div>
                          <h2>Selected Images:</h2>
                          <ul className="row">
                            {thumbnail?.map((imageUrl, index) => (
                              <li
                                key={index}
                                className=" productupload_item col-md-3"
                              >
                                <img
                                  className="productupload_image"
                                  src={imageUrl}
                                  alt={`Image ${index}`}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="Addnewpeoduct margin_bottom py-4">
                  <Row>
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
                          type="number"
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
                          type="number"
                          placeholder="Rating:"
                          required
                        />
                      </Col>
                      <Col lg={3}>
                        <h6>Discount</h6>
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
                  </Row>
                </div>
                <div className="Addnewpeoduct margin_bottom">
                  <div className="margin_bottom">
                    <h5 className="margin_bottom">Short Description</h5>
                    <Field
                      className="descirption_box"
                      name="description"
                      component="textarea"
                      type="text"
                      placeholder="description"
                      required
                    />
                  </div>
                </div>
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
