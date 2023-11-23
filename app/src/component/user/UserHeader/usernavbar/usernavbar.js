import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Accordion, Col, Row } from "react-bootstrap";
import { React, useEffect, useState } from "react";
import {
  getProductAction,
  myCartList,
} from "../../../../Redux/action/getProductDetailAction";
import { getUserId } from "../../../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiTwotoneHeart } from "react-icons/ai";
import { BiLogOut, BiSearch, BiSolidPurchaseTag } from "react-icons/bi";
import { MdAccountCircle, MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { searchAction } from "../../../../Redux/action/searchProductAction";
import { allCategoryList } from "../../../../Redux/action/getCategoryAction";
import { cartinfo } from "../../../../Redux/action/usercartinfo";

const Usernavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const userData = getUserId();
  console.log(userData);

  const userLogin = localStorage.getItem("token");

  const mycart = useSelector((selectCart) => selectCart?.addToCartFile?.mycart);

  useEffect(() => {
    if (userData?.id) {
      dispatch(myCartList({ userid: userData.id }));
    }
  }, [userData?.id]);

  const SignClick = (e) => {
    navigate("/signin");
  };

  const logoutClick = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };

  const filterdata = useSelector(
    (state) => state?.filtercategoryData?.listdata
  );

  console.log(filterdata, "filterdatafilterdata");

  useEffect(() => {
    // dispatch(filterByCategory());
    if (userData && userData.id) {
      dispatch(cartinfo({ userid: userData.id })).then((res) => {
        console.log("TRIGGERED", res);
      });
    }
    dispatch(getProductAction());
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlehome = () => {
    navigate("/");
    setShow(false);
  };
  const handlecategory = (e) => {
    navigate(`/category/${e._id}`);
    setShow(false);
  };

  const handleProducts = () => {
    navigate("/allproduct");
    setShow(false);
  };
  const handleAboutUs = () => {
    navigate("/aboutus");
    setShow(false);
  };

  const handleSearch = () => {
    dispatch(searchAction({ name: searchQuery }));
    navigate("/search");
    setSearchQuery("");
  };
  const myCartL = useSelector((state) => state?.cartdetails?.listdata);
  console.log(myCartL, "dddddddddddddddd");
  const navcategorydata = useSelector(
    (state) => state?.getcategorylistdata?.listdata?.data
  );

  console.log(navcategorydata, "rahulllllll");

  useEffect(() => {
    dispatch(allCategoryList());
  }, []);

  return (
    <>
      <div className="nav_header">
        <div className="navbaenew_top">
          <div className="container">
            <Row>
              <Col lg={12}>
                <div className="subnewbar_nav">
                  <div className="intcrt">
                    <p>Welcome to our Instep Store</p>
                  </div>
                  <div className="intcrt">
                    <AiOutlineMail />
                    instepcart@mail.com
                  </div>
                  <div className="onmobiled-show">INSTEPCART</div>
                  <div className="subnewbar_content">
                    <div>
                      <div className="navbarhead_prop">
                        <Navbar.Brand>
                          <Link to="/" className="card_deco">
                            INSTEPCART
                          </Link>
                        </Navbar.Brand>
                      </div>
                    </div>

                    <div className="subnewbar_rightcont">
                      <div className="mid_navnewconent desktop_mid_navnewconent">
                        <div className="Nav_link">
                          Category
                          <div className="nav_Filter nav_filterchanges">
                            <ul>
                              <Row>
                                {navcategorydata &&
                                  navcategorydata?.map((item, index) => {
                                    console.log(
                                      item?.category,
                                      "qweqweqweqwewq"
                                    );

                                    return (
                                      <Col
                                        md={6}
                                        className="navfilter_colalign"
                                      >
                                        <Link
                                          className="navcat_deco"
                                          to={`/category/${item._id}`}
                                        >
                                          <li key={index}>{item?.category}</li>
                                        </Link>
                                      </Col>
                                    );
                                  })}
                              </Row>
                            </ul>
                          </div>
                        </div>
                        <Link
                          className="Nav_link carddecorationnone_cat"
                          to="/"
                        >
                          Home
                        </Link>
                        <Link
                          className="Nav_link carddecorationnone_cat"
                          to="/allproduct"
                        >
                          Products
                        </Link>
                      </div>
                      <div className="Nav_link">
                        <BiSearch className="navbar_new_icon" />
                        <div className="nav_Filter navsearch_alignnew">
                          <ul>
                            <div className="alignsearchbar_icon">
                              <li>
                                <input
                                  className="navsearch_input"
                                  placeholder="search"
                                  value={searchQuery}
                                  onChange={(e) =>
                                    setSearchQuery(e.target.value)
                                  }
                                />
                              </li>
                              <div>
                                <BiSearch
                                  className="seachunder_search_icon"
                                  onClick={handleSearch}
                                />
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>
                      <div className="Nav_link">
                        <MdAccountCircle className="navbar_new_icon" />
                        {userData && userLogin ? (
                          <div className="nav_Filter myprofile_align">
                            <ul>
                              <li>
                                <Link
                                  className=" carddecorationnone_cat color"
                                  to="/profile"
                                >
                                  <MdOutlineAccountCircle /> {userData.username}
                                </Link>
                              </li>
                              <li>
                                <BiSolidPurchaseTag /> My Orders
                              </li>
                              <li>
                                <AiTwotoneHeart /> My Wishlist
                              </li>
                              <li
                                onClick={() => logoutClick()}
                                className="sign_hover"
                              >
                                <BiLogOut />
                                Logout
                              </li>
                            </ul>
                          </div>
                        ) : (
                          <div className="nav_Filter myprofile_align">
                            <ul>
                              <li
                                onClick={() => SignClick()}
                                className="sign_hover"
                              >
                                <AiTwotoneHeart />
                                Sign In
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="Nav_link">
                        {userData && userLogin ? (
                          <Link to="/addtocart">
                            <HiOutlineShoppingCart className="navbar_new_icon" />
                            <span className="navbar_new_icon_length">
                              {console.log(myCartL, "TRIGGERED")}
                              {myCartL?.length > 0 ? myCartL?.length : 0}
                            </span>
                          </Link>
                        ) : (
                          <Link to="/signin">
                            <HiOutlineShoppingCart className="navbar_new_icon" />
                            <span className="navbar_new_icon_length"></span>
                          </Link>
                        )}
                      </div>
                      <Button
                        variant="primary"
                        className="usernav_toggle"
                        onClick={handleShow}
                      >
                        <svg
                          class="gb_i"
                          focusable="false"
                          viewBox="0 0 24 24"
                          width="50px"
                        >
                          <path
                            d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>INSTEPCART</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="usernav_canvascontent">
                      <div className="aboutus_toggle">
                        <h4>About Us </h4>
                        <p>
                          At [INSTEP], we are more than just an online store -
                          we are a destination for quality products, seamless
                          shopping experiences, and exceptional customer
                          service. Our journey began with a passion for bringing
                          convenience and choice to your fingertips, and we have
                          grown into a platform that caters to all your needs,
                          wants, and desires.
                        </p>
                        <Link to="/aboutus">
                          <Button
                            onClick={handleAboutUs}
                            className="slider_rightbutton"
                            variant="light"
                          >
                            About Us
                          </Button>
                        </Link>
                        <ul className="">
                          <h5 className=""> Mail Us:</h5>
                          <p>
                            instepcart@mail.com <br />
                          </p>
                        </ul>
                        <ul>
                          <h5> Registered Office Address:</h5>
                          <p>
                            Tricity Plaza, Office No. 14
                            <br />
                            Ground, Peer Muchalla <br />
                            Zirakpur, Punjab 140603
                          </p>
                          <p className="tele">
                            Telephone: <span>000-000-0000</span>
                          </p>
                        </ul>
                      </div>
                      <div className="mid_navnewconent mid_offcanvas mobile_mid_navnewconent">
                        <div className="Nav_link">
                          <Accordion defaultActiveKey={[""]} alwaysOpen>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>Category</Accordion.Header>
                              <Accordion.Body>
                                {navcategorydata &&
                                  navcategorydata?.map((e) => {
                                    return (
                                      <>
                                        <div
                                          className="navcat_deco"
                                          onClick={() => handlecategory(e)}
                                        >
                                          <p key={e}>{e?.category}</p>
                                        </div>
                                      </>
                                    );
                                  })}
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <div className="nav_Filter">
                            <ul>
                              <li>ef</li>
                            </ul>
                          </div>
                        </div>
                        <div className="Nav_link">
                          <p
                            onClick={handlehome}
                            className="Nav_link carddecorationnone_cat"
                          >
                            Home
                          </p>
                        </div>
                        <div className="Nav_link">
                          <p
                            onClick={handleProducts}
                            className="Nav_link carddecorationnone_cat"
                          >
                            Products
                          </p>
                        </div>
                      </div>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default Usernavbar;
