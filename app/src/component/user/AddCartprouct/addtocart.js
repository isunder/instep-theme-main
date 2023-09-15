import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { myCartList } from "../../../Redux/action/getProductDetailAction";
import { getUserId } from "../../../utils/auth";
import { cartinfo } from "../../../Redux/action/usercartinfo";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { SiSpringsecurity } from "react-icons/si";

const AddToCartProduct = () => {
  const userData = getUserId();
  const userLogin = localStorage.getItem("token");
  const dispatch = useDispatch();
  const myCartL = useSelector((state) => state?.addToCartFile?.mycart);
  console.log(myCartL, "dwiuek");
  const productClick = (_id) => {
    console.log(_id, "hh/ddhhjjjjjjjjjjj");
    // dispatch(updateProduct({ _id }));
  };

  useEffect(() => {
    if (userData && userData.id) dispatch(myCartList({ userid: userData.id }));
    // dispatch(myCartList);
    // dispatch(cartinfo());
  }, []);

  const initialQuantities = [];

  const [quantities, setQuantities] = useState(initialQuantities);

  const quantityAdd = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = (updatedQuantities[index] || 0) + 1;
    setQuantities(updatedQuantities);
  };

  const quantitySubtract = (index) => {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  };

  const getTotalPrice = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = quantities.reduce((accumulator, currentValue, index) => {
        return accumulator + currentValue * myCartL[index].price;
      }, 0);
    }
    return count;
  };

  const getTotalDiscount = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = quantities.reduce((accumulator, currentValue, index) => {
        return (
          (myCartL[index].discountPercentage / 100) *
          myCartL[index].price
        ).toFixed(0);
      }, 0);
      console.log(count);
      return count;
    }
  };

  const getDiscountPercentage = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = quantities.reduce((accumulator, currentValue, index) => {
        return myCartL[index].discountPercentage;
      }, 0);
      console.log(count);
      return count;
    }
  };

  return (
    <>
      <div className="container slider_col">
        <Row>
          <Col lg={9}>
            <div className="hide_addtocart">
              <Row>
                <Col lg={2} className="addtocart_padding ">
                  <div className="addtocarthead ">
                    <p className="addhead_startdiv">Image</p>
                  </div>
                </Col>
                <Col lg={2} className="addtocart_padding">
                  <div className="addtocarthead">
                    {" "}
                    <p>Product Name</p>
                  </div>
                </Col>
                <Col lg={2} className="addtocart_padding">
                  <div className="addtocarthead">
                    <p>U. Price</p>
                  </div>
                </Col>
                <Col lg={2} className="addtocart_padding">
                  <div className="addtocarthead">
                    <p>Quantity</p>
                  </div>
                </Col>
                <Col lg={2} className="addtocart_padding">
                  <div className="addtocarthead">
                    <p>T. Price</p>
                  </div>
                </Col>
                <Col lg={2} className="addtocart_padding">
                  <div className="addtocarthead ">
                    <p className="addhead_enddiv">Action</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={9}>
            <div className="addtocartpro_duct">
              <Row>
                {myCartL &&
                  myCartL?.map((e, index) => {
                    console.log(e, "adasdasdasdasdasda");
                    if (e.image) {
                      // console.log(e,'jjjjjjjjjjjjjj')
                    }
                    return (
                      <>
                        {/* <Link
                    className="card_deco"
                    to={`/productdetail/${e._id}`}
                    onClick={() => productClick(e?._id)}
                  > */}

                        <Col lg={2}>
                          <div>
                            <img
                              className="addtocart_img"
                              variant="top"
                              src={
                                e?.image
                                  ? e?.image
                                  : e?.thumbnail.split(":").length > 1
                                  ? e?.thumbnail
                                  : ""`http://localhost:5000/uploads/${e.thumbnail}`
                              }
                              alt=""
                            />
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div className="addtocart_title">{e?.title}</div>
                        </Col>
                        <Col lg={2}>
                          <div className="addtocart_title">
                            <h5> ₹ {e?.price.toFixed(0)}</h5>
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div className="addcart_quantity">
                            <div className="subtract">
                              <span onClick={() => quantitySubtract(index)}>
                                <RiSubtractFill />
                              </span>
                            </div>
                            <span className="quantityval_ue">
                              {quantities[index]}
                            </span>
                            <div className="add">
                              <span onClick={() => quantityAdd(index)}>
                                <AiOutlinePlus />
                              </span>
                            </div>  
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div className="addtocart_title">
                            <h5>
                              ₹ {e?.price.toFixed(0) * quantities[index] || 0}
                            </h5>
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div className="addtocart_title">
                            <RxCross1 />
                          </div>
                        </Col>
                        {/* </Link> */}
                      </>
                    );
                  })}
              </Row>
            </div>
          </Col>
          {/* <button onClick={handleClick}>Add to Cart</button> */}
          <Col lg={3}>
            <div className="rightpricedetail margin_bottom">
              <div className="addcartpricede_tail margin_bottom ">
                <h5>PRICE DETAIL</h5>
              </div>
              <div className="d-flex justify-content-between  margin_bottom">
                <p className="totalamountright_">Price</p>
                <p>₹{getTotalPrice()}</p>
              </div>
              <div className="d-flex justify-content-between margin_bottom">
                <p className="totalamountright_">Discount</p>
                <span className="discountpercentage_">
                  {getDiscountPercentage()}%
                </span>
              </div>
              <div className="d-flex justify-content-between margin_bottom addcart_delivery">
                <p className="totalamountright_">Delivery Charges</p>
                <p>-----------</p>
              </div>
              <div className="d-flex justify-content-between margin_bottom addcart_delivery">
                <h5>Total Amount</h5>
                <p>₹{getTotalPrice() - getTotalDiscount()}</p>
              </div>
              <h6 className="discountpercentage_">
                Your Will save ₹{getTotalDiscount()} on this order
              </h6>
              <div></div>
              <div className="securityline">
                <SiSpringsecurity className="securepayment_icon" />
                <div>
                  Safe and Secure Payments.Easy returns.100% Authentic products.
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="plceorderbutton_cart col-lg-9">
          <button className="placeorder_butcart">Place Order</button>
        </div>
      </div>
    </>
  );
};
export default AddToCartProduct;
