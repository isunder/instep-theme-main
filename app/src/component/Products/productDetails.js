import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { BsTags } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { PiShoppingCartFill } from "react-icons/pi";
import { BsFillLightningFill } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [items, setItems] = useState([]);

  //   const details = useSelector((state) => state.slicedetails.listdata);

  const data = useSelector((state) => state.updateProductData.listdata);

  //   console.log(Simgledetails, "ggg");

  //   useEffect(() => {
  //     localStorage.setItem("items", JSON.stringify(details));
  //   }, [details]);

  //   useEffect(() => {
  //     dispatch(updateProduct({ id }));
  //   }, [id]);

  const [pinCode, setPincode] = useState("");
  const handlePinCodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handleCheckDelivery = () => {
    console.log("Checking delivery for pin code:", pinCode);
  };
  const handleBuyNow = () => {
    console.log("Buy Now");
  };

  return (
    <>
      <div className="container mainrowdata">
        <Row className="">
          <Col>
            <Card>
              <Card.Img className="topmain_imageview" src={data.thumbnail} />
              {data.images && (
              <>
               <img className="subphotof_main" src={data.images[0]} alt="" />
               <img className="subphotof_main" src={data.images[1]} alt="" />
               <img className="subphotof_main" src={data.images[2]} alt="" />
               <img className="subphotof_main" src={data.images[3]} alt="" />
               </>
               )}
              {data.images && (
                <>
                  {" "}
                  <div className="main_image">
                    {/* <div className="cat_div">
                      <Swiper
                        breakpoints={{
                          640: {
                            width: 640,
                            slidesPerView: 1,
                          },
                          768: {
                            width: 768,
                            slidesPerView: 2,
                          },
                        }}
                        spaceBetween={10}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                    <img className="imgdiv" src={data.images[0]} alt="" />
                         
                        </SwiperSlide>
                      </Swiper>
                    </div> */}
                    <img className="subphotof_main" src={data.images[0]} alt="" />
                    <img className="subphotof_main" src={data.images[1]} alt="" />
                    <img className="subphotof_main" src={data.images[2]} alt="" />
                    <img className="subphotof_main" src={data.images[3]} alt="" />
                  </div>
                </>
              )}
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text
                    className="textrating
"
                  >
                    Rating
                    <Badge pill bg="dark">
                      : {data.rating}
                    </Badge>
                  </Card.Text>
                  <Card.Text
                    className="textrating
"
                  >
                    Brand
                    <Badge pill bg="dark">
                      : {data.brand}
                    </Badge>
                  </Card.Text>
                  <Card.Text
                    className="textrating
"
                  >
                    Category
                    <Badge pill bg="dark">
                      : {data.category}
                    </Badge>
                  </Card.Text>
                </div>
                <Card.Text>{data.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Card.Text className="textrating">
                    Price:$
                    <Badge pill bg="dark">
                      {data.price}
                    </Badge>
                  </Card.Text>
                  <Card.Text className="textrating">
                    left stock:
                    <Badge pill bg="dark">
                      {data.stock}
                    </Badge>
                  </Card.Text>
                </div>

                <Row>
                  <Col>
                    {" "}
                    <Button variant="warning">
                      <PiShoppingCartFill />
                      ADD TO CART
                    </Button>{" "}
                  </Col>
                  <Col>
                    {" "}
                    <Button>
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
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <div>
                      <Badge pill bg="dark">
                        {data.rating}
                      </Badge>
                      stock left: {data.stock}
                    </div>
                    Extra ₹ {data.discountPercentage}..Off
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    <h1>₹ {data.price}</h1>
                  </Card.Subtitle>

                  <Card.Text>{data.description}</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">
                    <h6> Available offers</h6>

                    <p>
                      {" "}
                      <BsTags />
                      Bank Offer10% off on Axis Bank Credit Card and EMI
                      Transactions, up to ₹1000, on orders of ₹5,000 and
                      aboveT&C
                    </p>
                    <p>
                      {" "}
                      <BsTags />
                      Bank Offer5% off on Flipkart Axis Bank Credit Card and EMI
                      Trxns, up to ₹500, on orders of ₹5,000 and aboveT&C
                    </p>
                    <p>
                      {" "}
                      <BsTags />
                      Bank Offer10% Instant Discount on Citi Credit Card and EMI
                      Txns, up to ₹1,000 on orders of ₹5,000 and aboveT&C
                    </p>
                    <p>
                      {" "}
                      <BsTags />
                      Special PriceGet extra ₹15901 off (price inclusive of
                      cashback/coupon)T&C
                    </p>
                    <p>View 10 more offers</p>

                    <div>
                      <h5>Delivery</h5> <CiLocationOn />
                      <input
                        type="text"
                        placeholder="  Enter Delivery Pincode
"
                      />
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
                    <p>General</p>
                  </thead>
                  <tbody>
                    <tr>
                      <td>brand</td>
                      <td>{data.brand}</td>
                    </tr>
                    <tr>
                      <td>stock</td>
                      <td>{data.stock}</td>
                    </tr>
                    <tr>
                      <td>{data.category}</td>
                      <td>{data.title}</td>
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
}
