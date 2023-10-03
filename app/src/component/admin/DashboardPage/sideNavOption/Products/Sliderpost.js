import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { adminPostslider } from "../../../../../Redux/action/postSliderAction";

const Sliderpost = () => {
  const dispatch = useDispatch();

  const [selectedImagesforpost, setselectedImagesforpost] = useState([]);

  const sliderpost = useSelector((state) => state?.postsliderData?.listdata);
  console.log(sliderpost, "slider");

  //   useEffect(() => {}, []);

  const onSubmit = () => {
    let slider = { sliderimg: "" };
    dispatch(adminPostslider(slider));
  };

  const validate = (values) => {
    const errors = {};
    return errors;
  };
  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
            />
            <Field
              name="description"
              component="textarea"
              placeholder="Description"
            />
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
