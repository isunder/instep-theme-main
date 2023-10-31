import React, { useEffect, useState } from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { FaTruckLoading } from "react-icons/fa";
import {
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { BiSolidStarHalf } from "react-icons/bi";
import { getUserId } from "../../../utils/auth";
import { BsPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from "react-final-form";

const Delieverydetail = () => {
  const [showCol, setShowCol] = useState("login");

  const userLogin = getUserId();
  console.log(userLogin, "gopllaaaa");

  const dispatch = useDispatch();
  const myCartL = useSelector((state) => state?.cartdetails.listdata);

  const getTotalPrice = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = myCartL?.reduce((accumulator, currentValue, index) => {
        return (
          accumulator +
          currentValue?.productDetails[0]?.price * currentValue?.quantity
        );
      }, 0);
    }

    return count;
  };
  console.log(myCartL, "mycartL");

  const getTotalDiscount = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = myCartL?.reduce((accumulator, currentValue, index) => {
        let discountprice =
          (currentValue?.productDetails[0]?.discountpercentage / 100) *
          currentValue?.productDetails[0]?.price *
          currentValue?.quantity;
        console.log(discountprice, "disc");
        return accumulator + discountprice;
      }, 0);

      return count;
    }
  };

  const getDiscountPercentage = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = myCartL?.reduce((accumulator, currentValue, index) => {
        console.log(
          currentValue?.productDetails[0]?.discountpercentage,
          "fwkoejoiwejl"
        );
        return (
          accumulator + currentValue?.productDetails[0]?.discountpercentage
        );
      }, 0);

      console.log(count / myCartL?.length, "ekrfioejroij");
      return count / myCartL?.length;
    }
  };

  const onSubmit = {};
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.number) {
      errors.number = "Required";
    }
    if (!values.pincode) {
      errors.pincode = "Required";
    }
    if (!values.locality) {
      errors.locality = "Required";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.city) {
      errors.city = "Required";
    }
    if (!values.state) {
      errors.state = "Required";
      if (!values.landmark) {
        errors.landmark = "Required";
      }
      if (!values.Alternatephone) {
        errors.Alternatephone = "Required";
      }
    }
    return errors;
  };
  return (
    <>
      <div className="container">
        <div className=" slider_col margin_bottom">
          <Accordion defaultActiveKey="0">
            <Row>
              <Col lg={9}>
                <div className=" margin_bottom">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="loginmain_align ">
                        <div className="">
                          <div className="d-flex mx-2">
                            <div className="logindetail">1</div>
                            <p>LOGIN</p>
                            <p>
                              <TiTick className="logindetail_icon" />
                            </p>
                          </div>
                          <div className="individual_info">
                            <p>{userLogin.username}</p>
                            <p>Contact No.</p>
                          </div>
                        </div>
                        {/* <div>
                        <button
                          className="infochange_button"
                          value="change"
                          onClick={() => setShowCol("login")}
                        >
                          CHANGE
                        </button>
                      </div> */}
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {" "}
                      <Row>
                        <Col lg={6}>
                          <div className="individual_info login_contalign ">
                            <Link className="loginandsignout" to="./..">
                              Logout & Sign in to another account
                            </Link>
                            <button
                              value="continue checkout"
                              className="logincont"
                              onClick={() => setShowCol("delivery")}
                            >
                              CONTINUE CHECKOUT
                            </button>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div>
                            <p className="advantag_es my-2">
                              Advantage of our secure login
                            </p>
                            <p className="my-1">
                              <FaTruckLoading className="logindel" />
                              Easily Track Orders, Hassle free Returns
                            </p>
                            <p className="my-1">
                              <MdOutlineNotificationsActive className="logindel" />
                              Get Relevant Alerts and Recommendation
                            </p>
                            <p>
                              <BiSolidStarHalf className="logindel" />
                              Wishlist, Reviews, Ratings and more.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>

                <Row>
                  <Col lg={12}>
                    <div className="margin_bottom">
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <div className="loginmain_align">
                            <div className="d-flex my-3">
                              <div className="logindetail">2</div>
                              <div className="d-flex mx-2">
                                <p>DELIVERY ADDRESS</p>
                              </div>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* <div className="formalign"> */}
                          {/* <div className="d-flex  margin_bottom">
                              <MdRadioButtonChecked className="logindetail_icon" />
                              <p>ADD A NEW ADDRESS</p>
                            </div>
                            <div className=" margin_bottom">
                              <button
                                value="use my current location"
                                className="addresslocation"
                              >
                                use my current location
                              </button>
                            </div> */}
                          <Form
                            onSubmit={onSubmit}
                            validate={validate}
                            render={({
                              handleSubmit,
                              form,
                              submitting,
                              pristine,
                              values,
                            }) => (
                              <form onSubmit={handleSubmit}>
                                <div className="adsressmaindiv_top margin_bottom">
                                  <Field name="name">
                                    {({ input, meta }) => (
                                      <div className="fields">
                                        <input
                                          {...input}
                                          type="text"
                                          placeholder="Name"
                                          className="inputfiels_place"
                                        />
                                        {meta.error && meta.touched && (
                                          <span>{meta.error}</span>
                                        )}
                                      </div>
                                    )}
                                  </Field>
                                  <Field name="number">
                                    {({ input, meta }) => (
                                      <div className="fields">
                                        <input
                                          {...input}
                                          type="number"
                                          placeholder="10-digit mobile number"
                                          className="inputfiels_place"
                                        />
                                        {meta.error && meta.touched && (
                                          <span>{meta.error}</span>
                                        )}
                                      </div>
                                    )}
                                  </Field>
                                </div>
                                <div className="adsressmaindiv_top margin_bottom">
                                  <Field name="pincode">
                                    {({ input, meta }) => (
                                      <div className="fields">
                                        <input
                                          {...input}
                                          type="number"
                                          placeholder="pincode"
                                          className="inputfiels_place"
                                        />
                                        {meta.error && meta.touched && (
                                          <span>{meta.error}</span>
                                        )}
                                      </div>
                                    )}
                                  </Field>
                                  <Field name="locality">
                                    {({ input, meta }) => (
                                      <div className="fields">
                                        <input
                                          {...input}
                                          type="text"
                                          placeholder="locality"
                                          className="inputfiels_place"
                                        />
                                        {meta.error && meta.touched && (
                                          <span>{meta.error}</span>
                                        )}
                                      </div>
                                    )}
                                  </Field>
                                </div>
                                <Field name="address">
                                  {({ input, meta }) => (
                                    <div className="addressbottommain margin_bottom">
                                      <input
                                        {...input}
                                        type="text"
                                        placeholder="address"
                                        className="addressmaininput"
                                      />
                                      {meta.error && meta.touched && (
                                        <span>{meta.error}</span>
                                      )}
                                    </div>
                                  )}
                                </Field>
                                <div className="adsressmaindiv_top margin_bottom">
                                  <Field name="city">
                                    {({ input, meta }) => (
                                      <div className="fields">
                                        <input
                                          {...input}
                                          type="text"
                                          placeholder="City/District/Town"
                                          className="inputfiels_place"
                                        />
                                        {meta.error && meta.touched && (
                                          <span>{meta.error}</span>
                                        )}
                                      </div>
                                    )}
                                  </Field>
                                  <Field name="state" component="select">
                                    {({ input, meta }) => (
                                      <div className="fields">
                                        <select
                                          {...input}
                                          className="inputfiels_place"
                                        >
                                          <option value="">
                                            Select a State
                                          </option>
                                          <option value="red">Barnala</option>
                                          <option value="blue">Barnala</option>
                                          <option value="green">Barnala</option>
                                        </select>
                                        {meta.error && meta.touched && (
                                          <span>{meta.error}</span>
                                        )}
                                      </div>
                                    )}
                                  </Field>
                                </div>
                                <div className="adsressmaindiv_top margin_bottom">
                                  <Field name="landmark">
                                    {({ input, meta }) => (
                                      <div className="fields">
                                        <input
                                          {...input}
                                          type="text"
                                          placeholder="landmark"
                                          className="inputfiels_place"
                                        />
                                        {meta.error && meta.touched && (
                                          <span>{meta.error}</span>
                                        )}
                                      </div>
                                    )}
                                  </Field>

                                  <Field name="Alternatephone">
                                    {({ input, meta }) => (
                                      <div className="fields">
                                        <input
                                          {...input}
                                          type="number"
                                          placeholder="Alternate phone (optinal)"
                                          className="inputfiels_place"
                                        />
                                        {meta.error && meta.touched && (
                                          <span>{meta.error}</span>
                                        )}
                                      </div>
                                    )}
                                  </Field>
                                </div>
                                {/* <div className="buttons">
                                  <button type="submit" disabled={submitting}>
                                    Submit
                                  </button>
                                  <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                  >
                                    Reset
                                  </button>
                                </div> */}
                              </form>
                            )}
                          />
                          <p>Address Type</p>
                          <div className="delivery_place margin_bottom">
                            <div>
                              <p>
                                {" "}
                                <input type="radio" />
                                Home (All day delivery)
                              </p>
                            </div>
                            <div>
                              <p>
                                <input type="radio" />
                                Work (Delivery between 10 AM-5 PM)
                              </p>
                            </div>
                          </div>
                          <button
                            type="submit"
                            value="use my current location"
                            className="addresslocation"
                            // onClick={() => {
                            //   setShowCol(null);
                            // }}
                          >
                            SAVE AND DELIVER HERE
                          </button>
                          {/* </div> */}
                        </Accordion.Body>
                      </Accordion.Item>
                    </div>
                    <div className=" margin_bottom">
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                        <div className="loginmain_align">
                            <div className="d-flex my-3">
                              <div className="logindetail">3</div>
                              <div className="d-flex mx-2">
                                <p>ORDER SUMMARY</p>
                              </div>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body> </Accordion.Body>
                      </Accordion.Item>
                    </div>
                    {/* <div className="borderforall_detail"> */}

                    {/* </div> */}
                    <Row>
                      <Col lg={12}>
                        <div
                          className="addnew_address"
                          onClick={() => {
                            setShowCol("delivery");
                          }}
                        >
                          <div>
                            <BsPlusCircleFill className="logindetail_icon" />
                          </div>
                          <div>
                            <p>Add New</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col lg={3}>
                <div className="rightpricedetail margin_bottom">
                  <div className="addcartpricede_tail margin_bottom ">
                    <h5>PRICE DETAIL</h5>
                  </div>
                  <div className="d-flex justify-content-between  margin_bottom">
                    <p className="totalamountright_">Price</p>
                    <p>₹{getTotalPrice()}</p>
                  </div>
                  <div className="d-flex justify-content-between margin_bottom">
                    <p className="totalamountright_">Discount</p>
                    <span className="discountpercentage_">
                      {getDiscountPercentage()?.toFixed(0)}%
                    </span>
                  </div>
                  <div className="d-flex justify-content-between margin_bottom addcart_delivery">
                    <p className="totalamountright_">Delivery Charges</p>
                    <p>-----------</p>
                  </div>
                  <div className="d-flex justify-content-between margin_bottom addcart_delivery">
                    <h5>Total Amount</h5>
                    <p>₹{getTotalPrice() - getTotalDiscount()?.toFixed(0)}</p>
                  </div>
                  <h6 className="discountpercentage_">
                    Your Will save ₹{getTotalDiscount()?.toFixed(0)} on this
                    order
                  </h6>
                  <div></div>
                  {/* <div className="securityline">
                <SiSpringsecurity className="securepayment_icon" />
                <div>
                  Safe and Secure Payments.Easy returns.100% Authentic products.
                </div>
              </div> */}
                </div>
              </Col>
            </Row>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Delieverydetail;
