import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { signUpAction } from "../../Redux/action/signUpAction";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Carousel } from "react-bootstrap";
// import { productAction } from "../../Redux/action/productAction";
import { Link } from "react-router-dom";
import {
  BsFillBagFill,
  BsFillGiftFill,
  BsQuestionCircleFill,
  BsStarHalf,
} from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { getProductAction } from "../../../../Redux/action/getProductDetailAction";
import { HiDesktopComputer } from "react-icons/hi";
import { updateProduct } from "../../../../Redux/action/updateProductAction";

// const cardData = [
//   {
//     cardImg: "image/pexels-pixabay-267320 (1).jpg",
//     cardName: "Footwear",
//     cardPara: "Upto 70% off",
//   },
//   {
//     cardImg: "image/pexels-terje-sollie-298863.jpg",
//     cardName: "clothing",
//     cardPara: "Upto 70% off",
//   },
//   {
//     cardImg: "image/pexels-godisable-jacob-934673.jpg",
//     cardName: "Bags ",
//     cardPara: "Upto 80% off",
//   },
//   {
//     cardImg: "image/pexels-torsten-dettlaff-437038 (1).jpg",
//     cardName: "Watches",
//     cardPara: "Upto 40% off",
//   },
// ];

const Home = () => {
  const navigate = useNavigate();

  const [apiData, setApiData] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.getproductdata?.listdata);
  console.log(data, "aaaaaabbbbbbbbbss");

  useEffect(() => {
    dispatch(getProductAction());

    // dispatch(signUpAction());
    // dispatch(productDetails());
    // fetch(`https://fakestoreapi.com/products/categories`)
    //   .then((res) => res.json())
    //   .then((data) => setCategory(data));
    // fetch(`https://fakestoreapi.com/products`)
    //   .then((res) => res.json())
    //   .then((data) => setApiData(data));
  }, []);

  // const handelChange = (e, value) => {
  //   console.log(e, "fghjkjhghjklkjhghjk");
  //   if (e === true) {
  //     fetch(`https://fakestoreapi.com/products/category/${value}`)
  //       .then((res) => res.json())
  //       .then((data) => setApiData(data));
  //   }
  // };

  console.log(category, "json");
  const handleClick = () => {
    navigate("/addcart");
  };

  const productClick = (_id) => {
    console.log(_id, "hh/ddhhjjjjjjjjjjj");
    dispatch(updateProduct({ _id }));
  };

  return (
    <>
      <div className="container ">
        <div className=" slider_col margin_bottom">
          <div className="slider">
            <Carousel className="">
              <Carousel.Item interval={1000}>
                <Row>
                  <Col lg={6}>
                    <div className="slider_left_cont">
                      <div>
                        <h5>100% genuine product</h5>
                        <h1>Click & Collect</h1>
                      </div>
                      <Button className="slider_leftbutton" variant="light">
                        Explore Now{" "}
                      </Button>
                      <Button className="slider_rightbutton" variant="light">
                        About Us{" "}
                      </Button>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <img
                      className="slide_img"
                      src=" https://freepngimg.com/thumb/ecommerce/12-2-ecommerce-png-picture.png"
                      alt="First slide"
                    />
                  </Col>
                </Row>
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <Row>
                  <Col lg={6}>
                    <div className="slider_left_cont">
                      <div>
                        <p>100% genuine product</p>
                        <h1>Click & Collect</h1>
                      </div>
                      <Button className="slider_leftbutton" variant="light">
                        Explore Now{" "}
                      </Button>
                      <Button className="slider_rightbutton" variant="light">
                        About Us{" "}
                      </Button>
                    </div>
                  </Col>
                  <Col lg={6}>
                    {" "}
                    <img
                      className="slide_img"
                      src="https://freepngimg.com/save/14064-ecommerce-png-pic/470x380"
                      alt="Second slide"
                    />
                  </Col>
                </Row>
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col lg={6}>
                    <div className="slider_left_cont">
                      <div>
                        <p>100% genuine product</p>
                        <h1>Click & Collect</h1>
                      </div>
                      <Button className="slider_leftbutton" variant="light">
                        Explore Now{" "}
                      </Button>
                      <Button className="slider_rightbutton" variant="light">
                        About Us{" "}
                      </Button>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <img
                      className="slide_img"
                      src="https://www.pngall.com/wp-content/uploads/2016/06/Ecommerce-PNG-File.png"
                      alt="Third slide"
                    />
                  </Col>
                </Row>
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div>
            <Row>
              <Col lg={12}>
                <h2 className="ourtopcategories_home margin_bottom">
                  Our Top Categories
                </h2>
                <div className="category_borderdiv">
                  <Row>
                    <Col lg={2} md={4}>
                      <Card className="cat_card_homep">
                        <div className="hoveron_arrow">
                          <div className="top_catcard">
                            <div className="pos_catimage">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuAL06ra4m2W_DXcRRcf_ai47fI6SMX2A0g&usqp=CAU"
                                alt=""
                              />
                            </div>
                            <p>Electronics</p>
                          </div>
                          <div className="hoverarrow_direc">
                            <div className="right_bottomborder">
                              <FiArrowUpRight className="arrow-icon" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col lg={2} md={4}>
                      <Card className="cat_card_homep">
                        <div className="hoveron_arrow">
                          <div className="top_catcard">
                            <div className="pos_catimage">
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuAL06ra4m2W_DXcRRcf_ai47fI6SMX2A0g&usqp=CAU"
                                alt=""
                              />
                            </div>
                            <p>Men</p>
                          </div>
                          <div className="hoverarrow_direc">
                            <div className="right_bottomborder">
                              <FiArrowUpRight className="arrow-icon" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col lg={2} md={4}>
                      <Card className="cat_card_homep">
                        <div className="hoveron_arrow">
                          <div className="top_catcard">
                            <div className="pos_catimage">
                              {" "}
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuAL06ra4m2W_DXcRRcf_ai47fI6SMX2A0g&usqp=CAU"
                                alt=""
                              />
                            </div>
                            <p>Women</p>
                          </div>
                          <div className="hoverarrow_direc">
                            <div className="right_bottomborder">
                              <FiArrowUpRight className="arrow-icon" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col lg={2} md={4}>
                      <Card className="cat_card_homep">
                        <div className="hoveron_arrow">
                          <div className="top_catcard">
                            <div className="pos_catimage">
                              {" "}
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuAL06ra4m2W_DXcRRcf_ai47fI6SMX2A0g&usqp=CAU"
                                alt=""
                              />
                            </div>
                            <p>Home & Kitchen</p>
                          </div>
                          <div className="hoverarrow_direc">
                            <div className="right_bottomborder">
                              <FiArrowUpRight className="arrow-icon" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col lg={2} md={4}>
                      <Card className="cat_card_homep">
                        <div className="hoveron_arrow">
                          <div className="top_catcard">
                            <div className="pos_catimage">
                              {" "}
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuAL06ra4m2W_DXcRRcf_ai47fI6SMX2A0g&usqp=CAU"
                                alt=""
                              />
                            </div>
                            <p>Appliances</p>
                          </div>
                          <div className="hoverarrow_direc">
                            <div className="right_bottomborder">
                              <FiArrowUpRight className="arrow-icon" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col lg={2} md={4}>
                      <Card className="cat_card_homep">
                        <div className="hoveron_arrow">
                          <div className="top_catcard">
                            <div className="pos_catimage">
                              {" "}
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuAL06ra4m2W_DXcRRcf_ai47fI6SMX2A0g&usqp=CAU"
                                alt=""
                              />
                            </div>
                            <p>Sports & More</p>
                          </div>
                          <div className="hoverarrow_direc">
                            <div className="right_bottomborder">
                              <FiArrowUpRight className="arrow-icon" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div className="">
            <Row>
              <Col lg={12}>
                <Row>
                  {/* {apiData &&
              apiData?.map((e) => {
                return (
                  <>
                    <Card style={{ width: "18rem" }}>
                      <h3>{e.category}</h3>
                      <Card.Img
                        onClick={imgClick}
                        variant="top"
                        src={e.image}
                      />

                      <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>{e.description}</Card.Text>
                        <p>price {e.price}</p>
                        <p>count: {e.rating.count}</p>
                        <p>Rating: {e.rating.rate}</p>
                        <Button variant="primary" onClick={handleClick}>
                          Add To Cart
                        </Button>
                        <Button variant="primary">Buy Now</Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })} */}
                  {data &&
                    data.map((e) => (
                      <Col md={4} lg={2} key={e?.id}>
                        <Link
                          className="card_deco"
                          to={`/productdetail`}
                          onClick={() => productClick(e?._id)}
                        >
                          <Card className="shopping_card">
                            <div className="img_div">
                              <Card.Img
                                variant="top"
                                src={e?.image || e?.thumbnail}
                              />
                            </div>

                            <Card.Body>
                              <div className="item_rating">
                                <p>
                                  {" "}
                                  <Badge className="badge" bg="danger">
                                    {e?.rating}
                                  </Badge>
                                </p>
                                <p>
                                  {" "}
                                  <Badge className="badge" bg="primary">
                                    {e?.category}
                                  </Badge>
                                </p>
                              </div>
                              <Card.Title className="crad_text">
                                {e?.title}
                              </Card.Title>
                              <Card.Text className="crad_text">
                                {e?.description}
                              </Card.Text>
                              <Card.Text className="crad_text">
                                <h5> ₹ {e?.price}</h5>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Link>
                      </Col>
                    ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <Row>
          <h2 className="ourtopcategories_home"> Top Trending Products</h2>
          <Row>
            <Col lg={3}>
              <Card className="shopping_card">
                <div className="img_div">
                  <Card.Img
                    variant="top"
                    src="https://global-uploads.webflow.com/6185b708a2657014268d2eaf/6204941a794503795772a4a1_combatant-gentlemen-menswear-ecommerce-site.png"
                  />
                </div>
                <Card.Body>
                  <div className="item_rating">
                    <p>
                      {" "}
                      <Badge className="badge" bg="danger">
                        4
                      </Badge>
                    </p>
                    <p>
                      {" "}
                      <Badge className="badge" bg="primary">
                        5
                      </Badge>
                    </p>
                  </div>
                  <Card.Title className="crad_text">Fashion</Card.Title>
                  <Card.Text className="crad_text">Zara</Card.Text>
                  <div className="card_texthoverdetail">
                    <Card.Text className="crad_text">
                      <h5> ₹ 6000</h5>
                    </Card.Text>
                    {/* <div className="cardhide_onhov">
                      <Button className="slider_leftbutton" variant="light">
                        Add to Cart{" "}
                      </Button>
                    </div> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}></Col>
            <Col lg={3}></Col>
          </Row>
          <Col lg={4}>
            <div className="banner">
              <div>
                {" "}
                <Button className="banner-button" variant="light">
                  Shop Now{" "}
                </Button>
              </div>
              <div>
                <img
                  className="banner-img"
                  src="https://global-uploads.webflow.com/6185b708a2657014268d2eaf/6204941a794503795772a4a1_combatant-gentlemen-menswear-ecommerce-site.png"
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="banner">
              <div>
                {" "}
                <Button className="banner-button" variant="light">
                  Shop Now{" "}
                </Button>
              </div>
              <div>
                <img
                  className="banner-img"
                  src="https://global-uploads.webflow.com/6185b708a2657014268d2eaf/6204941a794503795772a4a1_combatant-gentlemen-menswear-ecommerce-site.png"
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="banner">
              <div>
                {" "}
                <Button className="banner-button" variant="light">
                  Shop Now{" "}
                </Button>
              </div>
              <div>
                <img
                  className="banner-img"
                  src="https://global-uploads.webflow.com/6185b708a2657014268d2eaf/6204941a794503795772a4a1_combatant-gentlemen-menswear-ecommerce-site.png"
                  alt=""
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container-fluid">
        <Row>
          <footer>
            <div className="top">
              <ul>
                <h5>ABOUT</h5>
                <li>
                  <a href="dgg">Contact Us</a>
                </li>
                <li>
                  <a href="dgg">About Us</a>
                </li>
                <li>
                  <a href="dg">Careers</a>
                </li>
                <li>
                  <a href="dg">Press</a>
                </li>
              </ul>
              <ul>
                <h5>HELP</h5>
                <li>
                  <a href="dg">Payments</a>
                </li>
                <li>
                  <a href="dg">Shipping</a>
                </li>
                <li>
                  <a href="dg">Cancellation & Return</a>
                </li>
                <li>
                  <a href="dg">FAQ</a>
                </li>
                <li>
                  <a href="dg">Report Infringment</a>
                </li>
              </ul>
              <ul>
                <h5>CONSUMER POLICY</h5>
                <li>
                  <a href="dg">Return Policy</a>
                </li>
                <li>
                  <a href="dg">Terms Of Use</a>
                </li>
                <li>
                  <a href="dg">Security</a>
                </li>
                <li>
                  <a href="dg">Privacy</a>
                </li>
                <li>
                  <a href="dg">Sitemap</a>
                </li>
                <li>
                  <a href="dg">Grievance Redressal</a>
                </li>
                <li>
                  <a href="dg">EPR Compliance</a>
                </li>
              </ul>
              <ul>
                <h5>SOCIAL</h5>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Youtube</li>
              </ul>
              <ul className="left_border">
                <h5 className="text"> Mail Us:</h5>
                <p>
                  mailto:instepcart@mail.com <br />
                </p>
              </ul>
              <ul>
                <h5> Registered Office Address:</h5>
                <p>
                  {" "}
                  Tricity Plaza, Office No. 14
                  <br />
                  Ground, Peer Muchalla <br />
                  Zirakpur, Punjab 140603
                </p>
                <p className="tele">
                  Telephone: <span>000-000-0000</span>{" "}
                </p>
              </ul>
            </div>
            <Row>
              <Col className="social">
                <i>
                  {" "}
                  <BsFillBagFill className="Soc_icon" />
                  Become a Seller
                </i>
                <i>
                  {" "}
                  <BsStarHalf className="Soc_icon" />
                  Advertise
                </i>
                <i>
                  {" "}
                  <BsFillGiftFill className="Soc_icon" />
                  Gift Cards
                </i>
                <i>
                  <BsQuestionCircleFill className="Soc_icon" />
                  Help Center
                </i>
                <i> &copy; 2023 Instepcart.com</i>
              </Col>
            </Row>
            {/* <div className="info">
          <div className="legal">
            <a href="dg">Terms & Conditions</a><a href="dg">Privacy Policy</a>
          </div>
          <div className="copyright">2021 Copyright &copy; Sean B</div>
        </div> */}
          </footer>
        </Row>
      </div>
    </>
  );
};

export default Home;
