import React from "react";
import { Button, Col, Row } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Field, Form as FinalForm } from "react-final-form";
const ProductSpecification = () => {

    const handleSubmit = (values) => {
       
    }

    const validate = (values) => {}

    // toast.success("Successfully !", {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
  return (
    <>
      <FinalForm
       onSubmit={handleSubmit}
       validate={validate}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <Row>
              <Col className="Admin_dashboard margin_bottom" lg={12}>
                <h3>  Product Specification</h3>
              </Col>
            </Row>
            <Row>
              <Col lg={8}>
                <div className=" Addnewpeoduct margin_bottom">
                  <h3 className="margin_bottom"> </h3>
                  <div className="margin_bottom">
                    <h5 className="margin_bottom">Specification</h5>
                    <div className="d-flex newpeo_div">
                      <Field name="category">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                          </select>
                        )}
                      </Field>
                    </div>  
                  </div>
                  {/* <div className="margin_bottom">
                    <h5 className="margin_bottom">2</h5>
                    <div className="d-flex newpeo_div">
                      <Field name="subcategory">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            {...input}
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option>2</option>
                            <option>2</option>
                            <option>2</option>
                            <option>2</option>
                            <option>2</option>
                          </select>
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="margin_bottom">
                    <h5 className="margin_bottom">3</h5>
                    <div className="d-flex newpeo_div">
                      <Field name="type subcategory">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            {...input}
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option>3</option>
                            <option>3</option>
                            <option>3</option>
                            <option>3</option>
                            <option>3</option>
                          </select>
                        )}
                      </Field>
                    </div>
                  </div> */}
                </div>
                {/* <div className="Addnewpeoduct margin_bottom py-4">
                  <div className="margin_bottom">
                    <h5></h5>
                    <div className="d-flex newpeo_div">
                      <Field name="brand">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            name="brand"
                            {...input}
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option></option>
                          </select>
                        )}
                      </Field>
                    </div>
                  </div>
                </div>
                <div className="Addnewpeoduct margin_bottom">
                  <div className="margin_bottom">
                    <h5 className="margin_bottom"></h5>
                    <Field
                      className="descirption_box"
                      name="description"
                      component="textarea"
                      type="text"
                      placeholder=""
                      required
                    />
                  </div>
                </div> */}
              </Col>
            </Row>
            <Button className="addproduct_button margin_bottom" type="submit">
              Add product
            </Button>
            {/* <ToastContainer /> */}
          </form>
        )}
      />
    </>
  );
};

export default ProductSpecification;
