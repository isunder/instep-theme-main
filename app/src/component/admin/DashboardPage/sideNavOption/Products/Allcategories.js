import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { addcategory } from "../../../../../Redux/action/createNewCategoryAction";

const Allcategories = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    console.log(values, "gpoalpk");

    dispatch(addcategory(values));
    // console.log(values, "ggggggggggggggg");
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        // initialValues={sxsszs}
        // validate={validate}
        render={({ handleSubmit, form, submitting, pristine, valuess }) => (
          <form onSubmit={handleSubmit}>
            <div>
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
                </Field>
              </div>
              <div className="buttons">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        )}
      />
    </>
  );
};

export default Allcategories;
