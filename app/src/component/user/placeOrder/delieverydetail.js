import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { FaTruckLoading } from "react-icons/fa";
import {
  MdOutlineNotificationsActive,
  MdRadioButtonChecked,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { BiSolidStarHalf } from "react-icons/bi";
import { getUserId } from "../../../utils/auth";
import { BsPlusCircleFill } from "react-icons/bs";

const Delieverydetail = () => {
  const [showCol, setShowCol] = useState("login");

  const userLogin = getUserId();
  console.log(userLogin, "gopllaaaa");

  return (
    <>
      <div className="container">
        <div className=" slider_col margin_bottom">
          <Row>
            <Col lg={9}>
              <div className="borderforall_detail margin_bottom">
                <div className="loginmain_align">
                  <div className=" my-3">
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
                  {showCol !== "login" && (
                    <div>
                      <button
                        className="infochange_button"
                        value="change"
                        onClick={() => setShowCol("login")}
                      >
                        CHANGE
                      </button>
                    </div>
                  )}
                </div>

                {showCol === "login" && (
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
                )}
              </div>

              <Row>
                <Col lg={12}>
                  <div className="borderforall_detail">
                    <div className="loginmain_align">
                      <div className="d-flex my-3">
                        <div className="logindetail">2</div>
                        <div className="d-flex mx-2">
                          <p>DELIVERY ADDRESS</p>
                        </div>
                      </div>
                    </div>
                    {showCol === "delivery" && (
                      <>
                        <div className="formalign">
                          <div className="d-flex  margin_bottom">
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
                          </div>
                          <Row>
                            <Col
                              lg={6}
                              className="leftbox_admission margin_bottom"
                            >
                              <div>
                                <input
                                  type="text"
                                  placeholder="Name"
                                  className="addressformfill"
                                />
                              </div>
                            </Col>
                            <Col lg={6} className="leftbox_admission">
                              <div>
                                <input
                                  type="text"
                                  placeholder="10-digit mobile number"
                                  className="addressformfill"
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col
                              lg={6}
                              className="leftbox_admission margin_bottom"
                            >
                              <div>
                                <input
                                  type="text"
                                  placeholder="Pincode"
                                  className="addressformfill"
                                />
                              </div>
                            </Col>
                            <Col lg={6} className="leftbox_admission">
                              <div>
                                <input
                                  type="text"
                                  placeholder="Locality"
                                  className="addressformfill"
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={9}>
                              <Form>
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlTextarea1"
                                  placeholder="Address (Area & Street"
                                >
                                  <Form.Label>
                                    Address (Area & Street)
                                  </Form.Label>
                                  <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                              </Form>
                            </Col>
                          </Row>
                          <Row>
                            <Col
                              lg={6}
                              className="leftbox_admission margin_bottom"
                            >
                              <div>
                                <input
                                  type="text"
                                  placeholder="City/District/Town"
                                  className="addressformfill"
                                />
                              </div>
                            </Col>
                            <Col lg={6} className="leftbox_admission">
                              <div>
                                <Form.Select className="addressformfill">
                                  <option>Select State</option>
                                  <option>Order Placed </option>
                                  <option>Pending</option>
                                  <option>Processing</option>
                                  <option>Delivered</option>
                                  <option>Cancelled</option>
                                </Form.Select>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col
                              lg={6}
                              className="leftbox_admission margin_bottom"
                            >
                              <div>
                                <input
                                  type="text"
                                  placeholder="Landmark (optional)"
                                  className="addressformfill"
                                />
                              </div>
                            </Col>
                            <Col lg={6} className="leftbox_admission">
                              <div>
                                <input
                                  type="text"
                                  placeholder="Alternate Phone (optional)"
                                  className="addressformfill"
                                />
                              </div>
                            </Col>
                          </Row>
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
                            value="use my current location"
                            className="addresslocation"
                            onClick={() => {
                              setShowCol(null);
                            }}
                          >
                            SAVE AND DELIVER HERE
                          </button>
                        </div>
                      </>
                    )}
                  </div>
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
                  {/* <p>₹{getTotalPrice()}</p> */}
                </div>
                <div className="d-flex justify-content-between margin_bottom">
                  <p className="totalamountright_">Discount</p>
                  <span className="discountpercentage_">
                    {/* {getDiscountPercentage()}% */}
                  </span>
                </div>
                <div className="d-flex justify-content-between margin_bottom addcart_delivery">
                  <p className="totalamountright_">Delivery Charges</p>
                  <p>-----------</p>
                </div>
                <div className="d-flex justify-content-between margin_bottom addcart_delivery">
                  <h5>Total Amount</h5>
                  {/* <p>₹{getTotalPrice() - getTotalDiscount()}</p> */}
                </div>
                <h6 className="discountpercentage_">
                  {/* Your Will save ₹{getTotalDiscount()} on this order */}
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
        </div>
      </div>
    </>
  );
};

export default Delieverydetail;
