import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homecategory } from "../../../Redux/action/categoryWiseAction";
import { Link, useParams } from "react-router-dom";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import Subcaregoryfilter from "./SubcaregoryMobilefilter";
import { BiChevronRight } from "react-icons/bi";

const Homecategory = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.homecategory?.listdata);
  const { categoryName } = useParams();
  useEffect(() => {
    dispatch(homecategory(categoryName));
  }, []);
  console.log(data, "goapl");
  console.log(categoryName);

  return (
    <>
      <div className=" slider_col ">
        <Row>
          <Col lg={2}>
            {" "}
            <Subcaregoryfilter />
            <div className="leftfilter_bar">
              <div className="margin_bottom">
                <h4> Filters</h4>
              </div>
              <div className="categorieslefftfilter margin_bottom">
                CATEGORIES
              </div>
              <div>
                <div className="pricealign margin_bottom">
                  <div>Price</div>
                  <input className="pricerange_filter" type="range" />
                </div>
                <div className="d-flex  margin_bottom">
                  <div className="leftpricefilter_wid">
                    <select className="pricefilter_left" name="cars" id="cars">
                      <option value="">Min</option>
                      <option value="">100</option>
                      <option value="">500</option>
                      <option value="">999</option>
                    </select>
                  </div>
                  <div className="priceoption"> to</div>
                  <div className="leftpricefilter_wid">
                    <select className="pricefilter_left" name="cars" id="cars">
                      <option value="">700</option>
                      <option value="">1500</option>
                      <option value="">1999</option>
                      <option value="">2499+</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div className="brands_filters">
                  <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="leftbrand_filter">
                        BRAND
                      </Accordion.Header>
                      <Accordion.Body>
                        <from>
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">HAVELLES</lable>
                          <br />
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">HAVELLES</lable>
                          <br />
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">HAVELLES</lable>
                          <br />
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">HAVELLES</lable>
                          <br />
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">HAVELLES</lable>
                        </from>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>OFFERS</Accordion.Header>
                      <Accordion.Body>
                        <from>
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">
                            Buy More, Save More
                          </lable>
                          <br />
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">No Cost EMI</lable>
                          <br />
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">Special Price</lable>
                        </from>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>DISCOUNT</Accordion.Header>
                      <Accordion.Body>
                        <from>
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">50% or more</lable>
                          <br />
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">40% or more</lable>
                          <br />
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">20% or more</lable>
                        </from>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        GST INVOICE AVAILABLE{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <from>
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">
                            GST Invoice Available
                          </lable>
                        </from>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header> AVAILABILITY </Accordion.Header>
                      <Accordion.Body>
                        <from>
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">
                            Include Out of Stock
                          </lable>
                        </from>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={10}>
            <div className="subcarhide">
              <div className="subcategory_topcontent">
                <div>
                  <Link className="home_link" to="/">
                    Home{" "}
                  </Link>
                  <BiChevronRight />
                </div>
              </div>
              <div className="margin_bottom">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div></div>
              <div className="righthome_filter">
                <h4>Sort By</h4>
                <h4>Popularity</h4>
                <h4>Price--Low to High</h4>
                <h4>Price--High to Low </h4>
                <h4>Newest First </h4>
              </div>
            </div>
            <Row>
              {data?.map((item) => {
                return (
                  <>
                    <Link
                      className="carddecorationnone_cat text_edit"
                      reloadDocumen={true}
                      to={`/productdetail/${item._id}`}
                    >
                      <div className="subcatkitechenmaindiv margin_bottom">
                        <Col lg={3}>
                          <div>
                            <img
                              className="subcatkitchen_image"
                              variant="top"
                              // src={item?.image || item?.thumbnail}
                              src={
                                item?.image
                                  ? item?.image
                                  : item?.thumbnail.split(":").length > 1
                                  ? item?.thumbnail
                                  : `http://localhost:5000/uploads/${item.thumbnail}`
                              }
                              alt=""
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="p-4">
                            <div className="subcatitem_cont"> {item.title}</div>
                            <div> {item?.description}</div>
                            <div className="kit_homestarticon">
                              {item?.rating}
                            </div>
                            {/* <p className="homerating_cat"> {item.category}</p> */}
                          </div>
                        </Col>
                        <Col lg={3}>
                          <div className="p-4">
                            <h5> ₹{item?.price}</h5>
                          </div>
                        </Col>
                      </div>
                    </Link>
                  </>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Homecategory;
