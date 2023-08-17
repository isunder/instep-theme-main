import React, { useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { BsPlusCircleDotted } from "react-icons/bs";
import Select from "react-select";

import { Field } from "react-final-form";

const options = [
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
];
const ProductForm = () => {
  const onSubmit = () => {
    console.log("gopla");
  };

  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
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
                type="text"
                placeholder="Type your product name"
                className=" mr-sm-2 search_bar"
              />
              Product name is required and recommended to be unique.
            </div>
            <div className="margin_bottom">
              <h4>Short Description</h4>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Type your product short descritption"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
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
                <h3>Choose brand Thumbnail</h3>
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
              <Form.Control
                type="text"
                placeholder="Select Categories"
                className=" mr-sm-2 search_bar"
              />
            </div>
          </div>
          <div className="Addnewpeoduct margin_bottom py-4">
            <div className="margin_bottom">
              <h5>Product Tags</h5>
              <Form.Control
                type="text"
                placeholder="Select Tags"
                className=" mr-sm-2 search_bar"
              />
            </div>
          </div>
          <div className="productbrand_unit boxshadow margin_bottom">
            <div className="product_brand">
              <h5>Product Brand</h5>
              <div className="">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
              </div>
            </div>
            <div className="product_brand ">
              <h5>Product Unit</h5>
              <div className="">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
              </div>
            </div>
          </div>
          <Row>
            <div className="sku_stok_price">
              <div>
                <h3>Price, Sku & Stock</h3>
              </div>
              <div className="sku_stok_price">
                <Form>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                  />
                </Form>
                <span>Has Variations?</span>
              </div>
            </div>
            <Col lg={3}>
              <h6>Price</h6>
              <input
                className="Pricesku_stock"
                type="number"
                id="fname"
                name="fname"
                placeholder="Product price"
              />
            </Col>
            <Col lg={3}>
              <h6>Stock</h6>
              <input
                className="Pricesku_stock"
                type="number"
                id="fname"
                name="fname"
                placeholder="Stock qty"
              />
            </Col>
            <Col lg={3}>
              <h6>SKU</h6>
              <input
                className="Pricesku_stock"
                type="text"
                id="fname"
                name="fname"
                placeholder="Product sku"
              />
            </Col>
            <Col lg={3}>
              <h6>Code</h6>
              <input
                className="Pricesku_stock"
                type="number"
                id="fname"
                name="fname"
                placeholder="Product code"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProductForm;
