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
import { Swiper } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

  const categorydata = useSelector((state) => state?.getproductdata.listdata);
  console.log(categorydata, "categorydata");

  useEffect(() => {
    dispatch(getProductAction());
    // dispatch(getProductAction(`${categorydata?.listdat.electronics}`));

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

  // categorydata.map((item) => {
  //   if (item.category === "electronics") {
  //     console.log(item.category, item.title,'item>>>>>>>>>>>>>>>>>>>>>>>');
  //   }
  // });
  console.log(category, "json");
  const handleClick = () => {
    navigate("/addcart");
  };

  const productClick = (_id) => {
    console.log(_id, "hh/ddhhjjjjjjjjjjj");
    // dispatch(updateProduct({ _id }));
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
          <div className="homeelectnics_carouse margin_bottom">
            <Row>
              <Col lg={2} className="fistcardof_elct">
                <Card className=" swiperfront_swiperview w-100 ">
                  <div className="fistcardof_elct">
                    <div className="viewallcard_div">
                      <Card.Text className="">
                        <h5>Best Of Electronics</h5>
                      </Card.Text>
                      <button
                        className="electrnicswiewall_button"
                        type="submit"
                      >
                        VIEW ALL
                      </button>
                      <Card.Body>
                        <img
                          className="homedecor_image"
                          src="https://img.freepik.com/free-vector/hand-drawn-phone-cartoon-illustration_23-2150588452.jpg?w=2000"
                          alt=""
                        />
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col lg={10}>
                <Swiper
                  modules={[Navigation]}
                  x
                  spaceBetween={90}
                  slidesPerView={4}
                  navigation
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {categorydata.map((item, index) => {
                    if (item.category === "electronics") {
                      return (
                        <SwiperSlide key={index}>
                          <Link
                            className="card_deco"
                            to={`/subcategory/${item.subcategory}`}
                            onClick={() => productClick(item?._id)}
                          >
                            <Card className="shopping_card">
                              <div className="img_div">
                                <Card.Img
                                  variant="top"
                                  src={item?.image || item?.thumbnail}
                                  // src={`http://localhost:5000/uploads${item.thumbnail}`}
                                />
                              </div>
                              Zara
                              <Card.Body>
                                <div className="item_rating">
                                  <p className="homerating_cat">
                                    {" "}
                                    {item?.rating}
                                  </p>
                                  <p className="homerating_cat">
                                    {" "}
                                    {item.category}
                                  </p>
                                </div>
                                <Card.Title className="crad_text">
                                  {item.title}
                                </Card.Title>
                                <Card.Text className="crad_text">
                                  {item?.description}
                                </Card.Text>
                                <Card.Text className="crad_text">
                                  <h5> ₹ {item?.price}</h5>
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Link>
                        </SwiperSlide>
                      );
                    }
                  })}
                </Swiper>
              </Col>
            </Row>
          </div>
        </div>
        <Row>
          <h2 className="ourtopcategories_home"> Top Trending Products</h2>
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
        <Row>
          {data &&
            data.map((e) => {
              return (
                <Link
                  className="card_deco"
                  to={`/productdetail/${e._id}`}
                  onClick={() => productClick(e?._id)}
                >
                  <Card className="shopping_card">
                    <div className="img_div">
                      <Card.Img variant="top" src={e?.image || e?.thumbnail} />
                    </div>
                    <Card.Body>
                      <div className="item_rating">
                        <p className="homerating_cat"> {e?.rating}</p>
                        <p className="homerating_cat"> {e?.category}</p>
                      </div>
                      <Card.Title className="crad_text">{e?.title}</Card.Title>
                      <Card.Text className="crad_text">
                        {e?.description}
                      </Card.Text>
                      <Card.Text className="crad_text">
                        <h5> ₹ {e?.price}</h5>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              );
            })}
          <Col lg={2} className="fistcardof_elct">
            <Card className="swiperfront_swiperview ">
              <div className="fistcardof_elct">
                <div className="viewallcard_div">
                  <Card.Text className="text-center">
                    <h5>Best Of Home Appliances</h5>
                  </Card.Text>
                  <button className="electrnicswiewall_button" type="submit">
                    VIEW ALL
                  </button>
                  <Card.Body>
                    <img
                      className="homedecor_image"
                      src="https://ouch-cdn2.icons8.com/rQiKaijxXLYiyqOYF9br0qlt89qoLZjE7uM8zvq2L_w/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTAy/Lzg1MzQwOTM5LTkw/Y2MtNDQzNC04MTcx/LTZlMjExMDI0OGFj/Ni5zdmc.png"
                      alt=""
                    />
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={10}>
            <Swiper
              modules={[Navigation]}
              x
              spaceBetween={70}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {data.map((e) => {
                if (e.category === "home&kitchen") {
                  return (
                    <SwiperSlide key={e?.id}>
                      <Link
                        className="card_deco"
                        to={`/subcategory/${e.subcategory}`}
                        // to={`/productdetail/${e._id}`}
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
                              <p className="homerating_cat"> {e?.rating}</p>
                              <p className="homerating_cat"> {e?.category}</p>
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
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
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
