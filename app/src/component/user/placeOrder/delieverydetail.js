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

const Delieverydetail = () => {
  const handleButtonClick = () => {
    setShowCol(!showCol);
  };
  const [showCol, setShowCol] = useState(false);

  const handleButtononClick = () => {
    setOffCol(!offCol);
  };

  const [offCol, setOffCol] = useState(true);

  return (
    <>
      <div className="container">
        <div className=" slider_col margin_bottom">
          <Row>
            <Col lg={9}>
              <div className="borderforall_detail margin_bottom">
                <div className="loginmain_align">
                  <div>
                    <div className="d-flex my-3">
                      <div className="logindetail">1</div>
                      <div className="d-flex mx-2">
                        <p>LOGIN</p>
                        <p>
                          <TiTick className="logindetail_icon" />
                        </p>
                      </div>
                    </div>
                    {showCol === false && (
                      <div>
                        <button
                          className="infochange_button"
                          value="change"
                          onClick={() => setShowCol(true)}
                        >
                          CHANGE
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {showCol && (
                  <Row>
                    <Col lg={6}>
                      <div className="individual_info margin_bottom">
                        <p>Name</p>
                        <p>Contact No.</p>
                      </div>
                      <div className="individual_info login_contalign ">
                        <Link className="loginandsignout" to="./..">
                          Logout & Sign in to another account
                        </Link>
                        <button
                          value="continue checkout"
                          className="logincont"
                          onClick={() => setShowCol(false)}
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
            </Col>
            <Col lg={3}></Col>
          </Row>
          <Row>
            <Col lg={9}>
              <div className="borderforall_detail">
                <div className="loginmain_align">
                  <div className="d-flex my-3">
                    <div className="logindetail">2</div>
                    <div className="d-flex mx-2">
                      <p>DELIVERY ADDRESS</p>
                    </div>
                  </div>
                </div>
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
                    <Col lg={6} className="leftbox_admission margin_bottom">
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
                    <Col lg={6} className="leftbox_admission margin_bottom">
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
                          <Form.Label>Address (Area & Street)</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} className="leftbox_admission margin_bottom">
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
                          <option>Delivery Status</option>
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
                    <Col lg={6} className="leftbox_admission margin_bottom">
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
                  >
                    SAVE AND DELIVER HERE
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Delieverydetail;
