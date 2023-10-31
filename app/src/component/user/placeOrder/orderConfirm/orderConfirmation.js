import React from "react";
import { Col, Row } from "react-bootstrap";

const OrderConfirmation = () => {
  return (
    <>
      <div className=" container mainrowdata">
        <Row>
          <Col lg={12}>
            <div className="order_confirm margin_bottom">
              <Row>
                <Col lg={9}>
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
                <Col lg={3} className="seemyorderbutton">
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
                <Col lg={4}>g</Col>
                <Col lg={4}>g</Col>
                <Col lg={4}>g</Col> 
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OrderConfirmation;
