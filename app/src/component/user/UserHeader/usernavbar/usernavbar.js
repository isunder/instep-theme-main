import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Accordion, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { React, useEffect, useState } from "react";
import { filterByCategory } from "../../../../Redux/action/getFilterCategoryAction";
import { getProductAction } from "../../../../Redux/action/getProductDetailAction";
import { getUserId } from "../../../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiTwotoneHeart } from "react-icons/ai";
import { BiSearch, BiSolidPurchaseTag } from "react-icons/bi";
import { MdAccountCircle, MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi";
import { searchAction } from "../../../../Redux/action/searchProductAction";

const Usernavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [filterValue, setFilterValue] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  // console.log(userData.role ? userData.username : null, "userData");

  const userData = getUserId();
  // setUsername(userData?.username);

  const userLogin = localStorage.getItem("token");
  // console.log(userLogin, "userLogin");

  const [showMessage, setShowMessage] = useState({
    MOBILE: "false",
    MEN: "false",
    WOMEN: "false",
    HOMEKITCHEN: "false",
    APPLIANCES: "false",
    SPORTS: "false",
  });

  const hideMessage = () => {
    setShowMessage(true);
  };

  const SignClick = (e) => {
    navigate("/signin");
    // console.log(e, "SignClick");
  };

  const logoutClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  // postproductAdmindata

  const filterdata = useSelector(
    (state) => state?.filtercategoryData?.listdata
  );

  console.log(filterdata, "filterdatafilterdata");

  useEffect(() => {
    // dispatch(allAdminProductList());

    dispatch(filterByCategory());

    dispatch(getProductAction());
  }, []);

  const brandClick = () => {};

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = () => {
    dispatch(searchAction({ name: searchQuery }));
    navigate("/search");
    setSearchQuery("");
  };

  return (
    <>
      <div className="nav_header">
        <div className="navbaenew_top">
          <div className="container">
            <Row>
              <Col lg={12}>
                <div className="subnewbar_nav">
                  <div>
                    <p>Welcome to our Instep Store</p>
                  </div>
                  <div>
                    <AiOutlineMail />
                    instepcart@mail.com
                    <p></p>
                  </div>
                  <div className="subnewbar_content">
                    <div>
                      <div className="navbarhead_prop">
                        <Navbar.Brand href="#">INSTEPCART</Navbar.Brand>
                      </div>
                    </div>

                    <div className="subnewbar_rightcont">
                      <div className="mid_navnewconent desktop_mid_navnewconent">
                        <div className="Nav_link">
                          Category
                          <div className="nav_Filter">
                            <ul>
                              <li>ef</li>
                            </ul>
                          </div>
                        </div>
                        <div className="Nav_link">Home</div>
                        <div className="Nav_link">Products</div>
                        <div className="Nav_link">Pages</div>
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
                                <MdOutlineAccountCircle /> My Account
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
                                <AiTwotoneHeart />
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
                        <HiOutlineShoppingCart className="navbar_new_icon" />
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
                        <Button className="slider_rightbutton" variant="light">
                          About Us{" "}
                        </Button>
                        <ul className="">
                          <h5 className=""> Mail Us:</h5>
                          <p>
                            instepcart@mail.com <br />
                          </p>
                        </ul>
                        <ul>
                          <h5> Registered Office Address:</h5>
                          <p>
                            {" "}
                            Tricity Plaza, Office No. 14
                            <br />
                            Ground, Peer Muchalla <br />
                            Zirakpur, Punjab 140603
                          </p>
                          <p className="tele">
                            Telephone: <span>000-000-0000</span>{" "}
                          </p>
                        </ul>
                      </div>
                      <div className="mid_navnewconent mid_offcanvas mobile_mid_navnewconent">
                        <div className="Nav_link">
                          <Accordion defaultActiveKey={["0"]} alwaysOpen>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                              Category
                              </Accordion.Header>
                              <Accordion.Body>
                               <p>Electronics</p>
                               <p>Men</p>
                               <p>Women</p>
                               <p>Home & Kitchen</p>
                               <p>Appliances</p>
                               <p>Sports & More</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <div className="nav_Filter">
                            <ul>
                              <li>ef</li>
                            </ul>
                          </div>
                        </div>
                        <div className="Nav_link">Home</div>
                        <div className="Nav_link">Products</div>
                        <div className="Nav_link">Pages</div>
                      </div>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* {["xl"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary py-4"
          >
            <Container fluid className="">
              <div className="nav_bar w-100">
                <Navbar.Brand href="#">INSTEPCART</Navbar.Brand>
                <Form className="d-flex search-bar">
                  <Form.Control
                    type="search"
                    placeholder="What is on your mind today?"
                    className=" search_bar"
                    aria-label="Search"
                  />
                  <Button className="search_button">Search</Button>
                </Form>
                <div className="nav-icons sub_header_hide">
                  <img onClick={cartClick} src="/Image/cart.png" alt="cart" />

                  {userLogin && userData ? (
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={userData?.username}
                    >
                      <Dropdown.Item href="#/action-1">Profiless</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <span onClick={() => notificationClick()}>
                          <img
                            src="/Image/notification.png"
                            alt="notification"
                          />
                          Notification
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        onClick={() => logoutClick()}
                      >
                        Logout
                      </Dropdown.Item>
                    </DropdownButton>
                  ) : (
                    <DropdownButton id="dropdown-basic-button" title="LOGIN">
                      <Dropdown.Item href="#/action-1">
                        <span onClick={() => notificationClick()}>
                          <img
                            src="/Image/notification.png"
                            alt="notification"
                          />
                          Notification
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <p onClick={() => SignClick()} className="sign_hover">
                          Sign In
                        </p>
                      </Dropdown.Item>
                    </DropdownButton>
                  )}
                </div>
              </div>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    INSTEPCART
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className=" hide_links ">
                    <Nav.Link href="">
                      <img src="/Image/location.png" alt="location" />
                      <img src="/Image/cart.png" alt="cart" />
                    </Nav.Link>
                    <Nav.Link href="www.google.com">ELECTRONICS</Nav.Link>
                    <Nav.Link href="#action2">MEN</Nav.Link>
                    <Nav.Link href="#action2">WOMEN</Nav.Link>
                    <Nav.Link href="#action2">HOME & KITCHEN</Nav.Link>
                    <Nav.Link href="#action2">APPLIANCES</Nav.Link>
                    <Nav.Link href="#action2">SPORTS & MORE</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))} 
        <div className="sales-navbar sub_header_hide">
          {filterdata &&
            filterdata?.map((e) => {
              console.log(e, "category");
              return (
                <>
                  <div className="Nav_link">
                    {e.category}
                    <div className="nav_Filter">
                      <ul>
                        <li>{e.subcategory}</li>
                      </ul>
                      <ul>
                        <li onClick={() => brandClick()}>{e.brands}</li>
                      </ul>
                    </div>
                  </div>
                </>
              );
            })}
        </div> */}
      </div>
    </>
  );
};
export default Usernavbar;
