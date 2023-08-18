import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
// import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { BsPlusCircleDotted } from "react-icons/bs";
import Select from "react-select";

const options = [
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
];
const ProductForm = () => {
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

          <Row>
            <Col lg={12}>
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
                <div className="product_brand margin_bottom">
                  <h5>Product Brand</h5>
                  <div className="">
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                </div>
                <div className="product_brand margin_bottom">
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
              <div className=" Addnewpeoduct margin_bottom">
                <Row>
                  <div className="sku_stok_price">
                    <div className="margin_bottom">
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
              </div>
              <div className=" Addnewpeoduct margin_bottom">
                <Row>
                  <div className="sku_stok_price">
                    <div className="margin_bottom">
                      <h3> Product Discount</h3>
                    </div>
                  </div>
                  <Col lg={6}>
                    <h6>Date Range</h6>
                    <input
                      className="Pricesku_stock"
                      type="calendar"
                      id="fname"
                      name="fname"
                      placeholder="Start date - End date"
                    />
                  </Col>
                  <Col lg={3}>
                    <h6>Discount Amount</h6>
                    <input
                      className="Pricesku_stock"
                      type="number"
                      id="fname"
                      name="fname"
                      placeholder="0"
                    />
                  </Col>
                  <Col lg={3}>
                    <h6>Percent or Fixed</h6>
                    <input
                      className="Pricesku_stock"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Percent %"
                    />
                  </Col>
                </Row>
              </div>
              <div className=" Addnewpeoduct margin_bottom">
                <Row className="margin_bottom">
                  <div className="sku_stok_price">
                    <div className="margin_bottom">
                      <h3> Product Taxes (Default 0%)</h3>
                    </div>
                  </div>
                  <Col lg={6}>
                    <h6> CGST</h6>
                    <input
                      className="Pricesku_stock"
                      type="number"
                      id="fname"
                      name="fname"
                      placeholder="Tax"
                    />
                  </Col>
                  <Col lg={6}>
                    <h6>Percent or Fixed</h6>
                    <input
                      className="Pricesku_stock"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Percent %"
                    />
                  </Col>
                </Row>
                <Row className="margin_bottom">
                  <Col lg={6}>
                    <h6> IGST</h6>
                    <input
                      className="Pricesku_stock"
                      type="number"
                      id="fname"
                      name="fname"
                      placeholder="Tax"
                    />
                  </Col>
                  <Col lg={6}>
                    <h6>Percent or Fixed</h6>
                    <input
                      className="Pricesku_stock"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Percent %"
                    />
                  </Col>
                </Row>
              </div>
              <div className="productbrand_unit boxshadow margin_bottom">
                <div className="product_brand margin_bottom">
                  <h5>Sell Target </h5>
                  <div className="">
                    <input
                      className="Pricesku_stock"
                      type="number"
                      id="fname"
                      name="fname"
                      placeholder="Type your sell target"
                    />
                  </div>
                </div>
                <div className="product_brand margin_bottom">
                  <h5> Product Status</h5>
                  <div className="">
                    <input
                      className="Pricesku_stock"
                      type="number"
                      id="fname"
                      name="fname"
                      placeholder="Published"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className=" Addnewpeoduct margin_bottom">
                <h2 className="margin_bottom"> SEO Meta Configuration </h2>
                <div className="margin_bottom">
                  <h5>Meta Title</h5>
                  <Form.Control
                    type="text"
                    placeholder="Type Meta Title"
                    className=" mr-sm-2 search_bar"
                  />
                </div>
                <div className="margin_bottom">
                  <h4>Meta Description</h4>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Type your meta descritption"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </div>
                <div>
                  <h5>Meta Image</h5>
                  <div className="brand_image">
                    <h3>Choose brand Thumbnail</h3>
                    <BsPlusCircleDotted className="brand_img_icon" />
                  </div>
                </div>
              </div>
              <Button className="Brandsave_button" variant="success">
                Save Product
              </Button>{" "}
            </Col>
          </Row>
        </Col>
        <Col lg={3}>
          <div className=" Addnewpeoduct margin_bottom ">
            <h2> Product Information</h2>
            <div className="right_variation">
              <div className="mb-2 text-muted"></div>
              <div className="var_edit">
                <div className="variation_text">
                  <h5> Basic Information</h5>
                </div>
                <div className="variation_text">
                  <h5> Product Images</h5>
                </div>
                <div  className="variation_text">
                  <h5> Category</h5>
                </div>
                <div  className="variation_text">
                  <h5>Product tags</h5>
                </div>
                <div  className="variation_text">
                  <h5> Product Brand & Unit</h5>
                </div>
                <div  className="variation_text">
                  <h5> Price, Sku & Stock</h5>
                </div>
                <div  className="variation_text">
                  <h5>Product Discount </h5>
                </div>
                <div  className="variation_text">
                  <h5> Product Taxes </h5>
                </div>
                <div  className="variation_text">
                  <h5> Sell Target and Status</h5>
                </div>
                <div  className="variation_text">
                  <h5> SEO Meta Configuration</h5>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProductForm;
