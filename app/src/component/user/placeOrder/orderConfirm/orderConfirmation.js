import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillAlert } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
const OrderConfirmation = () => {
  return (
    <>
      <div className=" container mainrowdata">
        <Row>
          <Col lg={12}>
            <div className="order_confirm margin_bottom">
              <Row>
                <Col lg={9} md={9} sm={6}>
                  <div className="ordermaindiv">
                    <div className="giftdiv">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2038/2038582.png"
                        alt=""
                      />
                    </div>
                    <div className="tida_div">
                      <h3> Order placed for </h3>
                      <p>order time and date</p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={6} className="seemyorderbutton">
                  <div className="pt-4 px-5">
                    <p>Why Call? Just click!</p>
                    <button className="gotomyorders">Go to My Orders</button>
                    <img src="" alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="order_confirm margin_bottom">
              <div className="addressmaindiv">
                <p>Delivery Address</p>
                <p>Name</p>
                <p>Address</p>
                <p>Phone number</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="order_confirm margin_bottom">
              <Row>
                <Col lg={4} className="right_border">
                  <div className="customermain_div">
                    <div>
                      <img
                        className="customer_detail"
                        src="https://5.imimg.com/data5/BG/UM/MY-23375112/61.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      Labbin Casual Sneakers White Outdoor Shoes For Boys And
                      Men Sneakers For Men
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="right_border">
                  <div className="customermain_div">
                    <div>
                      <BsTruck
                        style={{
                          width: "30px",
                          height: "30px",
                          color: "#4EB529",
                        }}
                      />
                    </div>
                    <div>delivery expected date</div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="">
                    <p>Price</p>
                  </div>{" "}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="order_confirm margin_bottom">
              <div className="customermain_div">
                <div>
                  <div className="d-flex align-items-center ">
                    <AiFillAlert className="alerticon_confirm" />
                    <p>Beware of fraudent class & message</p>
                  </div>
                  <div>
                    <p className="mb-3">
                      we don't ask for bank OTP/pin for offers or demand money
                    </p>
                  </div>
                  <button className="readbuttommore mx-4">Read More</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OrderConfirmation;
