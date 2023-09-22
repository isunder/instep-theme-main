import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiComputerFan } from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";
import { FaPeopleRoof } from "react-icons/fa6";

const topbrands = [
  {
    image:
      "https://cdn.sanity.io/images/kts928pd/production/4f75d00dcef8ea2832f617ea9d7b6135f0441cd2-1600x900.png",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Wish_2022.svg/1200px-Wish_2022.svg.png",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwvq-S7q4soBdqTt9ylS-qaZ2Pn_yk3mxGkXtcFlgfjzvvVhmMyDYN22joVXZTK_13JQ&usqp=CAU",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1d_6mJtqea8jVWlGWT0OcR3YL-Ifu096cw&usqp=CAU",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5BMAfeAbDn_NVRGFqsPDzQ0gA7wRR7e3iTRmZp8LzeIN00l6v5ZANl65fEX5J6YGyoo&usqp=CAU",
  },
  {
    image:
      "https://seeklogo.com/images/Y/yotpo-logo-D5E7916640-seeklogo.com.png",
  },
];

const Aboutus = () => {
  return (
    <>
      <div className="margin_bottom">
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
                      className="img-fluid"
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
      <div className="container">
        <div className="paddingdiv_popuarcat margin_bottom">
          <h2 className="margin_bottom">Top Categories</h2>
          <Row>
            <Col lg={12} md={12}>
              <div className="mostpopularbrandborder">
                <Row>
                  {topbrands.map((item, index) => {
                    return (
                      <>
                        <Col lg={2} md={4} key={index}>
                          <img
                            className="poupularbrands"
                            src={item.image}
                            alt=""
                          />
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottombackgrouns_image">
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
                <GrPersonalComputer />
                <h2>100k +</h2>
                <p> Total Products</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="workability">
                <GiComputerFan />
                <h2>255k +</h2>
                <p> Total Orders</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="workability">
                <FaPeopleRoof />
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
