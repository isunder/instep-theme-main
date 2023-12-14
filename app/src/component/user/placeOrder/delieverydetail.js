import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { FaTruckLoading } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { BiSolidStarHalf } from "react-icons/bi";
import { getUserId } from "../../../utils/auth";
import { BsColumnsGap, BsPlusCircleFill, BsTags } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import {
  deliveryGetAction,
  deliveryaddress,
} from "../../../Redux/action/deliveryAddress";
import RadioInput from "./radioButton";
import { singleproduct } from "../../../Redux/action/getsingleProduct";
import { CiLocationOn } from "react-icons/ci";
import { paymentOrder } from "../../../Redux/action/paymentOrderAction";
// import { options } from "../../../../../api/router/razorpay";
import useRazorpay from "react-razorpay";
import { Afterorder } from "../../../Redux/action/orderSummary";

const Delieverydetail = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [showCol, setShowCol] = useState("login");
  const [imageState, setImageState] = useState();
  const [activeKey, setactiveKey] = useState(0);
  const [hidedata, setHidata] = useState("");
  const [razorPaymentId, setRazorPaymentId] = useState("");
  // const [formStateShow,setFormStateShow] = useState(null)
  const data = useSelector((state) => state?.deliveraddress?.listdata);
  console.log(data, "address");

  // const addressClick = (e) => {
  //   dispatch(deliveryaddress());
  //   console.log(e, "addressClick");
  // };

  const navigate = useNavigate();
  const userLogin = getUserId();
  console.log(userLogin, "userLogin");
  const dataId = userLogin.id;
  console.log(dataId, "dataId");

  const { _id } = useParams();
  const dispatch = useDispatch();
  const myCartL = useSelector((state) => state?.cartdetails.listdata);
  console.log(_id, "gggggg");

  const addressdata = useSelector(
    (state) => state?.deliveryaddressget?.listdata?.data
  );
  console.log(addressdata, "addressdata");

  const getTotalPrice = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = myCartL?.reduce((accumulator, currentValue, index) => {
        return (
          accumulator +
          currentValue?.productDetails[0]?.price * currentValue?.quantity
        );
      }, 0);
    }

    return count;
  };
  console.log(myCartL, "mycartL");

  const getTotalDiscount = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = myCartL?.reduce((accumulator, currentValue, index) => {
        let discountprice =
          (currentValue?.productDetails[0]?.discountpercentage / 100) *
          currentValue?.productDetails[0]?.price *
          currentValue?.quantity;
        console.log(discountprice, "disc");
        return accumulator + discountprice;
      }, 0);

      return count;
    }
  };

  const getDiscountPercentage = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = myCartL?.reduce((accumulator, currentValue, index) => {
        console.log(
          currentValue?.productDetails[0]?.discountpercentage,
          "fwkoejoiwejl"
        );
        return (
          accumulator + currentValue?.productDetails[0]?.discountpercentage
        );
      }, 0);

      console.log(count / myCartL?.length, "ekrfioejroij");
      return count / myCartL?.length;
    }
  };
  useEffect(() => {
    dispatch(
      deliveryGetAction({
        userID: dataId,
      })
    ).then((res) => {
      // console.log(res,'fiwihojel')
      if (res && res.payload && res.payload.success) {
        console.log(res, "fwioenlk");
        setFormVisible(false);
      } else {
        setFormVisible(true);
      }
    });
  }, [dataId]);

  const [addressEventKey, setEventKey] = useState(null);

  const handleSubmit = (values) => {
    values.userID = dataId;

    dispatch(deliveryaddress(values)).then((res) => {
      if (res) {
        dispatch(deliveryGetAction(values));
      }
    });
    console.log(values, "values");
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.mobilenumber) {
      errors.mobilenumber = "Required";
    }
    if (!values.pincode) {
      errors.pincode = "Required";
    }
    if (!values.Locality) {
      errors.Locality = "Required";
    }
    if (!values.addresstype) {
      errors.addresstype = "Required";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.state) {
      errors.state = "Required";

      if (!values.landmark) {
        errors.landmark = "Required";
      }
      if (!values.AlternateNumber) {
        errors.AlternateNumber = "Required";
      }
    }
    return errors;
  };

  const defaultAccord = 1;
  // console.log(defaultAccord, "aaasmqxs");

  // For radio button

  const [selectedAddressType, setSelectedAddressType] = useState("Home");

  const handleRadioChange = (event, value) => {
    setSelectedAddressType(event.target.value);
    console.log(value, "valuess ", event);
  };

  const handleSubmitradio = (event) => {
    event.preventDefault();
    console.log("Selected address type:", selectedAddressType);

    // You can perform further actions or submit the data to an API here
  };

  const dData = useSelector((state) => state?.singleproduct?.listdata);
  console.log(dData?._id, "dDatadData");

  useEffect(() => {
    dispatch(singleproduct({ _id }));
  }, [_id]);

  const deliverClick = (e) => {
    if (addressdata) {
      setactiveKey(2);
    } else if (!addressdata) {
      setactiveKey();
    }
    console.log(e, "eeeeee");
  };

  const handleChange = (e) => {
    console.log(e, "aaasss");
  };

  const order = useSelector((state) => state?.paymentorderdata?.listdata);

  console.log(order, "orderdata");
  console.log(order?.data?.order?.amount, "orderdatasa");

  let paymentDetails = {};

  const [Razorpay, isLoaded] = useRazorpay();

  const handlePayment = useCallback(() => {
    const load = { amount: dData?.price };
    // console.log(load, "load");
    dispatch(paymentOrder(load)).then((res) => {
      console.log(res, "paymentid");
      const paymentes = res.razorpay_payment_id;
      console.log(paymentes, "paymentes");
    });
  }, [dispatch, order, dData]);

  if (order) {
    const orderAmount = order?.data?.order?.amount;
    if (orderAmount) {
      const options = {
        key: "rzp_test_Nfb5anftyihnMA",
        amount: orderAmount,
        currency: "INR",
        name: "Instep Cart",
        description: "Test Transaction",
        image:
          "https://insteptechnologies.com/wp-content/uploads/2022/04/main-logo.png",
        order_id: order?.data?.id,
        // handler: (res) => {
        //   console.log(res, "sdfghjdfghj");
        // },

        // handler: function (res) {
        //   console.log("Paymentsuccess:", res.razorpay_payment_id);

        //   // Extracting payment details from the response object
        //   const paymentStatus = res.razorpay_payment_id
        //     ? "paid-payment"
        //     : "payment-failed";
        //   const orderId = res.razorpay_order_id;
        //   const amount = res.razorpay_payment_amount;

        //   console.log("Paymentstatus:", paymentStatus);
        //   console.log("OrderID:", orderId);
        //   console.log("Amount:", amount);

        //   // Here you can dispatch an action or perform further processing with the payment details
        // },

        handler: function (res) {
          console.log("Payment success:", res);
          const orderid = res.razorpay_payment_id;
          console.log(orderid, "orderidorderid");
          setRazorPaymentId(orderid);

          // Storing payment details in the paymentDetails variable
          paymentDetails = {
            paymentStatus: res.razorpay_payment_id
              ? "paid-payment"
              : "payment-failed",
            orderId: res.razorpay_order_id,
            amount: res.razorpay_payment_amount,
            // ... add other details as needed
          };

          console.log("Payment status:", paymentDetails.paymentStatus);
          console.log("Order ID:", paymentDetails.orderId);
          console.log("Amount:", paymentDetails.amount);

          // Here you can dispatch an action or perform further processing with the payment details
        },

        prefill: {
          name: "Amit",
          email: "amit71instep@gmail.com",
          contact: "7973114358",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    }
  }
  console.log("Paymentdetails:", paymentDetails);
  const payloads = {
    userid: dataId,
    deliveryAddress: addressdata,
    amount: order?.data?.order?.amount,
    payment: razorPaymentId,
    productID: dData?._id,
    quantity: 1,
  };
  if (razorPaymentId && payloads) {
    console.log(payloads, "payloads");
    dispatch(Afterorder(payloads));
  }
  useEffect(() => {
    if (isLoaded) {
      handlePayment();
    }
  }, [isLoaded, handlePayment]);

  useEffect(() => {
    if (addressdata && addressdata?.length === 1) {
      setactiveKey(2);
      // address accordion
    } else if (!addressdata || (addressdata && addressdata?.length > 1)) {
      setactiveKey(1);
    }
  }, [addressdata]);
  return (
    <>
      <div className="container">
        <div className=" slider_col margin_bottom">
          <Accordion
            activeKey={activeKey}
            onSelect={(e) => setactiveKey(e)}
          // defaultActiveKey={useMemo(()=>eventKeyHandle(),[addressdata])}
          >
            {/* <Accordion defaultActiveKey={1}> */}
            <Row>
              <Col lg={9}>
                <div className=" margin_bottom">
                  <Accordion.Item eventKey={0}>
                    <Accordion.Header>
                      <div className="loginmain_align ">
                        <div className="">
                          <div className="d-flex mx-2">
                            <div className="logindetail">1</div>
                            <p>LOGIN</p>
                            <p>
                              <TiTick className="logindetail_icon" />
                            </p>
                          </div>
                          <div className="individual_info">
                            <p>{userLogin.username}</p>
                            <p>Contact No.</p>
                          </div>
                        </div>
                        {/* <div>
                        <button
                          className="infochange_button"
                          value="change"
                          onClick={() => setShowCol("login")}
                        >
                          CHANGE
                        </button>
                      </div> */}
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col lg={6}>
                          <div className="individual_info login_contalign ">
                            <Link className="loginandsignout" to="./..">
                              Logout & Sign in to another account
                            </Link>
                            <button
                              value="continue checkout"
                              className="logincont"
                              onClick={() => setShowCol("delivery")}
                            >
                              CONTINUE CHECKOUT
                            </button>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div>
                            <p className="advantag_es my-2">
                              Advantage of our secure login
                            </p>
                            <p className="my-1">
                              <FaTruckLoading className="logindel" />
                              Easily Track Orders, Hassle free Returns
                            </p>
                            <p className="my-1">
                              <MdOutlineNotificationsActive className="logindel" />
                              Get Relevant Alerts and Recommendation
                            </p>
                            <p>
                              <BiSolidStarHalf className="logindel" />
                              Wishlist, Reviews, Ratings and more.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <Row>
                  <Col lg={12}>
                    <div className="margin_bottom">
                      <Accordion.Item eventKey={1}>
                        <Accordion.Header>
                          <div className="loginmain_align">
                            <div className="d-flex my-3">
                              <div className="logindetail">2</div>
                              <div className="d-flex mx-2">
                                <p>DELIVERY ADDRESS</p>
                              </div>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* <div className="formalign"> */}
                          {/* <div className="d-flex  margin_bottom">
                              <MdRadioButtonChecked className="logindetail_icon" />
                              <p>ADD A NEW ADDRESS</p>
                            </div>
                            <div className=" margin_bottom">
                              <button
                                value="use my current location"
                                className="addresslocation"
                              >
                                use my current location
                              </button>
                            </div> */}
                          {addressdata &&
                            addressdata?.map((e) => {
                              console.log(e, "mnsdnsfnsj");
                              return (
                                <>
                                  <div className="d-flex mb-3 ">
                                    <div className="fdsfdsf">
                                      <input
                                        className="form-check-input hello"
                                        type="radio"
                                        name="addresstype"
                                        value="Home"
                                        id="flexRadioDefault1"
                                        checked={selectedAddressType === "Home"}
                                        onChange={() => handleRadioChange(e)}
                                      />
                                    </div>
                                    <div>
                                      <div className="selectadressdetail">
                                        <p>{e.name}</p>
                                        <div>{e.addresstype}</div>
                                        <p>{e.mobilenumber}</p>
                                        {/* {e.AlternateNumber} */}
                                      </div>
                                      <div className="bottomdivaddress">
                                        <p>{e.address}</p>
                                        <p>{e.pincode}</p>,<p>{e.landmark}</p>,
                                        <p>{e.Locality}</p>
                                        <p>{e.state}</p>,
                                      </div>
                                      <button
                                        className="readbuttommore mt-2"
                                        onClick={() => deliverClick()}
                                      >
                                        Delivery Here
                                      </button>
                                    </div>
                                  </div>
                                  {/* <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="addresstype"
                                      value="Home"
                                      id="flexRadioDefault1"
                                      checked={selectedAddressType === "Home"}
                                      onChange={handleRadioChange}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault1"
                                    >
                                      Home (All day delivery)
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="addresstype"
                                      value="Work"
                                      id="flexRadioDefault2"
                                      checked={selectedAddressType === "Work"}
                                      onChange={handleRadioChange}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault2"
                                    >
                                      Work (Delivery between 10 AM-5 PM)
                                    </label>
                                    <span>hlo baby</span>
                                  </div>
                                  <button type="submit">Submit</button> */}
                                </>
                              );
                            })}
                          <form onSubmit={handleSubmitradio}></form>
                          {isFormVisible && (
                            <Form
                              onSubmit={handleSubmit}
                              validate={validate}
                              render={({
                                handleSubmit,
                                form,
                                submitting,
                                pristine,
                                values,
                              }) => (
                                <form onSubmit={handleSubmit}>
                                  <div className="adsressmaindiv_top margin_bottom">
                                    <Field name="name">
                                      {({ input, meta }) => (
                                        <div className="fields">
                                          <input
                                            {...input}
                                            type="text"
                                            placeholder="Name"
                                            className="inputfiels_place"
                                          />
                                          {meta.error && meta.touched && (
                                            <span>{meta.error}</span>
                                          )}
                                        </div>
                                      )}
                                    </Field>
                                    <Field name="mobilenumber">
                                      {({ input, meta }) => (
                                        <div className="fields">
                                          <input
                                            {...input}
                                            type="number"
                                            placeholder="10-digit mobile number"
                                            className="inputfiels_place"
                                          />
                                          {meta.error && meta.touched && (
                                            <span>{meta.error}</span>
                                          )}
                                        </div>
                                      )}
                                    </Field>
                                  </div>
                                  <div className="adsressmaindiv_top margin_bottom">
                                    <Field name="pincode">
                                      {({ input, meta }) => (
                                        <div className="fields">
                                          <input
                                            {...input}
                                            type="number"
                                            placeholder="pincode"
                                            className="inputfiels_place"
                                          />
                                          {meta.error && meta.touched && (
                                            <span>{meta.error}</span>
                                          )}
                                        </div>
                                      )}
                                    </Field>
                                    <Field name="Locality">
                                      {({ input, meta }) => (
                                        <div className="fields">
                                          <input
                                            {...input}
                                            type="text"
                                            placeholder="locality"
                                            className="inputfiels_place"
                                          />
                                          {meta.error && meta.touched && (
                                            <span>{meta.error}</span>
                                          )}
                                        </div>
                                      )}
                                    </Field>
                                  </div>

                                  <Field name="address">
                                    {({ input, meta }) => (
                                      <div className="addressbottommain margin_bottom">
                                        <input
                                          {...input}
                                          type="text"
                                          placeholder="address"
                                          className="addressmaininput"
                                        />
                                        {meta.error && meta.touched && (
                                          <span>{meta.error}</span>
                                        )}
                                      </div>
                                    )}
                                  </Field>
                                  <div className="adsressmaindiv_top margin_bottom">
                                    <Field name="state">
                                      {({ input, meta }) => (
                                        <div className="fields">
                                          <input
                                            {...input}
                                            type="text"
                                            placeholder="City/District/Town"
                                            className="inputfiels_place"
                                          />
                                          {meta.error && meta.touched && (
                                            <span>{meta.error}</span>
                                          )}
                                        </div>
                                      )}
                                    </Field>
                                  </div>
                                  <div className="adsressmaindiv_top margin_bottom">
                                    <Field name="landmark">
                                      {({ input, meta }) => (
                                        <div className="fields">
                                          <input
                                            {...input}
                                            type="text"
                                            placeholder="landmark"
                                            className="inputfiels_place"
                                          />
                                          {meta.error && meta.touched && (
                                            <span>{meta.error}</span>
                                          )}
                                        </div>
                                      )}
                                    </Field>

                                    <Field name="AlternateNumber">
                                      {({ input, meta }) => (
                                        <div className="fields">
                                          <input
                                            {...input}
                                            type="number"
                                            placeholder="Alternate phone (optinal)"
                                            className="inputfiels_place"
                                          />
                                          {meta.error && meta.touched && (
                                            <span>{meta.error}</span>
                                          )}
                                        </div>
                                      )}
                                    </Field>
                                  </div>

                                  <p>Address Type</p>
                                  <div className="delivery_place margin_bottom">
                                    <div className="form-check">
                                      <Field
                                        name="addresstype"
                                        type="radio"
                                        value="Home"
                                        id="flexRadioDefault1"
                                        component={RadioInput}
                                        label="Home (All day delivery)"
                                      />
                                    </div>
                                    <div className="form-check">
                                      <Field
                                        name="addresstype"
                                        type="radio"
                                        value="Work"
                                        id="flexRadioDefault2"
                                        component={RadioInput}
                                        label="Work (Delivery between 10 AM-5 PM)"
                                      />
                                    </div>
                                  </div>
                                  <button
                                    type="submit"
                                    value="use my current location"
                                    className="addresslocation"
                                  >
                                    SAVE AND DELIVER HERE
                                  </button>
                                </form>
                              )}
                            />
                          )}

                          <Row>
                            <Col>
                              <div
                                className="addnew_address"
                                onClick={() => setFormVisible(!isFormVisible)}
                              >
                                <div>
                                  <BsPlusCircleFill className="logindetail_icon" />
                                </div>
                                <div>
                                  <p>Add New</p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>
                    </div>
                    <div className=" margin_bottom">
                      <Accordion.Item
                        eventKey={2}
                        onChange={() => handleChange()}
                      >
                        <Accordion.Header>
                          <div id="collapseOne" className="loginmain_align">
                            <div className="d-flex my-3">
                              <div className="logindetail">3</div>
                              <div className="d-flex mx-2">
                                <p>ORDER SUMMARY</p>
                              </div>
                            </div>
                          </div>
                        </Accordion.Header>

                        <Accordion.Body>
                          <Row>
                            <Col lg={4}>
                              <img
                                className="subcatkitchen_image"
                                variant="top"
                                // src={item?.image || item?.thumbnail}
                                src={
                                  dData.thumbnail
                                    ? `http://localhost:5000/uploads/${dData.thumbnail}`
                                    : ""
                                }
                                alt=""
                              />
                            </Col>
                            <Col lg={8}>
                              <Card className="shoppingcard_bor">
                                <Card.Body>
                                  <Card.Title>
                                    <h4>{dData.title}</h4>
                                  </Card.Title>
                                  <Card.Subtitle className="mb-2 text-muted">
                                    <h5>
                                      Extra ₹ {dData.discountPercentage}..Off
                                    </h5>
                                  </Card.Subtitle>
                                  <Card.Subtitle className="mb-2">
                                    <h1>₹ {dData.price}</h1>
                                  </Card.Subtitle>
                                  {/* <Card.Subtitle className="mb-2 discriptionoffers_product text-muted">
                                    <h6> Available offers</h6>
                                    <p>
                                      {" "}
                                      <BsTags className="validpffers_icon" />
                                      <span>Bank Offer10%</span> off on Axis
                                      Bank Credit Card and EMI Transactions, up
                                      to ₹1000, on orders of ₹5,000 and above
                                      <span>T&C</span>
                                    </p>
                                    <p>
                                      {" "}
                                      <BsTags className="validpffers_icon" />
                                      <span>Special Price</span>Get extra ₹15901
                                      off (price inclusive of cashback/coupon)
                                      <span>T&C</span>
                                    </p>
                                    <p>View 10 more offers</p>
                                  </Card.Subtitle> */}
                                  {/* <div className="delivery_code margin_bottom">
                                    <h5>Delivery</h5>
                                    <div>
                                      <CiLocationOn className="deliverylocationcode" />
                                      <input
                                        type="text"
                                        placeholder="Enter Delivery Pincode"
                                        className="pincode_bar"
                                      />
                                    </div>
                                  </div> */}
                                  <Card.Text>
                                    <div className="d-flex ">
                                      <h6 className=" ">Description:</h6>
                                      <p className="mainpro_rightdescrip margin_bottom">
                                        {dData.description}
                                      </p>
                                    </div>
                                  </Card.Text>
                                  <div className="d-flex ">
                                    <h6>Highlights</h6>
                                    <div className="d-flex px-5">
                                      <ul className="specification">
                                        <td>{dData?.brand?.[0]?.brand}</td>
                                        <td>
                                          {dData?.category?.[0]?.category}
                                        </td>
                                        <td>
                                          {dData?.subcategory?.[0]?.subcategory}
                                        </td>
                                        <li>{dData.title}</li>
                                      </ul>
                                    </div>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>
                    </div>
                    {/* <div className="borderforall_detail"> */}

                    {/* </div> */}
                    {/* <Row>
                      <Col lg={12}>
                        <div
                          className="addnew_address"
                          onClick={() => {
                            setShowCol("delivery");
                          }}
                        >
                          {/* <div>
                            <BsPlusCircleFill className="logindetail_icon" />
                          </div> */}
                    <div className="orderconfirmationmaindiv">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="logindetail">4</div>
                        <div className="ordercon-email mx-2">
                          ORDER CONFIRMATION EMAIL <space />
                          <span>{userLogin?.userEmail}</span>
                        </div>
                      </div>
                      <div>
                        <Button
                          className="paymentContinue_button"
                          onClick={(e) => handlePayment()}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
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
                      {getDiscountPercentage()?.toFixed(0)}%
                    </span>
                  </div>
                  <div className="d-flex justify-content-between margin_bottom addcart_delivery">
                    <p className="totalamountright_">Delivery Charges</p>
                    <p>-----------</p>
                  </div>
                  <div className="d-flex justify-content-between margin_bottom addcart_delivery">
                    <h5>Total Amount</h5>
                    <p>₹{getTotalPrice() - getTotalDiscount()?.toFixed(0)}</p>
                  </div>
                  <h6 className="discountpercentage_">
                    Your Will save ₹{getTotalDiscount()?.toFixed(0)} on this
                    order
                  </h6>
                  <div></div>
                  {/* <div className="securityline">
                <SiSpringsecurity className="securepayment_icon" />
                <div>
                  Safe and Secure Payments.Easy returns.100% Authentic products.
                </div>
              </div> */}
                </div>
              </Col>
            </Row>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Delieverydetail;
