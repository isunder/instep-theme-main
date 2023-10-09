import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { signUpAction } from "../../Redux/action/signUpAction";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Carousel } from "react-bootstrap";
// import { productAction } from "../../Redux/action/productAction";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { getProductAction } from "../../../../Redux/action/getProductDetailAction";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AiFillRightCircle } from "react-icons/ai";
import { allCategoryList } from "../../../../Redux/action/getCategoryAction";
import { adminGetSlider } from "../../../../Redux/action/getSliderAction";
// import { index } from "realm";

const Home = () => {
  const navigate = useNavigate();
  // const [apiData, setApiData] = useState();
  // const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.getproductdata?.listdata);
  // console.log(data, "aaaaaabbbbbbbbbss");

  const categorydata = useSelector((state) => state?.getproductdata?.listdata);
  console.log(categorydata, "categorydata");

  const allcatgorydata = useSelector(
    (state) => state.getcategorylistdata.listdata
  );
  console.log(allcatgorydata, "jjjjjjjj");
  const dataslider = useSelector(
    (state) => state?.getsliderdata?.listdata?.data
  );
  console.log(dataslider, "sliderimgs");

  useEffect(() => {
    dispatch(getProductAction());
    dispatch(allCategoryList());
    dispatch(adminGetSlider());
  }, []);

  // console.log(category, "json");
  const handleClick = () => {
    navigate("/addcart");
  };

  const productClick = (_id) => {
    console.log(_id, "hh/ddhhjjjjjjjjjjj");
  };

  const banner = [
    {
      value: "Shop Now ",
      bannerImage:
        "https://global-uploads.webflow.com/6185b708a2657014268d2eaf/6204941a794503795772a4a1_combatant-gentlemen-menswear-ecommerce-site.png",
    },
    {
      value: "Shop Now ",
      bannerImage:
        "https://global-uploads.webflow.com/6185b708a2657014268d2eaf/6204941a794503795772a4a1_combatant-gentlemen-menswear-ecommerce-site.png",
    },
    {
      value: "Shop Now ",
      bannerImage:
        "https://global-uploads.webflow.com/6185b708a2657014268d2eaf/6204941a794503795772a4a1_combatant-gentlemen-menswear-ecommerce-site.png",
    },
  ];

  return (
    <>
      <div className="container">
        <div className=" slider_col margin_bottom">
          <div className="slider bvbvbvbvbvb">
            <Carousel>
              {/* <Carousel.Item interval={1000}>
                <Row>
                  <Col lg={6}>
                    <div className="slider_left_cont">
                      <div>
                        <h5>100% genuine product</h5>
                        <h1>Click & Collect</h1>
                      </div>
                      <Button className="slider_leftbutton" variant="light">
                        Explore Now
                      </Button>
                      <Link to="/aboutus">
                        <Button className="slider_rightbutton" variant="light">
                          About Us
                        </Button>
                      </Link>
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
              </Carousel.Item> */}
              {/* {Array.isArray(dataslider) &&
                dataslider.map((item, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img
                        className="abcccc slide_img"
                        src={
                          item?.images
                            ? item?.images
                            : `http://localhost:5000/uploads/1693806012738-Capture.PNG/${item.name}`
                        }
                        alt="Slide"
                      />
                    </Carousel.Item>
                  );
                })} */}
              {dataslider &&
                dataslider.length > 0 &&
                dataslider?.map((item, index) => {
                  return (
                    <Carousel.Item interval={500}>
                      <Row>
                        <Col lg={6}>
                          <div className="slider_left_cont">
                            <div>
                              <p>100% genuine product</p>
                              <h1>Click & Collect</h1>
                            </div>
                            <Button
                              className="slider_leftbutton"
                              variant="light"
                            >
                              Explore Now{" "}
                            </Button>
                            <Link to="/aboutus">
                              <Button
                                className="slider_rightbutton"
                                variant="light"
                              >
                                About Us{" "}
                              </Button>
                            </Link>
                          </div>
                        </Col>

                        <Col lg={6}>
                          {" "}
                          <p>{item.name}</p>
                          <img
                            className="slide_img"
                            src={`http://localhost:5000/slider/${item?.images[0]}`}
                            alt="Second sslide"
                          />
                        </Col>
                      </Row>
                    </Carousel.Item>
                  );
                })}
              {/* <Carousel.Item>
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
                      <Link to="/aboutus">
                        <Button className="slider_rightbutton" variant="light">
                          About Us{" "}
                        </Button>
                      </Link>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <img
                      className="slide_img"
                      src="https://www.pngall.com/wp-content/uploads/2016/06/Ecommerce-PNG-File.png"
                      alt="Third slide 1st"
                    />
                  </Col>
                  <Col lg={6}>
                    <img className="slide_img" src="" alt="Third slide 2nd" />
                  </Col>
                </Row>
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>{" "} */}
            </Carousel>
          </div>
          <div>
            <Row>
              <Col lg={12}>
                <div className="margin_bottom">
                  <h2 className="ourtopcategories_home margin_bottom">
                    Our Best Categories
                  </h2>
                  <div className="category_borderdiv">
                    <Row>
                      {allcatgorydata.slice(0, 6).map((e) => {
                        return (<>
                          <Col lg={2} md={4}>
                            <Link
                              className="carddecorationnone_cat"
                              to={`/category/${e._id}`}
                            >
                              <Card className="cat_card_homep">
                                <div className="hoveron_arrow">
                                  <div className="top_catcard">
                                    <div className="pos_catimage">
                                      <img
                                        className="topcatimage_home"
                                        src={`http://localhost:5000/categoryimg/${e.images}`

                                        }
                                        alt=""
                                      />
                                    </div>
                                    <p>{e?.category}</p>
                                  </div>
                                  <div className="hoverarrow_direc">
                                    <div className="right_bottomborder">
                                      <FiArrowUpRight className="arrow-icon" />
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            </Link>
                          </Col>
                        </>)
                      })}
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <h2 className="ourtopcategories_home"> Top Trending Products</h2>

            {banner?.map((item, index) => {
              return (
                <>
                  <Col lg={4}>
                    <div className="banner margin_bottom" key={index}>
                      <div>
                        <div>
                          <Button className="banner-button" variant="light">
                            {item?.value}
                          </Button>
                        </div>
                        <img
                          className="banner-img"
                          src={item?.bannerImage}
                          alt=""
                        />
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
          <div className="homeelectnics_carouse margin_bottom">
            <Row>
              <Col lg={2} className="fistcardof_elct">
                <Card className=" swiperfront_swiperview">
                  <div className="fistcardof_elct">
                    <div className="viewallcard_div">
                      <Card.Text className="text-center">
                        <h5>Best Of Electronics</h5>
                      </Card.Text>
                      <Link className="" to={`/category/${"electronics"}`}>
                        <button
                          className="electrnicswiewall_button"
                          type="submit"
                        >
                          VIEW ALL
                        </button>
                      </Link>

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
                  spaceBetween={5}
                  slidesPerView={4}
                  navigation
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {categorydata &&
                    categorydata?.map((item, index) => {
                      if (item?.category?.[0]?.category === "electronics") {
                        return (
                          <SwiperSlide className="shopping_card" key={index}>
                            <Link
                              className="card_deco"
                              // to={`/subcategory/${item?.subcategory}`}
                              to={`/productdetail/${item._id}`}
                              onClick={() => productClick(item?._id)}
                            >
                              <Card className="shoppingcard_bor">
                                <div className="img_div">
                                  <Card.Img
                                    variant="top"
                                    src={
                                      item?.image
                                        ? item?.image
                                        : item?.thumbnail.split(":").length > 1
                                          ? item?.thumbnail
                                          : `http://localhost:5000/uploads/${item.thumbnail}`
                                    }
                                  />
                                </div>
                                <Card.Body>
                                  {/* <div className="item_rating">
                                  <p className="homerating_cat">
                                    {" "}
                                    {item?.rating}
                                  </p>
                                  <p className="homerating_cat">
                                    {" "}
                                    {item.category}
                                  </p>
                                </div> */}
                                  <Card.Title className="crad_text">
                                    {item?.title}
                                  </Card.Title>
                                  {/* <Card.Text className="crad_text">
                                  {item?.description}
                                </Card.Text> */}
                                  <Card.Text className="crad_text">
                                    <h6> ₹ {item?.price}</h6>
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

          <div className="homeelectnics_carouse ">
            <Row>
              <Col lg={2} className="fistcardof_elct">
                <Card className="swiperfront_swiperview ">
                  <div className="fistcardof_elct">
                    <div className="viewallcard_div">
                      <Card.Text className="text-center">
                        <h5>Best Of Home Appliances</h5>
                      </Card.Text>
                      <Link
                        className="carddecorationnone_cat"
                        to={`/category/${"home&kitchen"}`}
                      >
                        <button
                          className="electrnicswiewall_button"
                          type="submit"
                        >
                          VIEW ALL
                        </button>
                      </Link>
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
                  spaceBetween={5}
                  slidesPerView={4}
                  navigation
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {data?.map((e) => {
                    if (e?.category?.[0]?.category === "Home & Kitchen") {
                      return (
                        <SwiperSlide className="shopping_card" key={e?.id}>
                          <Link
                            className="card_deco"
                            // to={`/subcategory/${e.subcategory}`}
                            to={`/productdetail/${e._id}`}
                            onClick={() => productClick(e?._id)}
                          >
                            <Card className="shoppingcard_bor">
                              <div className="img_div">
                                <Card.Img
                                  variant="top"
                                  src={
                                    e?.image
                                      ? e?.image
                                      : e?.thumbnail.split(":").length > 1
                                        ? e?.thumbnail
                                        : `http://localhost:5000/uploads/${e.thumbnail}`
                                  }
                                />
                              </div>
                              <Card.Body>
                                {/* <div className="item_rating">
                              <p className="homerating_cat"> {e?.rating}</p>
                              <p className="homerating_cat"> {e?.category}</p>
                            </div> */}
                                <Card.Title className="crad_text">
                                  {e?.title}
                                </Card.Title>
                                {/* <Card.Text className="crad_text">
                              {e?.description}
                            </Card.Text> */}
                                <Card.Text className="crad_text">
                                  <h6> ₹ {e?.price}</h6>
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
          <div className="my-4">
            <Row>
              <Col lg={4}>
                <div className="homefashion_border">
                  <div className="d-flex justify-content-between ">
                    <h4>Men's Top Fashion</h4>
                    <AiFillRightCircle className="topcategoies_icon" />
                  </div>
                  <Row>
                    {/* {data.map((e) => {
                    if (e.category === "home&kitchen") {
                      return ( */}
                    <Col lg={6}>
                      <div className="my-2">
                        <div className="hometop_fashionbo_der">
                          <img
                            className="homedecorimag_e"
                            variant="top"
                            src={
                              "https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=h1n990JR40ZFbPRDpxKppFziIWrisGcE_d9OqkLVAC4="
                            }
                            alt=""
                          />
                          <div className="cloths_detail">
                            <p className="crad_text">T-Shirt</p>
                            <p> 15% off</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="my-2">
                        <div className="hometop_fashionbo_der">
                          <img
                            className="homedecorimag_e"
                            variant="top"
                            src={
                              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjjL3hu_1k-cJqcsjBHnvwgMZYB3vOG597A&usqp=CAU"
                            }
                            alt=""
                          />
                          <div className="cloths_detail">
                            <p className="crad_text">T-Shirt</p>
                            <p> 15% off</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    {/* );
                    }
                  })} */}
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <div className="my-2">
                        <div className="hometop_fashionbo_der">
                          <img
                            className="homedecorimag_e"
                            variant="top"
                            src={
                              "https://m.media-amazon.com/images/I/61ai5LmB5QL._AC_UY1000_.jpg"
                            }
                            alt=""
                          />
                          <div className="cloths_detail">
                            <p className="crad_text">T-Shirt</p>
                            <p> 15% off</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="my-2">
                        <div className="hometop_fashionbo_der">
                          <img
                            className="homedecorimag_e"
                            variant="top"
                            src={
                              "https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=h1n990JR40ZFbPRDpxKppFziIWrisGcE_d9OqkLVAC4="
                            }
                            alt=""
                          />
                          <div className="cloths_detail">
                            <p className="crad_text">T-Shirt</p>
                            <p> 15% off</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={4}>
                <div className="homefashion_border">
                  <div className="d-flex justify-content-between ">
                    <h4>Women's Top Fashion</h4>
                    <AiFillRightCircle className="topcategoies_icon" />
                  </div>
                  <Row>
                    {/* {data.map((e) => {
                    if (e.category === "home&kitchen") {
                      return ( */}
                    <Col lg={6}>
                      <div className="my-2">
                        <div className="hometop_fashionbo_der">
                          <img
                            className="homedecorimag_e"
                            variant="top"
                            src={
                              "https://img.freepik.com/premium-photo/two-women-with-shopping-bags-walking-together-fashion-show-generative-ai_902049-23617.jpg?w=360"
                            }
                            alt=""
                          />
                          <div className="cloths_detail">
                            <p className="crad_text">T-Shirt</p>
                            <p> 15% off</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="my-2">
                        <div className="hometop_fashionbo_der">
                          <img
                            className="homedecorimag_e"
                            variant="top"
                            src={
                              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALWyoMNY3B9QCvUlWUYlYHTZZiV56mlrC_-YAARbCc6QHeJCHcUdrPkrxPKndXNjtz1o&usqp=CAU"
                            }
                            alt=""
                          />
                          <div className="cloths_detail">
                            <p className="crad_text">T-Shirt</p>
                            <p> 15% off</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    {/* );
                    }
                  })} */}
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <div className="my-2">
                        <div className="hometop_fashionbo_der">
                          <img
                            className="homedecorimag_e"
                            variant="top"
                            src={
                              "https://png.pngtree.com/background/20210709/original/pngtree-fashion-girl-shopping-banner-material-picture-image_860169.jpg"
                            }
                            alt=""
                          />
                          <div className="cloths_detail">
                            <p className="crad_text">T-Shirt</p>
                            <p> 15% off</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="my-2">
                        <div className="hometop_fashionbo_der">
                          <img
                            className="homedecorimag_e"
                            variant="top"
                            src={
                              "https://5.imimg.com/data5/ZY/SW/VU/ANDROID-89787775/screenshot-20190715-114639-01-jpg-500x500.jpg"
                            }
                            alt=""
                          />
                          <div className="cloths_detail">
                            <p className="crad_text">T-Shirt</p>
                            <p> 15% off</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={4}>
                <div className="sports_bannerhomepage">
                  <div className="sportscontent_align">
                    <div>
                      <h2>Stay Fit & Active</h2>
                    </div>
                    <div className="margin_bottom shop_roe">
                      <p>Shop from our Fitness & Sports Equipment Collection</p>
                    </div>
                    <div>
                      <button className="slider_rightbutton margin_bottom">
                        Explore
                      </button>
                    </div>
                  </div>
                  <div>
                    <img
                      className="homebackground_img"
                      src="https://img.freepik.com/free-vector/box-full-sport-equipments_1308-37207.jpg?w=2000"
                      alt=""
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
