import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { addbrands } from "../../../../../Redux/action/createNewBrandsAction";
import { allSubCategoryList } from "../../../../../Redux/action/getSubcategoryAction";
import { Col, Dropdown, Row, Table } from "react-bootstrap";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { allBrandsList } from "../../../../../Redux/action/getAllBrandListAction";
import { allCategoryList } from "../../../../../Redux/action/getCategoryAction";

const Allsubcategory = () => {
  const dispatch = useDispatch();
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const getcategorylist = useSelector(
    (state) => state?.getcategorylistdata?.listdata
  );
  console.log(getcategorylist, "sherowali");

  const getsubcat = useSelector(
    (state) => state?.getsubsategorylistdata?.listdata
  );
  console.log(getsubcat, "zzz");

  const getbrandlist = useSelector(
    (state) => state?.getbrandslistdata?.listdata
  );
  console.log(getbrandlist, "1111");

  const onSubmit = (values) => {
    console.log(values.brand, "dddddddddddd");
    // let scategorynew = { brand: "values" };

    let asd = {
      category_id: selectedCategoryId,
      subcategory_id: selectedSubcategoryId,
      brand: values.brand,
    };

    dispatch(addbrands(asd));
  };
  useEffect(() => {
    dispatch(allCategoryList());
    dispatch(allSubCategoryList());
    dispatch(allBrandsList());
  }, []);
  var selectedId;
  const handleCategoryChangeCat = (e) => {
    selectedId = e.target.value;
    console.log(selectedId, "selectedcategoryId");
    setSelectedCategoryId(selectedId);
  };

  var selectedId;
  const handleCategoryChange2 = (event) => {
    selectedId = event.target.value;
    console.log(selectedId, "selectedSubcategoryId");
    setSelectedSubcategoryId(selectedId);
  };
  console.log(selectedSubcategoryId, "selectedSubcategoryId");

  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="admin_toppadding ">
            <Col className="Admin_dashboard " lg={12}>
              <h3> Add New Brands</h3>
            </Col>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Form
            onSubmit={onSubmit}
            initialValues={{ brand: "" }}
            render={({ handleSubmit, form, submitting, pristine }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <select
                    className="subcategory_drop margin_bottom"
                    onChange={handleCategoryChangeCat}
                    value={selectedCategoryId}
                  >
                    <option value="">Select Category</option>
                    {getcategorylist &&
                      getcategorylist?.map((i) => (
                        <option key={i._id} value={i._id}>
                          {i.category}
                        </option>
                      ))}
                  </select>
                  <select
                    className="subcategory_drop margin_bottom"
                    onChange={handleCategoryChange2}
                    value={selectedSubcategoryId}
                  >
                    <option value="">Select a Subcategory</option>
                    {getsubcat?.map((i) => (
                      <option key={i._id} value={i._id}>
                        {i.subcategory}
                      </option>
                    ))}
                  </select>
                  {/* <input
                    type="text"
                    value={selectedBrand}
                    readOnly
                    className="addnewproduct_changes right_Addnew"
                  /> */}
                  <div className="mb-2">
                    <Field
                      className="subcategory_drop"
                      name="brand"
                      component="input"
                      type="text"
                      placeholder="brand"
                      required
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-end margin_bottom">
                  <button type="submit" className="addcatsubit_button">
                    Submit
                  </button>
                </div>
              </form>
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <div className="categoryadd_new margin_bottom">
            <Table responsive="md">
              <thead>
                <tr>
                  <th>S/L</th>
                  <th> Brand Name</th>
                  <th className="d-flex justify-content-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {getbrandlist &&
                  getbrandlist?.map((e, i) => {
                    console.log(e, "brnds");
                    return (
                      <>
                        <tr>
                          <td>{i + 1}</td>
                          <td>{e.brand}</td>
                          <td className="d-flex justify-content-end">
                            <Dropdown>
                              <Dropdown.Toggle
                                variant=""
                                id="dropdown-basic"
                                className="focusotoggle"
                              >
                                <BiDotsVerticalRounded className="threedot_tog_gle" />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-2">
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Allsubcategory;
