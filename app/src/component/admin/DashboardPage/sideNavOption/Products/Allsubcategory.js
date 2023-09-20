import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { addsubcategory } from "../../../../../Redux/action/createNewSubcategoryAction";
import { allCategoryList } from "../../../../../Redux/action/getCategoryAction";

const Allsubcategory = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(""); // State to store the selected category

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Update the state when the select value changes
  };

  const getscat = useSelector((state) => state?.getcategorylistdata?.listdata);
  console.log(getscat, "zzz");
  const onSubmit = async (values) => {
    console.log(values, "vals");
    let scategorynew = { subcategory: "values" };

    dispatch(addsubcategory(scategorynew));
  };
  useEffect(() => {
    dispatch(allCategoryList());
  }, []);

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{ subcategory: "" }}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                className="addnewproduct_changes right_Addnew"
                name="category"
                component="select"
                onChange={handleCategoryChange}
                required
              >
                {getscat?.map((i) => {
                  return (
                    <>
                      <option>{i?.category}</option>
                    </>
                  );
                })}
              </Field>
              <input
                type="text"
                value={selectedCategory}
                readOnly
                className="addnewproduct_changes right_Addnew"
              />
              <div className="d-flex newpeo_div">
                <Field
                  className="addnewproduct_changes"
                  name="subcategory"
                  component="input"
                  type="text"
                  placeholder="subcategory"
                  required
                />
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
