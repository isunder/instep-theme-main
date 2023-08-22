import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { React, useEffect, useState } from "react";
import { filterByCategory } from "../../../../Redux/action/getFilterCategoryAction";
import { getProductAction } from "../../../../Redux/action/getProductDetailAction";
import { getUserId } from "../../../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiTwotoneHeart } from "react-icons/ai";
import { BiSearch, BiSolidPurchaseTag } from "react-icons/bi";
import { MdAccountCircle, MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Usernavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [usename, setUsername] = useState();

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
  // const heartClick = () => {
  //   navigate("/likeitem");
  // };

  const SignClick = (e) => {
    navigate("/signin");
    // console.log(e, "SignClick");
  };

  const cartClick = () => {
    // navigate("/addcart");
  };
  const notificationClick = () => {
    // navigate("/notification");
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
                      <div>
                        <Navbar.Brand href="#">INSTEPCART</Navbar.Brand>
                      </div>
                    </div>

                    <div className="subnewbar_rightcont">
                      <div className="mid_navnewconent">
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
                                />
                              </li>
                              <div>
                                <BiSearch className="seachunder_search_icon" />
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>
                      <div className="Nav_link">
                        <MdAccountCircle className="navbar_new_icon" />
                        <div className="nav_Filter">
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
                              onClick={() => SignClick()}
                              className="sign_hover"
                            >
                              <AiTwotoneHeart />
                              Sign In
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="Nav_link">
                        <HiOutlineShoppingBag className="navbar_new_icon" />
                      </div>
                    </div>
                  </div>
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
