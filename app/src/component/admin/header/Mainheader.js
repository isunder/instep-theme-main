import React, { useState } from "react";
import { Container, Dropdown, Form, Navbar, Offcanvas } from "react-bootstrap";
import { BsGlobe2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useNavigate } from "react-router";
import { Button } from "rsuite";
import SidebarFun from "../../admin/dashboardPage/sidebar/Navbarside";
import { AiOutlineSetting } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";

function Mainheader() {
  const navigate = useNavigate();

  const SignClick = () => {
    navigate("/signin");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {["lg"].map((expand) => (
        <div className="sticky-top bg-white ">
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container fluid>
              <div className="adminnavbar">
                {" "}
                <Navbar.Brand className="d-block" href="#">
                  INSTEPCART{" "}
                </Navbar.Brand>
                <Form className="d-flex Navsearch_bar">
                  <FiSearch className="allproduct_searchicon " />{" "}
                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    className=" mr-sm-2 navsearch"
                  />
                  {/* <Button variant="outline-success">Search</Button> */}
                </Form>
                <Button
                  variant="primary"
                  className="offcanvas_toggole_btn for_mobile"
                  onClick={handleShow}
                >
                  <span className="navbar-toggler-icon"></span>
                </Button>
                <div className="Navbaricons hide_for_mobile">
                  <div className="navicon_heading">
                    <BsGlobe2 className="navicons" /> visit store
                  </div>

                  <MdOutlineNotificationsActive className="navicons" />
                  {/* <img
                    className="profile_img"
                    src="https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg"
                    alt=""
                  /> */}
                  <Dropdown data-bs-theme="">
                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      variant="secondary"
                      className="adminnav_profiletoggle"
                    >
                      <img
                        className="profile_img"
                        src="https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg"
                        alt=""
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="adminprofiledrop">
                      <Dropdown.Item>
                        <IoMdPerson /> My Account
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <AiOutlineSetting /> Settings
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <GoSignOut />
                        Sign Out
                      </Dropdown.Item>
                      {/* <Dropdown.Divider /> */}
                      {/* <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item> */}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button
                    variant="primary"
                    className="offcanvas_toggole_btn for_tablet "
                    onClick={handleShow}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </Button>
                </div>
                <div className="navbar_toogle_item">
                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>INSTEPCART</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="offcanvas_inner_body">
                      <div className="Navbaricons for_only_mobile">
                        <div>
                          <Button onClick={() => SignClick()}>sigin</Button>
                        </div>
                        <div className="navicon_heading">
                          <BsGlobe2 className="navicons" /> visit store
                        </div>

                        <MdOutlineNotificationsActive className="navicons" />
                        <img
                          className="profile_img"
                          src="https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg"
                          alt=""
                        />
                        <Button
                          variant="primary"
                          className="offcanvas_toggole_btn for_tablet "
                          onClick={handleShow}
                        >
                          <span className="navbar-toggler-icon"></span>
                        </Button>
                      </div>
                      <SidebarFun />
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              </div>
            </Container>
          </Navbar>
        </div>
      ))}
    </>
  );
}

export default Mainheader;
