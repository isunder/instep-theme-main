import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { getProductAction } from "../../../../Redux/action/getProductDetailAction";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AiFillRightCircle } from "react-icons/ai";
import { allCategoryList } from "../../../../Redux/action/getCategoryAction";
import { adminGetSlider } from "../../../../Redux/action/getSliderAction";
import Spinner from "../../loader/spinner";
import Scrolltotopbutton from "../../ScoolToTop/scrolltotopbutton";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.getproductdata?.listdata);

  const loading = useSelector((state) => state?.getproductdata?.isLoading);

  const categorydata = useSelector((state) => state?.getproductdata?.listdata);
  console.log(categorydata, "categorydata");

  const allcatgorydata = useSelector(
    (state) => state?.getcategorylistdata?.listdata?.data
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

  const productClick = (_id) => {
    console.log(_id, "hh/ddhhjjjjjjjjjjj");
  };

  const banner = [
    {
      value: "Shop Now ",
      bannerImage:
        "https://lh3.googleusercontent.com/p/AF1QipOIpf8JlYXIwJFw8A0a7FLgwvvkoGsSpgbvMGAF=w1080-h608-p-no-v0",
    },
    {
      value: "Shop Now ",
      bannerImage:
        "https://trends.co/wp-content/uploads/2021/06/trends_deal_directory_shareable.png",
    },
    {
      value: "Shop Now ",
      bannerImage:
        "https://braze-images.com/appboy/communication/assets/image_assets/images/642cb57fffb3180b8c80c73a/original.png?1680651647",
    },
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container-fluid">
          <div className=" slider_col margin_bottom">
            <div className="slider">
              <Row>
                <Col lg={12}>
                  <Carousel>
                    {" "}
                    {dataslider &&
                      dataslider.length > 0 &&
                      dataslider?.map((item, index) => {
                        return (
                          <Carousel.Item interval={1000}>
                            {/* <Col lg={6}>
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
                        </Col> */}
                            {/* <p>{item.name}</p> */}
                            <div className="margin_bottom">
                              <img
                                className="slide_img"
                                src={`http://localhost:5000/slider/${item?.images[0]}`}
                                alt="Second sslide"
                              />
                            </div>
                          </Carousel.Item>
                        );
                      })}
                  </Carousel>
                </Col>
              </Row>
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
                        {allcatgorydata &&
                          allcatgorydata?.slice(0, 6)?.map((e) => {
                            return (
                              <>
                                <Col lg={2} md={4} sm={4}>
                                  <Link
                                    className="carddecorationnone_cat"
                                    to={`/category/${e._id}`}
                                  >
                                    <Card className="cat_card_homep ">
                                      <div className="hoveron_arrow">
                                        <div className="top_catcard">
                                          <div className="pos_catimage">
                                            <img
                                              className="topcatimage_home"
                                              src={`http://localhost:5000/categoryimg/${e.images}`}
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
                              </>
                            );
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
                    <Col lg={4} md={4} sm={4}>
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
                    spaceBetween={10}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      480: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {categorydata &&
                      categorydata?.products?.map((item, index) => {
                        if (item?.category?.[0]?.category === "Electronics") {
                          return (
                            <SwiperSlide className="shopping_card" key={index}>
                              <Link
                                className="card_deco"
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
                                          : item?.thumbnail.split(":").length >
                                            1
                                          ? item?.thumbnail
                                          : `http://localhost:5000/uploads/${item.thumbnail}`
                                      }
                                    />
                                  </div>
                                  <Card.Body>
                                    <Card.Title className="crad_text">
                                      {item?.title}
                                    </Card.Title>

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
                          to={`/category/${"651e84c0ad6a72ae9d37db57"}`}
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
                    spaceBetween={10}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      480: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {data?.products?.map((e) => {
                      if (e?.category?.[0]?.category === "Home &Furniture") {
                        return (
                          <SwiperSlide className="shopping_card" key={e?.id}>
                            <Link
                              className="card_deco"
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
                                  <Card.Title className="crad_text">
                                    {e?.title}
                                  </Card.Title>

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
            <div className="my-2">
              <Row>
                <Col lg={4} md={6}>
                  <div className="homefashion_border">
                    <div className="d-flex justify-content-between ">
                      <h5>Men's Top Fashion</h5>
                      <AiFillRightCircle className="topcategoies_icon" />
                    </div>
                    <Row>
                      <Col lg={6} md={6}>
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
                      <Col lg={6} md={6}>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6}>
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
                      <Col lg={6} md={6}>
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
                <Col lg={4} md={6}>
                  <div className="homefashion_border">
                    <div className="d-flex justify-content-between ">
                      <h5>Women's Top Fashion</h5>
                      <AiFillRightCircle className="topcategoies_icon" />
                    </div>
                    <Row>
                      <Col lg={6} md={6}>
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
                      <Col lg={6} md={6}>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6}>
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
                      <Col lg={6} md={6}>
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
                <Col lg={4} md={12}>
                  <div className="homefashion_border">
                    <div className="sportscontent_align">
                      <div>
                        <h2>Stay Fit & Active</h2>
                      </div>
                      <div className="margin_bottom shop_roe">
                        <p>
                          Shop from our Fitness & Sports Equipment Collection
                        </p>
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
          <Scrolltotopbutton />
        </div>
      )}
    </>
  );
};

export default Home;
