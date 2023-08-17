import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { BsGlobe2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useNavigate } from "react-router";
import { Button } from "rsuite";
import SidebarFun from "../../DashboardPage/sidebar/Navbarside";

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
