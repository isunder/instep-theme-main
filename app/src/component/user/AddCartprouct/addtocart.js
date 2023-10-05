import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { getUserId } from "../../../utils/auth";
import { cartinfo } from "../../../Redux/action/usercartinfo";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line, RiSubtractFill } from "react-icons/ri";
import { SiSpringsecurity } from "react-icons/si";
import {
  addToCartAction,
  removeFromCart,
} from "../../../Redux/action/addToCartAction";
import Modal from "react-bootstrap/Modal";

const AddToCartProduct = () => {
  const [quantity, setQuantity] = useState({});
  const [deleteState, SetDeleteState] = useState([]);

  const navigate = useNavigate();
  const userData = getUserId();
  const userLogin = localStorage.getItem("token");
  console.log(userData.id, "goplla");
  const dispatch = useDispatch();
  const myCartL = useSelector((state) => state?.cartdetails.listdata);
  console.log(myCartL, "dwiuek");
  const productClick = (_id) => {
    console.log(_id, "hh/ddhhjjjjjjjjjjj");
  };

  useEffect(() => {
    if (userData && userData.id) dispatch(cartinfo({ userid: userData.id }));
  }, []);

  const initialQuantities = [];

  const [quantities, setQuantities] = useState(initialQuantities);
  const onHandleClickPlus = (id) => {
    let apiObject = {
      productid: id,
      userid: userData?.id,
      quantity: 1,
    };
    dispatch(addToCartAction(apiObject)).then((res) => {
      console.log(res.payload.success, "dispstch");
      if (res.payload.success === true) {
        if (quantity[id]) {
          setQuantity({ ...quantity, [`${id}`]: quantity[id] + 1 });
        } else {
          setQuantity({ ...quantity, [`${id}`]: 1 });
        }
      }
    });
    console.log(quantity, "added to cart");
    console.log("goplaaaa");
  };

  const onHandleClickMinus = (id) => {
    let apiObject = {
      productid: id,
      userid: userData?.id,
      quantity: -1,
    };

    dispatch(addToCartAction(apiObject)).then((res) => {
      console.log(res.payload.success, "gopsoa");
      if (res.payload.success === true) {
        console.log("gaopaosojasjsajsnjas");
        if (quantity[id]) {
          setQuantity({ ...quantity, [`${id}`]: quantity[id] - 1 });
        } else {
          setQuantity({ ...quantity, [`${id}`]: -1 });
        }
      }
    });
  };
  console.log(quantity, "added to cart");

  const getTotalPrice = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = quantities?.reduce((accumulator, currentValue, index) => {
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
          (myCartL[index].discountpercentage / 100) *
          myCartL[index].price
        )?.toFixed(0);
      }, 0);
      console.log(count);
      return count;
    }
  };

  const getDiscountPercentage = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = quantities.reduce((accumulator, currentValue, index) => {
        return myCartL[index].discountpercentage;
      }, 0);
      console.log(count);
      return count;
    }
  };

  console.log(quantity, "fiwbeufbn");
  const handleClose = () => setShow(false);

  const clickMe = (id) => {
    console.log(id, "rahullllllll");
    dispatch(
      removeFromCart({ userId: userData?.id, productIdToRemove: id })
    ).then((res) => {
      SetDeleteState([...deleteState, id]);
      handleClose()
    });
  };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

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
                    }
                    if (!deleteState.includes(e?.productid)) {
                      return (
                        <>
                          <Col lg={2}>
                            <div>
                              <img
                                className="addtocart_img"
                                variant="top"
                                src={
                                  e?.productDetails[0]?.image
                                    ? e?.productDetails[0]?.image
                                    : e?.productDetails[0]?.thumbnail?.split(
                                        ":"
                                      ).length > 1
                                    ? e?.productDetails[0]?.thumbnail
                                    : `http://localhost:5000/uploads/${e?.productDetails[0]?.thumbnail}`
                                }
                                alt=""
                              />
                            </div>
                          </Col>
                          <Col lg={2}>
                            <div className="addtocart_title">
                              {e?.productDetails[0]?.title}
                            </div>
                          </Col>
                          <Col lg={2}>
                            <div className="addtocart_title">
                              <h5>
                                {" "}
                                ₹ {e?.productDetails[0]?.price?.toFixed(0)}
                              </h5>
                            </div>
                          </Col>
                          <Col lg={2}>
                            <div className="addcart_quantity">
                              <div
                                style={{ width: "25px" }}
                                className="subtract"
                              >
                                <span>
                                  <RiSubtractFill
                                    onClick={() => {
                                      onHandleClickMinus(e?.productid);
                                    }}
                                    style={
                                      e?.quantity +
                                        (quantity[e?.productid] || 0) ===
                                      1
                                        ? { display: "none" }
                                        : {}
                                    }
                                  />
                                </span>
                              </div>
                              <span className="quantityval_ue">
                                {/* {condition ? (true execute? fwef : ) : (fwfe ? fwefw :fwef)} */}
                                {quantity[e?.productid]
                                  ? e?.quantity + quantity[e?.productid]
                                  : e?.quantity}
                              </span>
                              <div
                                onClick={() => {
                                  onHandleClickPlus(e?.productid);
                                }}
                                className="add"
                              >
                                <span>
                                  <AiOutlinePlus />
                                </span>
                              </div>
                            </div>
                          </Col>
                          <Col lg={2}>
                            <div className="addtocart_title">
                              <h5>
                                ₹{" "}
                                {quantity[e?.productid]
                                  ? e?.productDetails[0]?.price?.toFixed(0) *
                                    (e?.quantity + quantity[e?.productid])
                                  : e?.productDetails[0]?.price?.toFixed(0) *
                                    e?.quantity}
                              </h5>
                            </div>
                          </Col>
                          <Col lg={2}>
                            <div className="addtocart_title">
                              <RiDeleteBin6Line
                                className="remove_cart"
                                onClick={handleShow}
                              />
                              <Modal
                                className="removerfromcart_modal"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                show={show}
                                onHide={handleClose}
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title>Remove Item</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  Are you sure you want to remove this item ?
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button
                                    className="cancelbut_removecart"
                                    variant="secondary"
                                    onClick={handleClose}
                                  >
                                    CANCEL
                                  </Button>
                                  <Button
                                    className="removebut_cart"
                                    variant="primary"
                                    onClick={() => {
                                      clickMe(e?.productDetails[0]?._id);
                                      // navigate("/addtocart");
                                    }}
                                  >
                                    REMOVE
                                  </Button>
                                </Modal.Footer>
                              </Modal>
                            </div>
                          </Col>
                        </>
                      );
                    }
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
          <Link to="/deliverydetail">
            <button className="placeorder_butcart">Place Order</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default AddToCartProduct;
