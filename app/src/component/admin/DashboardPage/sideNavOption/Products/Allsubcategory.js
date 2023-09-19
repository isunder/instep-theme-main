import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { addsubcategory } from "../../../../../Redux/action/createNewSubcategoryAction";

const Allsubcategory = () => {
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    let categoryASDAS = { category: "values" };

    dispatch(addsubcategory(categoryASDAS));
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{ category: "" }}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <div className="d-flex newpeo_div">
                <Field
                  className="addnewproduct_changes"
                  name="subcategory"
                  component="input"
                  type="text"
                  placeholder="category"
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

export default Allsubcategory;
