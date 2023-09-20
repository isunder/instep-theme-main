import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { addsubcategory } from "../../../../../Redux/action/createNewSubcategoryAction";
import { allCategoryList } from "../../../../../Redux/action/getCategoryAction";
import { Col, Dropdown, Row, Table } from "react-bootstrap";
import { BiDotsVerticalRounded } from "react-icons/bi";

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
                  {/* <div className="inputslect_cat">
                    <input
                      name="option"
                      type="text"
                      value={selectedCategory}
                      readOnly
                      className="input_Tab"
                    />
                  </div> */}
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
                <div className="margin_bottom">
                  <Field
                    className="subcategory_drop"
                    name="subcategory"
                    component="input"
                    type="text"
                    placeholder="subcategory"
                    required
                  />
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
                <tr>
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
                        {/* <Dropdown.Item href="#/action-1">
                        {" "}
                        <LuEdit3 /> Edit
                      </Dropdown.Item> */}
                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="addcatsubit_button">
              Submit
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Allsubcategory;
