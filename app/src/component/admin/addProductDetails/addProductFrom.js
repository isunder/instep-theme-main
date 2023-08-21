import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsPlusCircleDotted } from "react-icons/bs";
import { Field, Form as FinalForm } from "react-final-form";
import Select from "react-select";

import { adminPostProduct } from "../../../Redux/action/adminPostProductAction";
import { useDispatch, useSelector } from "react-redux";

const options = [
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
];
const ProductForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  // const handelSubmit = async (values) => {
  //   dispatch(adminPostProduct(values));
  //   console.log(values, "sasasasasasasa");
  // };
  const [selectedOption, setSelectedOption] = useState(null);

  const onSubmit = async (values) => {
    dispatch(adminPostProduct(values));
    console.log(values, "sasasasasasasa");
  };
  const initialValues = {
    // productname: "",
    description: "",
    // producttags: "",
    brand: "",
    discountpercentage: "",
    stock: "",
    code: "",
    title: "",
    price: "",
    rating: "",
  };
  // const validate = () => {};

  return (
    <>
      <FinalForm
        onSubmit={onSubmit}
        // validate={validate}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Row>
              <Col className="Admin_dashboard margin_bottom" lg={12}>
                <h3> Add Product</h3>
              </Col>
            </Row>
            <Row>
              <Col lg={9}>
                <div className=" Addnewpeoduct margin_bottom">
                  <h2 className="margin_bottom"> Basic Information</h2>
                  <div className="margin_bottom">
                    <h5>Product Name</h5>
                    <Form.Control
                      name="productname"
                      type="text"
                      placeholder="Type your product name"
                      className=" mr-sm-2 search_bar"
                    />
                    Product name is required and recommended to be unique.
                  </div>
                  <div className="margin_bottom">
                    <h4>Short Description</h4>
                    <Field
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
                    <p>Thumbnail (592x592)</p>
                    <div className="brand_image margin_bottom">
                      <h3>Choose brand Thumbnail</h3>{" "}
                      <BsPlusCircleDotted className="brand_img_icon" />
                    </div>
                  </div>
                  <div>
                    <h5>Gallery</h5>
                    <div className="brand_image">
                      <h3>Choose brand Thumbnail</h3>
                      <BsPlusCircleDotted className="brand_img_icon" />
                    </div>
                  </div>
                </div>
                <div className="Addnewpeoduct margin_bottom py-4">
                  <div className="margin_bottom">
                    <h5>Product Categories</h5>
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
                    <h5>Title </h5>
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
                <div className="productbrand_unit boxshadow margin_bottom">
                  <div className="product_brand">
                    <h5>Product Brand</h5>
                    <div className="">
                      <Field
                        className="descirption_box"
                        name="brand"
                        component="input"
                        type="text"
                        placeholder="Brand Name"
                        required
                      />
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
                <Row>
                  <div className="sku_stok_price">
                    <div>
                      <h3>Price, Sku & Stock</h3>
                    </div>
                    <div className="sku_stok_price">
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
                  </div>
                  <Col lg={3}>
                    <h6>Price</h6>
                    <Field
                      className="descirption_box"
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
                      className="descirption_box"
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
                      className="descirption_box"
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
                      name="discountpercentage"
                      component="input"
                      type="text"
                      placeholder="discount percentage"
                      required
                    />
                  </Col>
                </Row>
              </Col>
              <Button type="submit">Add product</Button>
            </Row>
          </form>
        )}
      />
    </>
  );
};

export default ProductForm;
