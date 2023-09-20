import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { addbrands } from "../../../../../Redux/action/createNewBrandsAction";
import { allSubCategoryList } from "../../../../../Redux/action/getSubcategoryAction";

const Allsubcategory = () => {
  const dispatch = useDispatch();
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState("");
  const [selectedBrand, setSelectedBrands] = useState(""); // State to store the selected category

  // const handleCategoryChange = (e) => {
  //   setSelectedBrands(e.target.value); // Update the state when the select value changes
  // };

  const getbrand = useSelector(
    (state) => state?.getsubsategorylistdata?.listdata
  );

  console.log(getbrand, "zzz");
  const onSubmit = (values) => {
    console.log(values.brand, "dddddddddddd");
    // let scategorynew = { brand: "values" };

    let asd = {
      subcategory_id: selectedSubcategoryId,
      brand: values.brand,
    };

    dispatch(addbrands(asd));
  };
  useEffect(() => {
    dispatch(allSubCategoryList());
  }, []);

  var selectedId;
  const handleCategoryChange2 = (event) => {
    selectedId = event.target.value;
    console.log(selectedId, "selectedSubcategoryId");
    setSelectedSubcategoryId(selectedId);
  };
  console.log(selectedSubcategoryId, "selectedSubcategoryId");

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{ brand: "" }}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div>
              {/* <Field
                className="addnewproduct_changes right_Addnew"
                name="subcategory"
                component="select"
                onChange={handleCategoryChange}
                required
              >
                {getbrand?.map((i) => {
                  return (
                    <>
                      <option key={i._id} value={i._id}>
                        {i.subcategory}
                      </option>
                    </>
                  );
                })}
              </Field> */}
              <select
                onChange={handleCategoryChange2}
                value={selectedSubcategoryId}
              >
                <option value="">Select a Subcategory</option>
                {getbrand?.map((i) => (
                  <option key={i._id} value={i._id}>
                    {i.subcategory}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={selectedBrand}
                readOnly
                className="addnewproduct_changes right_Addnew"
              />
              <div className="d-flex newpeo_div">
                <Field
                  className="addnewproduct_changes"
                  name="brand"
                  component="input"
                  type="text"
                  placeholder="brand"
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
