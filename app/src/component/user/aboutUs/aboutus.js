import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <>
      <div className="backgroundimage_aboutus">
        <div className=" home_subcatetop">
          <div className="container">
            <div className="aboutushead">
              <div>
                <h2 className="transitindiv">About US</h2>
              </div>
              <div>
                <Link className="abouthomedec" to="/">
                  Home
                </Link>
              </div>
            </div>
            <div className="aboutustoppadding">
              <Row>
                <Col lg={4}>
                  <div className="aboutusimagediv">
                    <div className="whitecircleimage">
                      <img
                        className="aboutusright_missionimg"
                        src="https://cdni.iconscout.com/illustration/premium/thumb/ecommerce-business-management-2885342-2399045.png"
                        alt=""
                      />
                    </div>
                    <div className="commentsection">
                      <div className="commentinner_section">
                        “Assertively target market Lorem ipsum is simply free
                        consectetur notted elit sed do eiusmod” George Scholll{" "}
                        <p>---asdfgr</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="ourmission  ">
                    <p>
                      Our mission is to provide you with a curated selection of
                      the finest products, sourced from around the world, all in
                      one place. We believe in making online shopping an
                      enjoyable experience by offering a diverse range of
                      products that cater to various interests, preferences, and
                      lifestyles.
                    </p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="ourmission our_vision ">
                    <img
                      src="https://www.grostore.themetags.com/public/frontend/default/assets/img/icons/hand-icon.svg?v=v2.5.1"
                      alt="hand icon"
                      class="img-fluid"
                    />
                    <h4>Our Vision</h4>
                    <p>
                      Assertively target market lorem ipsum is simply free text
                      available dolor sit amet,
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="paddingdiv_popuarcat">
        <h2>Top Categories</h2>
        <Row>
          <Col lg={12} md={6}>
            <div className="mostpopularbrandborder">
              <Row>
                <Col lg={2}>
                  <img
                    className="poupularbrands"
                    src="/photos/puma-logo.svg"
                    alt=""
                  />
                </Col>
                <Col lg={2}>
                  <img
                    className="poupularbrands"
                    src="/photos/asus-rog-1.svg"
                    alt=""
                  />
                </Col>
                <Col lg={2}>
                  <img
                    className="poupularbrands"
                    src="/photos/asus-rog-1.svg"
                    alt=""
                  />
                </Col>
                <Col lg={2}>
                  <img
                    className="poupularbrands"
                    src="/photos/lacoste-logo.svg"
                    alt=""
                  />
                </Col>
                <Col lg={2}>
                  <img
                    className="poupularbrands"
                    src="/photos/lacoste-logo.svg"
                    alt=""
                  />
                </Col>
                <Col lg={2}>
                  <img
                    className="poupularbrands"
                    src="https://cdn.sanity.io/images/kts928pd/production/4f75d00dcef8ea2832f617ea9d7b6135f0441cd2-1600x900.png"
                    alt=""
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <div className="bottombackgrouns_image">
        <div className="container">
          <Row>
            <Col lg={12}>
              <div className="workingability_column margin_bottom">
                <div>
                  {" "}
                  <h2> Our Working Ability</h2>
                </div>
                <div>
                  <p>
                    Assertively target market lorem ipsum is simply free text
                    available dolor incididunt simply free ut labore et dolore.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6}>
              <div className="workability">
                <h2>100k +</h2>
                <p> Total Products</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="workability">
                <h2>255k +</h2>
                <p> Total Orders</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="workability">
                {" "}
                <h2>250k +</h2>
                <p> Total Visitors</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="workability">
                <h2>1250k +</h2>
                <p> Total Deliverymen</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container py-4">
        <Row>
          <Col lg={4}>
            <div className=" thirdrowpadding">
              <div className="semrush_upperdiv">
                <div className="expericetodiv">
                  {" "}
                  <h1> 14+</h1> <h6>years Experience</h6>
                </div>
              </div>
              <img
                className="thridrow_backgroundimage"
                src="https://static.semrush.com/blog/uploads/media/e4/81/e4815bb11c067c2e423effe13fbf2e04/ecommerce-content-marketing-strategy.svg"
                alt=""
              />
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg={6}>
                <div className="trustedpartner py-4">
                  {" "}
                  <img
                    src="https://www.grostore.themetags.com/public/frontend/default/assets/img/icons/hand-icon.svg?v=v2.5.1"
                    alt="hand icon"
                    class="img-fluid"
                  />
                  <h4>Truted Partner</h4>
                  <p>
                    Assertively target market lorem ipsum is simply free text
                    available dolor sit amet,
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="trustedpartner py-4">
                  {" "}
                  <img
                    src="https://www.grostore.themetags.com/public/frontend/default/assets/img/icons/hand-icon.svg?v=v2.5.1"
                    alt="hand icon"
                    class="img-fluid"
                  />
                  <h4>Return Policy</h4>
                  <p>
                    Assertively target market lorem ipsum is simply free text
                    available dolor sit amet,
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                {" "}
                <div className="trustedpartner py-4">
                  {" "}
                  <img
                    src="https://www.grostore.themetags.com/public/frontend/default/assets/img/icons/hand-icon.svg?v=v2.5.1"
                    alt="hand icon"
                    class="img-fluid"
                  />
                  <h4>100% Original Product</h4>
                  <p>
                    Assertively target market lorem ipsum is simply free text
                    available dolor sit amet,
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                {" "}
                <div className="trustedpartner py-4">
                  {" "}
                  <img
                    src="https://www.grostore.themetags.com/public/frontend/default/assets/img/icons/hand-icon.svg?v=v2.5.1"
                    alt="hand icon"
                    class="img-fluid"
                  />
                  <h4>Secured Payment</h4>
                  <p>
                    Assertively target market lorem ipsum is simply free text
                    available dolor sit amet,
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Aboutus;
