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
import Allpagination from "../../../Pagination/pagination";

const Allsubcategory = () => {
  const dispatch = useDispatch();
  const [selected, setselectedcat] = useState();
  const [selecttypesubid, setselecttypesubid] = useState();
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const getcategorylist = useSelector(
    (state) => state?.getcategorylistdata?.listdata
  );
  console.log(getcategorylist, "sherowali");

  const getsubcat = useSelector(
    (state) => state?.getsubsategorylistdata?.listdata
  // const [selectedBrand, setSelectedBrands] = useState("");

  const listCount = useSelector(
    (state) => state?.getbrandslistdata?.listdata?.totalDocs
  );
  const getscat = useSelector(
    (state) => state?.getcategorylistdata?.listdata?.data
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const typesubcatgory = useSelector(
    (state) => state?.typesubcategory?.typesublist?.data?.data
  );
  console.log(getscat, "getscat");
  const getbrand = useSelector(
    (state) => state?.getsubsategorylistdata?.listdata?.data
  );
  console.log(getsubcat, "zzz");

  const getbrandlist = useSelector(
    (state) => state?.getbrandslistdata?.listdata?.data
  );
  console.log(getbrandlist, "1111");

  const onSubmit = (values) => {
    console.log(values.brand, "dddddddddddd");

    let asd = {
      category_id: selectedCategoryId,
      subcategory_id: selectedSubcategoryId,
      typesubcategory_id: selecttypesubid,
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
                  getbrandlist?.map((e, index) => {
                    console.log(e, "brnds");
                    return (
                      <>
                        <tr>
                          <td>
                            {(currentPage - 1) * postPerPage + (index + 1)}
                          </td>
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
            <div className="d-flex justify-content-end">
              <Allpagination
                currentPage={currentPage}
                postPerPage={postPerPage}
                setPostPerPage={setPostPerPage}
                setCurrentPage={setCurrentPage}
                listCount={listCount}
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Allsubcategory;
