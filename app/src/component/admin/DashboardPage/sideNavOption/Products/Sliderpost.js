import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { adminPostslider } from "../../../../../Redux/action/postSliderAction";

const Sliderpost = () => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState([]);
  const [imageData, setImageData] = useState();

  const sliderpost = useSelector((state) => state?.postsliderData?.listdata);
  console.log(sliderpost, "slider");

  // const onSubmit = (values) => {
  //   var formData = new FormData();
  //   const sliderData = {
  //     sildername: values.name,
  //     sliderimg: selectedImage,
  //   };
  //   selectedImage.map((items) => {
  //     formData.append("sliderimg", items);
  //   });

  //   formData.append("sliderimg", selectedImage);

  //   formData.append("slidername", JSON.stringify(sliderData));
  //   dispatch(adminPostslider(formData));
  //   console.log(values, "values");
  // };
  console.log(selectedImage, "dddddddd");
  const onSubmit = (values) => {
    const formData = new FormData();
    const payload = {
      name: values?.name,
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
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <label>Image:</label>
              <input
                name="image"
                type="file"
                accept="image/*"
                // value={a}
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
              {selectedImage && <p>Selected Image: {selectedImage.name}</p>}
            </div>
            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </form>
        )}
      />
    </>
  );
};

export default Sliderpost;
