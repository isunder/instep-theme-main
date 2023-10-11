import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BsTags } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { PiShoppingCartFill } from "react-icons/pi";
import { BsFillLightningFill } from "react-icons/bs";
// import { updateProduct } from "../../../Redux/action/updateProductAction";
import { addToCartAction } from "../../../Redux/action/addToCartAction";
import { getUserId } from "../../../utils/auth";
import ReactImageMagnify from "react-image-magnify";
import { singleproduct } from "../../../Redux/action/getsingleProduct";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const userData = getUserId();
  const navigate = useNavigate();

  console.log(userData, "useeeeeeeeeeeeeee");

  //   const details = useSelector((state) => state.slicedetails.listdata);

  const productDetail = useSelector((state) => state.singleproduct?.listdata);
  console.log(productDetail, "www");

  // const Check = useSelector((state) => state?.updateProductData);
  // console.log(Check, "check");

  const cartData = useSelector((state) => state?.addToCartFile);
  console.log(cartData, "kkk");

  const [imageState, setImageState] = useState();
  // console.log(productDetail?.images[0][0], "datas");

  // images

  useEffect(() => {
    dispatch(singleproduct({ _id }));
  }, [_id]);
  console.log(productDetail, "productDetailproductDetail");
  console.log(productDetail._id, "hhhhhhhhhhh");
  const cartClick = (asd) => {
    let apiObject = {
      productid: productDetail._id,
      userid: userData.id,
      quantity: 1,
    };
    dispatch(addToCartAction(apiObject)).then((res) => {
      navigate("/addtocart");
    });
    console.log(cartData, "added to cart");
  };

  console.log(productDetail?.images, `wopjveddwo`);

  console.log(imageState, "wioeiwj");
  return (
    <>
      <div className="container mainrowdata">
        <Row>
          <Col className="singlecard_posit" lg={4}>
            <Card className="shoppingcard_bor">
              <div className="margin_bottom magni_fieralign">
                <ReactImageMagnify 
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      width: 400,
                      height: 400,
                      src: imageState
                        ? imageState.split("http").length > 1
                          ? imageState
                          : `http://localhost:5000/uploads/${imageState}`
                        : productDetail?.images?.length > 0 &&
                          // productDetail?.images?.length[0] > 0 &&
                          (productDetail?.images[0].split("http").length > 1
                            ? productDetail?.images[0]
                            : `http://localhost:5000/uploads/${productDetail?.images[0]}`),
                    },
                    largeImage: {
                      src: imageState
                        ? imageState.split("http").length > 1
                          ? imageState
                          : `http://localhost:5000/uploads/${imageState}`
                        : productDetail?.images?.length > 0 &&
                          // productDetail?.images?.length[0] > 0 &&
                          (productDetail?.images[0].split("http").length > 1
                            ? productDetail?.images[0]
                            : `http://localhost:5000/uploads/${productDetail?.images[0]}`),
                      width: 1800,
                      height: 1800,
                    },
                    enlargedImageContainerStyle: {
                      zIndex: 999,
                    },
                    enlargedImageContainerDimensions: {
                      width: 890,
                      height: 550,
                    },
                  }}
                />
              </div>
              {productDetail?.images && (
                <>
                  <div className="main_image">
                    {productDetail?.images?.map((item, index) => {
                      if (item) {
                        return (
                          <img
                            key={index}
                            className="subphotof_main"
                            src={
                              // Array.isArray(item) &&
                              item?.split("https").length > 1
                                ? item
                                : `http://localhost:5000/uploads/${item}`
                            }
                            onMouseEnter={() => setImageState(item)}
                            alt=""
                          />
                        );
                      }
                    })}
                  </div>
                </>
              )}
              <Card.Body>
                <Card.Text>
                  <div className="mainimg_button">
                    <div className="twobuttondiv">
                      {" "}
                      <Button
                        className="addtocart_button"
                        onClick={() => {
                          cartClick();
                        }}
                      >
                        <div>
                          <PiShoppingCartFill className="buy_Addicon" />
                          ADD TO CART
                        </div>
                      </Button>
                    </div>
                    <div className="twobuttondiv">
                      <Link to={"/deliverydetail"}>
                        <Button className="bynow_button">
                          <BsFillLightningFill className="buy_Addicon" /> BUY
                          NOW
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="shoppingcard_bor">
              <Card.Body>
                <Card.Title>
                  <h4>{productDetail.title}</h4>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <h5>Extra ₹ {productDetail.discountPercentage}..Off</h5>
                </Card.Subtitle>
                <Card.Subtitle className="mb-2">
                  <h1>₹ {productDetail.price}</h1>
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 discriptionoffers_product text-muted">
                  <h6> Available offers</h6>
                  <p>
                    {" "}
                    <BsTags className="validpffers_icon" />
                    <span>Bank Offer10%</span> off on Axis Bank Credit Card and
                    EMI Transactions, up to ₹1000, on orders of ₹5,000 and above
                    <span>T&C</span>
                  </p>
                  <p>
                    {" "}
                    <BsTags className="validpffers_icon" />
                    <span>Special Price</span>Get extra ₹15901 off (price
                    inclusive of cashback/coupon)<span>T&C</span>
                  </p>
                  <p>View 10 more offers</p>
                </Card.Subtitle>
                <div className="delivery_code margin_bottom">
                  <h5>Delivery</h5>
                  <div>
                    <CiLocationOn className="deliverylocationcode" />
                    <input
                      type="text"
                      placeholder="Enter Delivery Pincode"
                      className="pincode_bar"
                    />
                  </div>
                </div>
                <Card.Text>
                  <div className="d-flex ">
                    <h6 className=" ">Description:</h6>
                    <p className="mainpro_rightdescrip margin_bottom">
                      {productDetail.description}
                    </p>
                  </div>
                </Card.Text>
                <div className="d-flex ">
                  <h6>Highlights</h6>
                  <div className="d-flex px-5">
                    <ul className="specification">
                      <td>{productDetail?.brand?.[0]?.brand}</td>
                      <td>{productDetail?.category?.[0]?.category}</td>
                      <td>{productDetail?.subcategory?.[0]?.subcategory}</td>
                      <li>{productDetail.title}</li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetails;
