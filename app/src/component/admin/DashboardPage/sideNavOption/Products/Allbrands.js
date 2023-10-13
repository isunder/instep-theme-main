import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { addbrands } from "../../../../../Redux/action/createNewBrandsAction";
import { allSubCategoryList } from "../../../../../Redux/action/getSubcategoryAction";
import { Col, Dropdown, Row, Table } from "react-bootstrap";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { allBrandsList } from "../../../../../Redux/action/getAllBrandListAction";
import { allCategoryList } from "../../../../../Redux/action/getCategoryAction";
import { typesubcategoryget } from "../../../../../Redux/action/typesubcatpost";

const Allsubcategory = () => {
  const dispatch = useDispatch();
  const [selected, setselectedcat] = useState();
  const [selecttypesubid, setselecttypesubid] = useState();
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState("");
  const [selectedBrand, setSelectedBrands] = useState("");
  const getscat = useSelector(
    (state) => state?.getcategorylistdata?.listdata?.data
  );
  const typesubcatgory = useSelector(
    (state) => state?.typesubcategory?.typesublist?.data?.data
  );
  console.log(getscat, "getscat");
  const getbrand = useSelector(
    (state) => state?.getsubsategorylistdata?.listdata?.data
  );

  const getbrandlist = useSelector(
    (state) => state?.getbrandslistdata?.listdata?.data
  );
  console.log(getbrandlist, "1111");

  console.log(getbrand, "zzz");
  const onSubmit = (values) => {
    console.log(values.brand, "dddddddddddd");
    // let scategorynew = { brand: "values" };

    let asd = {
      category_id: selected,
      subcategory_id: selectedSubcategoryId,
      typesubcategory_id: selecttypesubid,
      brand: values.brand,
    };

    dispatch(addbrands(asd));
  };
  useEffect(() => {
    dispatch(allCategoryList());
    dispatch(typesubcategoryget());

    dispatch(allSubCategoryList());
    dispatch(allBrandsList());
  }, []);

  var selectedId;
  const handleCategoryChange2 = (event) => {
    selectedId = event.target.value;
    console.log(selectedId, "selectedSubcategoryId");
    setSelectedSubcategoryId(selectedId);
  };
  console.log(selectedSubcategoryId, "selectedSubcategoryId");

  var selectcatid;
  const handleCategoryChange = (event) => {
    selectcatid = event.target.value;
    setselectedcat(selectcatid);
  };
  var typesubid;
  const handletypesubCategoryChange = (event) => {
    typesubid = event.target.value;
    setselecttypesubid(typesubid);
  };

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
                    onChange={handleCategoryChange}
                  >
                    <option value="">Select a category</option>
                    {getscat?.map((i) => (
                      <option name="option" key={i._id} value={i._id}>
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
                    {getbrand?.map((i) => (
                      <option key={i._id} value={i._id}>
                        {i.subcategory}
                      </option>
                    ))}
                  </select>
                  <select
                    className="subcategory_drop margin_bottom"
                    onChange={handletypesubCategoryChange}
                    // value={selectedCategoryId}
                  >
                    <option value="">Select a category</option>
                    {typesubcatgory?.map((i) => (
                      <option name="option" key={i._id} value={i._id}>
                        {i.typesubcategory}
                      </option>
                    ))}
                  </select>

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
