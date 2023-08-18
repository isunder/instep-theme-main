import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { signUpAction } from "../../Redux/action/signUpAction";
import { Card, Row, Col, Badge } from "react-bootstrap";
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
import { getProductAction } from "../../../../Redux/action/getProductDetailAction";

// import { productDetails } from "../../Redux/action/registerAction";

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

  const handelChange = (e, value) => {
    console.log(e, "fghjkjhghjklkjhghjk");
    if (e === true) {
      fetch(`https://fakestoreapi.com/products/category/${value}`)
        .then((res) => res.json())
        .then((data) => setApiData(data));
    }
  };

  console.log(category, "json");
  const handleClick = () => {
    navigate("/addcart");
  };

  return (
    <>
      <div>
        <div className=" slider_col">
          <div className="slider">
            <Carousel className="">
              <Carousel.Item interval={1000}>
                <img
                  className="slide_img"
                  src=" https://itechbahrain.com/wp-content/uploads/2020/05/eletro.jpg"
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="slide_img"
                  src="https://www.axelaccessories.com/media/homepage/2023/Sliders/03_SALE_NEW_40_-_TOP_SLIDER_-_1920X700_SS23.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide_img"
                  src="https://clotya.co.uk/wp-content/uploads/2023/02/Banner-1-1.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="px-5">
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
                    data?.map((e) => {
                      return (
                        <>
                          <Col md={4} lg={2}>
                            <Link className="card_deco" to={`/productdetail/${e?.id}`} key={e.id}>
                              <Card className="shopping_card">
                                <div className="img_div">
                                  <Card.Img
                                    variant="top"
                                    src={e.image || e.thumbnail}
                                  />
                                </div>

                                <Card.Body>
                                  <div className="item_rating">
                                    <p>
                                      {" "}
                                      <Badge className="badge" bg="danger">
                                        {e.rating}
                                      </Badge>
                                    </p>
                                    <p>
                                      {" "}
                                      <Badge className="badge" bg="primary">
                                        {e.category}
                                      </Badge>
                                    </p>
                                  </div>
                                  <Card.Title className="crad_text">
                                    {e.title}
                                  </Card.Title>
                                  <Card.Text className="crad_text">
                                    {e.description}
                                  </Card.Text>
                                  <Card.Text className="crad_text">
                                    <h5> ₹ {e.price}</h5>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </Link>
                          </Col>
                        </>
                      );
                    })}
                </Row>
              </Col>
              {/* <Col lg={3}></Col> */}
            </Row>
          </div>
        </div>
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
