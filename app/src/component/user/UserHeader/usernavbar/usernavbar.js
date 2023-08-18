import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { React, useEffect, useState } from "react";
import { filterByCategory } from "../../../../Redux/action/getFilterCategoryAction";
import { getProductAction } from "../../../../Redux/action/getProductDetailAction";
import { getUserId } from "../../../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
        {/* <div className="top-right">
          <p className="vr-border">Sell with us</p>
          <p className="vr-border">call us</p>
          <p>download App</p>
          <img src="/Image/windows.png" alt="" />
        </div> */}
        {["xl"].map((expand) => (
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
                  {/* <p className="share ">
                    share
                    <span>location</span>
                  </p> */}
                  {/* <img src="/Image/location.png" alt="location" /> */}
                  {/* <span>
                    <img
                      onClick={notificationClick}
                      src="/Image/notification.png"
                      alt="notification"
                    />
                  </span> */}
                  {/* <span onClick={heartClick}>
                    <BsHeart />
                  </span> */}
                  <img onClick={cartClick} src="/Image/cart.png" alt="cart" />
                  {/* <p onClick={SignClick} className="sign_hover">
                    Sign In
                  </p> */}
                  {/* {userLogin && userData ? (
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
                          Notificationn
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        onClick={() => logoutClick()}
                      >
                        Logoutt
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
                          Sign Inn
                        </p>
                      </Dropdown.Item>
                    </DropdownButton>
                  )} */}
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
        </div>
      </div>
    </>
  );
};
export default Usernavbar;
