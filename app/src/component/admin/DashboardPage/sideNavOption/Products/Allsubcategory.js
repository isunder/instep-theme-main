import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { addsubcategory } from "../../../../../Redux/action/createNewSubcategoryAction";
import { allCategoryList } from "../../../../../Redux/action/getCategoryAction";

const Allsubcategory = () => {
  const dispatch = useDispatch();
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // State to store the selected category

  
  const getscat = useSelector((state) => state?.getcategorylistdata?.listdata);

  const onSubmit = (values) => {
    console.log(values.subcategory, "dddddddddddd");

    let asd = {
      subcategoryData: [
        {
          category_id: selectedCategoryId,
          subcategory: values.subcategory,
        },
      ],
    };

    dispatch(addsubcategory(asd));
  };
  useEffect(() => {
    dispatch(allCategoryList());
  }, []);

 

  console.log(selectedCategoryId, "selectedCategoryId");
  const handleCategoryChange = (event) => {
    const selectedId = event.target.value;
    setSelectedCategoryId(selectedId);

    const selectedLabel =
      getscat.find((i) => i._id === selectedId)?.category || "";
    setSelectedCategory(selectedLabel);
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{ subcategory: "" }}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div>
              {/* <Field
                className="addnewproduct_changes right_Addnew"
                name="category"
                component="select"
                onChange={handleCategoryChange}
                required
              >
                {getscat?.map((i) => {
                  return (
                    <>
                      <option key={i._id} value={i._id}>
                        {i.category}
                      </option>
                    </>
                  );
                })}
              </Field> */}
              <div>
                <select
                  onChange={handleCategoryChange}
                  value={selectedCategoryId}
                >
                  <option value="">Select a category</option>
                  {getscat?.map((i) => (
                    <option key={i._id} value={i._id}>
                      {i.category}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={selectedCategory}
                  readOnly
                  className="addnewproduct_changes right_Addnew"
                />
              </div>
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
