// StaticExample.js
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { allAdminProductList } from "../../../Redux/action/getAllProductListing";
import { updateProduct } from "../../../Redux/action/updateProductAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Row } from "react-bootstrap";
import { BsPlusCircleDotted } from "react-icons/bs";

function MydModalWithGrid(props) {
  const dispatch = useDispatch();
  const single = useSelector((state) => state.updateProductData.listdata);

  console.log(single._id, "vaikskw");
  console.log(single, "rrr");

  const handleSubmit = (values) => {
    console.log(values, "goapl");

    toast.success("Update Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    dispatch(updateProduct(values)).then((res) => {
      console.log(res?.meta?.requestStatus);
      if (res?.meta?.requestStatus === "fulfilled") {
        dispatch(allAdminProductList());
      }
    });
  };
  const initialValues = {
    _id: single._id,
    description: single.description,
    category: single.category,
    title: single.title,
    price: single.price,
    images: single.images,
    brand: single.brand,
    rating: single.rating,
    subcategory: single.subcategory,
    thumbnail: single.thumbnail,
    stock: single.stock,
    discountpercentage: single.discountPercentage,
  };
  console.log(initialValues, "initialValues");

  return (
    <>
      <Modal
        className="modal-size"
        show={props.show}
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Row>
            <Col className="" lg={12}>
              <h3> Update Product</h3>
            </Col>
          </Row>
        </Modal.Header>

        <Form onSubmit={handleSubmit} initialValues={initialValues}>
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <Row>
                <Col lg={6} md={6} sm={4}>
                  <div className="left_update_product">
                    {/* <div className="update_product">
                      <label htmlFor="category">
                        <h5>Category</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="category"
                        component="select"
                        required
                      >
                        <option>Electronics</option>
                        <option>Men</option>
                        <option>Home & kitchen</option>
                        <option>Appliances</option>
                        <option>Sports & More</option>
                        <option>Women</option>
                      </Field>
                    </div> */}

                    <div className="update_product">
                      <label htmlFor="subcategory">
                        <h5>subcategory:</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="subcategory"
                        component="input"
                        type="text"
                        placeholder="subcategory"
                        required
                      />
                    </div>
                    <div className="update_product">
                      <label htmlFor="brand">
                        <h5>Brand Name:</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="brand"
                        component="input"
                        type="text"
                        placeholder="Brand Name"
                        required
                      />
                    </div>
                    <div className="update_product">
                      <label htmlFor="price">
                        <h5>Price</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="price"
                        component="input"
                        type="number"
                        step="0.01"
                        placeholder="$"
                        required
                      />
                    </div>
                    <div className="update_product">
                      <label htmlFor="rating">
                        <h5>Rating:</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="rating"
                        component="input"
                        type="text"
                        placeholder="Rating:"
                        required
                      />
                    </div>
                    <div className="update_product">
                      <label htmlFor="stock">
                        <h5>Avalaible Stocks:</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="stock"
                        component="input"
                        type="text"
                        placeholder="avalaible stocks"
                        required
                      />
                    </div>
                    <div className="update_product">
                      <label htmlFor="discountpercentage">
                        <h5>Discount Percentage:</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="discountpercentage"
                        component="input"
                        type="text"
                        placeholder="discount percentage"
                        required
                      />
                    </div>
                    <div className="update_product">
                      <label htmlFor="description">
                        <h5>description</h5>
                      </label>
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
                </Col>
                <Col lg={6} md={6} sm={4}>
                  <div className="mainupdate_pro">
                    <div className="update_product">
                      <label htmlFor="images">
                        <h5>Image</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="images"
                        component="input"
                        type="text"
                        placeholder="Image"
                        required
                      />
                      <div>
                        <h6>Gallery</h6>
                        <div className="brand_image update_brandimage">
                          <h6>Choose brand Thumbnail</h6>
                          <BsPlusCircleDotted className="brand_img_icon" />
                        </div>
                      </div>
                    </div>
                    <div className="update_product">
                      <label htmlFor="thumbnail">
                        <h5>Thumbnail:</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="thumbnail"
                        component="input"
                        type="text"
                        placeholder="Thumbnail"
                        required
                      />
                      <h6>Thumbnail (592x592)</h6>
                      <div className="brand_image update_brandimage margin_bottom">
                        <h6>Choose brand Thumbnail</h6>
                        <BsPlusCircleDotted className="brand_img_icon" />
                      </div>
                    </div>
                    <div className="updatebutton_div">
                      <button className="update_product_button" type="submit">
                        Update Product
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </Col>
              </Row>
            </form>
          )}
        </Form>
        <Modal.Body className="grid-example">{props.content}</Modal.Body>
      </Modal>
    </>
  );
}

export default MydModalWithGrid;
