import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addsubcategory,
  removeFromSubcategory,
} from "../../../../../Redux/action/createNewSubcategoryAction";
import { Col, Row, Table } from "react-bootstrap";
import { allSubCategoryList } from "../../../../../Redux/action/getSubcategoryAction";

import Allpagination from "../../../Pagination/pagination";
import { MdDelete } from "react-icons/md";
import Delete from "../../../deleteModel/delete";
import { allCategoryList } from "../../../../../Redux/action/getCategoryAction";

const Allsubcategory = () => {
  const dispatch = useDispatch();
  // const [selectedsubCategoryId, setselectedsubCategoryId] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false); // State to store the selected category

  const listCount = useSelector(
    (state) => state?.getsubsategorylistdata?.listdata?.totalDocs
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const getscat = useSelector(
    (state) => state?.getcategorylistdata?.listdata.data
  );
  console.log(getscat, "getscat");

  const getsubcat = useSelector(
    (state) => state?.getsubsategorylistdata?.listdata?.data
  );

  const isLoading = useSelector(
    (state) => state?.getsubsategorylistdata?.isLoading
  );

  // const getsubcate = useSelector(
  //   (state) => state?.getsubsategorylistdata?.listdata?.data
  // );

  const typesubcatgory = useSelector(
    (state) => state?.typesubcategory?.typesublist?.data?.data
  );
  console.log(typesubcatgory, "typesubcatgory");

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

  useEffect(() => {
    setLoading(true);
    dispatch(
      allSubCategoryList({ page: currentPage, perPage: postPerPage })
    ).then((res) => {
      // console.log(res,)
      setLoading(false);
    });
  }, [currentPage]);

  console.log(selectedCategoryId, "selectedCategoryId");
  const handleCategoryChange = (event) => {
    const selectedId = event.target.value;
    setSelectedCategoryId(selectedId);

    const selectedLabel =
      getscat.find((i) => i?._id === selectedId)?.category || "";
    setSelectedCategory(selectedLabel);
  };

  const handleClose = () => setShow(false);

  const handleDelete = (id) => {
    dispatch(removeFromSubcategory({ subcategoryid: id })).then((res) => {
      if (res?.payload?.success) {
        dispatch(
          allSubCategoryList({ page: currentPage, perPage: postPerPage })
        );
      }
      handleClose();
    });
  };
  const [show, setShow] = useState(false);
  const [categoryid, setCategoryid] = useState(null);
  const handleShow = (id) => {
    setCategoryid(id);
    setShow(true);
  };
  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="admin_toppadding ">
            <Col className="Admin_dashboard " lg={12}>
              <h3> Add New Subcategory</h3>
            </Col>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Form
            onSubmit={onSubmit}
            initialValues={{ subcategory: "" }}
            render={({ handleSubmit, form, submitting, pristine }) => (
              <form onSubmit={handleSubmit}>
                <div className="cat_select">
                  <div>
                    <select
                      className="subcategory_drop margin_bottom"
                      onChange={handleCategoryChange}
                      value={selectedCategoryId}
                    >
                      <option value="">Select a category</option>
                      {getscat &&
                        getscat?.map((i) => (
                          <option name="option" key={i?._id} value={i?._id}>
                            {i?.category}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="mb-2">
                  <Field
                    className="subcategory_drop"
                    name="subcategory"
                    component="input"
                    type="text"
                    placeholder="subcategory"
                    required
                  />
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
                  <th> Subcategory Name</th>
                  <th className="d-flex justify-content-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  getsubcat &&
                  getsubcat?.map((e, index) => {
                    return (
                      <>
                        <tr>
                          <td>
                            {(currentPage - 1) * postPerPage + (index + 1)}
                          </td>
                          <td>{e.subcategory}</td>
                          <td>
                            <div className="d-flex justify-content-end">
                              <MdDelete
                                className="deleteicn_forpro"
                                onClick={() => {
                                  handleShow(e?._id);
                                }}
                              />
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })
                )}
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
      {show && (
        <Delete
          handleDelete={handleDelete}
          handleClose={handleClose}
          show={show}
          categoryId={categoryid}
        />
      )}
      {/* typesubcateory */}

      {/* <Row>
        <Col lg={12}>
          <div className="admin_toppadding ">
            <Col className="Admin_dashboard " lg={12}>
              <h3> Add New TypeSubcategory</h3>
            </Col>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Form
            onSubmit={onSubmittype}
            initialValues={{}}
            render={({ handleSubmit, form, submitting, pristine }) => (
              <form onSubmit={handleSubmit}>
                <div className="cat_select">
                  <div>
                    <select
                      className="subcategory_drop margin_bottom"
                      onChange={handleCategoryChange}
                      value={selectedCategoryId}
                    >
                      <option value="">Select a category</option>
                      {getscat?.map((i) => (
                        <option name="option" key={i._id} value={i._id}>
                          {i.category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="cat_select">
                  <div>
                    <select
                      className="subcategory_drop margin_bottom"
                      onChange={handleCategoryChange2}
                      value={selectedsubCategoryId}
                    >
                      <option value="">Select a subcategory</option>
                      {getsubcate?.map((i) => (
                        <option name="option" key={i._id} value={i._id}>
                          {i.subcategory}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-2">
                  <Field
                    className="subcategory_drop"
                    name="typesubcategory"
                    component="input"
                    type="text"
                    placeholder="typesubcategory"
                    required
                  />
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
                  <th> Subcategory Name</th>
                  <th className="d-flex justify-content-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {typesubcatgory && typesubcatgory.length > 0 && (
                  <>
                    {typesubcatgory.map((e, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{e.typesubcategory}</td>
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
                    ))}
                  </>
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row> */}
    </>
  );
};

export default Allsubcategory;
