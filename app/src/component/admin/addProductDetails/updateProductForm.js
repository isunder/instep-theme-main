// StaticExample.js
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { allAdminProductList } from "../../../Redux/action/getAllProductListing";
import { updateProduct } from "../../../Redux/action/updateProductAction";


function MydModalWithGrid(props) {
  const dispatch = useDispatch();
  const single = useSelector((state) => state.updateProductData.listdata);

  console.log(single._id, "vaikskw");
  console.log(single, "rrr");

  const handleSubmit = (values) => {
    console.log(values, "goapl");
    // dispatch(updateProduct(values));

    dispatch(updateProduct(values)).then((res) => {
      console.log(res?.meta?.requestStatus);
      if (res?.meta?.requestStatus === "fulfilled") {
        // alert("ok");
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
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <div>
        <Modal.Header closeButton></Modal.Header>
        <Form onSubmit={handleSubmit} initialValues={initialValues}>
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="category">Category</label>
                <Field name="category" component="select" required>
                  <option>Electronics</option>
                  <option>Men</option>
                  <option>Home & kitchen</option>
                  <option>Appliances</option>
                  <option>Sports & More</option>
                  <option>Women</option>
                </Field>
              </div>

              <div>
                <label htmlFor="description">description</label>
                <Field
                  name="description"
                  component="input"
                  type="text"
                  placeholder="description"
                  required
                />
              </div>

              <div>
                <label htmlFor="title">Image</label>
                <Field
                  name="title"
                  component="input"
                  type="text"
                  placeholder="title"
                  required
                />
              </div>

              <div>
                <label htmlFor="price">Price</label>
                <Field
                  name="price"
                  component="input"
                  type="number"
                  step="0.01"
                  placeholder="$"
                  required
                />
              </div>
              <div>
                <label htmlFor="images">Image</label>
                <Field
                  name="images"
                  component="input"
                  type="text"
                  placeholder="Image"
                  required
                />
              </div>
              <div>
                <label htmlFor="brand">Brand Name:</label>
                <Field
                  name="brand"
                  component="input"
                  type="text"
                  placeholder="Brand Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="rating">Rating:</label>
                <Field
                  name="rating"
                  component="input"
                  type="text"
                  placeholder="Rating:"
                  required
                />
              </div>
              <div>
                <label htmlFor="subcategory">subcategory:</label>
                <Field
                  name="subcategory"
                  component="input"
                  type="text"
                  placeholder="subcategory"
                  required
                />
              </div>
              <div>
                <label htmlFor="thumbnail">Thumbnail:</label>
                <Field
                  name="thumbnail"
                  component="input"
                  type="text"
                  placeholder="Thumbnail"
                  required
                />
              </div>
              <div>
                <label htmlFor="stock">Avalaible Stocks:</label>
                <Field
                  name="stock"
                  component="input"
                  type="text"
                  placeholder="avalaible stocks"
                  required
                />
              </div>
              <div>
                <label htmlFor="discountpercentage">Discount Percentage:</label>
                <Field
                  name="discountpercentage"
                  component="input"
                  type="text"
                  placeholder="discount percentage"
                  required
                />
              </div>

              <button type="submit">Update Product</button>
            </form>
          )}
        </Form>
      </div>

      <Modal.Body className="grid-example">{props.content}</Modal.Body>
    </Modal>
  );
}

export default MydModalWithGrid;
