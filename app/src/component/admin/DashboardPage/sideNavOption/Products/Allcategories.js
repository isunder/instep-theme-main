import React, { useEffect } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { addcategory } from "../../../../../Redux/action/createNewCategoryAction";
import { Col, Dropdown, Row, Table } from "react-bootstrap";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { allCategoryList } from "../../../../../Redux/action/getCategoryAction";

const Allcategories = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state?.getcategorylistdata?.listdata);
  console.log(data, "adat");

  const onSubmit = (values) => {
    console.log(values, "gpoalpk");

    dispatch(addcategory(values));
    // console.log(values, "ggggggggggggggg");
  };
  useEffect(() => {
    dispatch(allCategoryList());
  }, []);

  return (
    <>
      <Row>
        <div className="admin_toppadding ">
          <Col className="Admin_dashboard " lg={12}>
            <h3> Categories</h3>
          </Col>
        </div>
      </Row>
      <Row>
        <Col lg={8}>
          <div className="categoryadd_new margin_bottom">
            <div className="category_item">
              <div className="leftcategory_add">
                <Form
                  onSubmit={onSubmit}
                  // initialValues={sxsszs}
                  // validate={validate}
                  render={({
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    valuess,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <Field
                        className="ctegorysearc_h"
                        name="category"
                        component="input"
                        type="text"
                        placeholder="category"
                        required
                      />
                      <div className="buttons">
                        <button className="catesearchbutton" type="submit">
                          Submit
                        </button>
                      </div>
                    </form>
                  )}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <div className="categoryadd_new">
            <Table responsive="md">
              <thead>
                <tr>
                  <th>S/L</th>
                  <th> Category Name</th>
                  <th className="d-flex justify-content-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((e, i) => {
                    return (
                      <tr>
                        <td></td>
                        <td>{e.category}</td>
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
                              {/* <Dropdown.Item href="#/action-1">
                        {" "}
                        <LuEdit3 /> Edit
                      </Dropdown.Item> */}
                              <Dropdown.Item href="#/action-2">
                                Delete
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    );
                  })}
                {/* <tr>
                  <td>1</td>
                  <td>Mark</td>
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
                         <Dropdown.Item href="#/action-1">
                        {" "}
                        <LuEdit3 /> Edit
                      </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr> */}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Allcategories;
