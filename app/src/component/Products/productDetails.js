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
import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { updateProduct } from "../../Redux/action/updateProductAction";
import { addToCartAction } from "../../Redux/action/addToCartAction";
import { getUserId } from "../../utils/auth";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const userData = getUserId();

  console.log(userData, "useeeeeeeeeeeeeee");

  //   const details = useSelector((state) => state.slicedetails.listdata);

  const productDetail = useSelector(
    (state) => state.updateProductData.listdata
  );

  const cartData = useSelector((state) => state?.addToCartFile);
  console.log(cartData, "kkk");

  const [imageState, setImageState] = useState();
  console.log(productDetail, "datas");

  // images

  useEffect(() => {
    dispatch(updateProduct({ _id }));
  }, [_id]);
  console.log(productDetail, "productDetailproductDetail");
  const cartClick = () => {
    let apiObject = {
      productid: productDetail._id,
      userid: userData.id,
      quantity: 1,
    };
    dispatch(addToCartAction(apiObject));
    console.log(cartData, "added to cart");
  };

  return (
    <>
      <div className="container mainrowdata">
        <Row className="">
          <Col>
            <Card>
              <div>
                <Card.Img
                  src={
                    imageState
                      ? imageState
                      : productDetail?.images
                      ? productDetail?.images[0]
                      : ""
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
                            src={item}
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
                <Card.Title>
                  <h4>{productDetail.title}</h4>
                </Card.Title>
                <div className="main_imagecardte margin_bottom">
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
                </div>
                <Card.Text className="textrating margin_bottom">
                  <h5>{productDetail.description}</h5>
                </Card.Text>
                <Row>
                  <Col lg={6}>
                    {" "}
                    <Button className="addtocart_button" onClick={cartClick}>
                      <PiShoppingCartFill />
                      ADD TO CART
                    </Button>{" "}
                  </Col>
                  <Col lg={6}>
                    {" "}
                    <Button className="bynow_button">
                      <BsFillLightningFill /> BUY NOW
                    </Button>{" "}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <div>
              <Card className="Card_row">
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

                  <Card.Text>{productDetail.description}</Card.Text>
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
                    <p>
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
                    </p>
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
        </Row>
      </div>
    </>
  );
};

export default ProductDetails;
