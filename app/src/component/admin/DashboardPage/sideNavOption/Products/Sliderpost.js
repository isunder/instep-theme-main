import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { adminPostslider } from "../../../../../Redux/action/postSliderAction";
import { Col, Row } from "react-bootstrap";

const Sliderpost = () => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState([]);
  const [imageData, setImageData] = useState();

  const sliderpost = useSelector((state) => state?.postsliderData?.listdata);
  console.log(sliderpost, "slider");

  console.log(selectedImage, "dddddddd");
  const onSubmit = (values) => {
    const formData = new FormData();
    const payload = {
      name: values?.name,
      url: values?.url,
    };
    formData.append("sliderimg", selectedImage);

    formData.append("sildername", JSON.stringify(payload));

    // Dispatch the action with the FormData object
    dispatch(adminPostslider(formData)).then((res) =>
      console.log(res, "Response from dispatch")
    );
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!selectedImage) {
      errors.image = "Image is required";
    }
    return errors;
  };

  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="admin_toppadding ">
            <Col className="Admin_dashboard " lg={12}>
              <h3> Add Slider</h3>
            </Col>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="margin_bottom">
                  <Field
                    className="subcategory_drop"
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"
                    maxLength={10}
                  />
                </div>
                <div className="margin_bottom">
                  <Field
                    className="subcategory_drop"
                    name="url"
                    component="input"
                    type="text"
                    placeholder="URL"
                  />
                </div>
                <div>
                  <input
                    className="form-control signup_form_input margin_bottom"
                    name="image"
                    type="file"
                    accept="image/*"
                    // value={a}
                    onChange={(e) => setSelectedImage(e.target.files[0])}
                  />
                  {selectedImage && <p>Selected Image: {selectedImage.name}</p>}
                  <div className="d-flex justify-content-end margin_bottom">
                    <button
                      className="addcatsubit_button"
                      type="submit"
                    // disabled={submitting}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default Sliderpost;
