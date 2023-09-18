import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import span from "react-bootstrap/Badge";
import { BsTags } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { PiShoppingCartFill } from "react-icons/pi";
import { BsFillLightningFill } from "react-icons/bs";
import Table from "react-bootstrap/Table";
// import { Carousel } from "react-bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";
import { updateProduct } from "../../../Redux/action/updateProductAction";
import { addToCartAction } from "../../../Redux/action/addToCartAction";
import { getUserId } from "../../../utils/auth";
import { productAction } from "../../../Redux/action/productAction";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const userData = getUserId();

  console.log(userData, "useeeeeeeeeeeeeee");

  //   const details = useSelector((state) => state.slicedetails.listdata);

  const productDetail = useSelector(
    (state) => state.updateProductData.listdata
  );
  console.log(productDetail, "www");

  // const Check = useSelector((state) => state?.updateProductData);
  // console.log(Check, "check");

  const cartData = useSelector((state) => state?.addToCartFile);
  console.log(cartData, "kkk");

  const [imageState, setImageState] = useState();
  // console.log(productDetail?.images[0][0], "datas");

  // images

  useEffect(() => {
    dispatch(updateProduct({ _id }));
  }, [_id]);
  console.log(productDetail, "productDetailproductDetail");
  const cartClick = (asd) => {
    let apiObject = {
      productid: productDetail._id,
      userid: userData.id,
      quantity: 1,
    };
    dispatch(addToCartAction(apiObject));
    console.log(cartData, "added to cart");
  };

  console.log(productDetail?.images, `wopjveddwo`);

  console.log(imageState, "wioeiwj");
  return (
    <>
      <div className="container mainrowdata">
        <Row className="">
          <Col lg={2}></Col>
          <Col lg={4}>
            <Card className="shoppingcard_bor">
              <div>
                <Card.Img
                  // src={`http://localhost:5000/uploads/${imageState? imageState : (productDetail?.images?.length > 0 &&productDetail?.images[0])}`}
                  src={
                    imageState
                      ? imageState.split("http").length > 1
                        ? imageState
                        : `http://localhost:5000/uploads/${imageState}`
                      : productDetail?.images?.length > 0 &&
                        // productDetail?.images?.length[0] > 0 &&
                        (productDetail?.images[0].split("http").length > 1
                          ? productDetail?.images[0]
                          : `http://localhost:5000/uploads/${productDetail?.images[0]}`)
                  }
                  className="topmain_imageview"
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
                <Card.Title className="mb-5">
                  <h4>{productDetail.title}</h4>
                </Card.Title>
                {/* <div className="main_imagecardte margin_bottom">
                  <Card.Text className="textrating">
                    <p>
                      Rating{" "}
                      <span className="image_ratbracat">
                        : {productDetail.rating}
                      </span>
                    </p>
                  </Card.Text>
                  <Card.Text className="textrating">
                    <p>
                      {" "}
                      Brand
                      <span className="image_ratbracat">
                        : {productDetail.brand}
                      </span>
                    </p>
                  </Card.Text>
                  <Card.Text className="textrating">
                    <p>
                      {" "}
                      Category
                      <span className="image_ratbracat">
                        : {productDetail.category}
                      </span>
                    </p>
                  </Card.Text>
                  <Card.Text className="textrating">
                    <p>
                      left stock:
                      <span className="image_ratbracat">
                        {productDetail.stock}
                      </span>
                    </p>
                  </Card.Text>
                </div> */}
                <Row>
                  <Col lg={6}>
                    {" "}
                    <Button className="addtocart_button" onClick={cartClick}>
                      <div>
                        <PiShoppingCartFill className="buy_Addicon" />
                        ADD TO CART
                      </div>
                    </Button>{" "}
                  </Col>
                  <Col lg={6}>
                    {" "}
                    <Button className="bynow_button">
                      <BsFillLightningFill className="buy_Addicon" /> BUY NOW
                    </Button>{" "}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <div>
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
                      <span>Bank Offer10%</span> off on Axis Bank Credit Card
                      and EMI Transactions, up to ₹1000, on orders of ₹5,000 and
                      above
                      <span>T&C</span>
                    </p>
                    {/* <p>
                      {" "}
                      <BsTags className="validpffers_icon" />
                      <span>Bank Offer5%</span> off on Flipkart Axis Bank Credit
                      Card and EMI Trxns, up to ₹500, on orders of ₹5,000 and
                      above<span>T&C</span>
                    </p>
                    <p>
                      {" "}
                      <BsTags className="validpffers_icon" />
                      <span>Bank Offer10%</span> Instant Discount on Citi Credit
                      Card and EMI Txns, up to ₹1,000 on orders of ₹5,000 and
                      above<span>T&C</span>
                    </p> */}
                    <p>
                      {" "}
                      <BsTags className="validpffers_icon" />
                      <span>Special Price</span>Get extra ₹15901 off (price
                      inclusive of cashback/coupon)<span>T&C</span>
                    </p>
                    <p>View 10 more offers</p>

                    <div className="delivery_code">
                      <h5>Delivery</h5>
                      <div>
                        <CiLocationOn className="deliverylocationcode" />
                        <input
                          type="text"
                          placeholder="  Enter Delivery Pincode"
                          className="pincode_bar"
                        />
                      </div>
                    </div>
                  </Card.Subtitle>
                  <Card.Text>
                    <div className="d-flex justify-content-between mainpro_rightdescrip">
                      <h5 className="mx-2 ">Description</h5>
                      {productDetail.description}
                    </div>
                  </Card.Text>
                  {/* <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
              <Card>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <h4>Specifications</h4>
                    </tr>
                    {/* <p>General</p> */}
                  </thead>
                  <tbody>
                    <tr>
                      <td>brand</td>
                      <td>{productDetail.brand}</td>
                    </tr>
                    <tr>
                      <td>stock</td>
                      <td>{productDetail.stock}</td>
                    </tr>
                    <tr>
                      <td>{productDetail.category}</td>
                      <td>{productDetail.title}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetails;
