import React from "react";
import { Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { BsGlobe2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";

function Userheader() {
  return (
    <>
      <div className="sticky-top bg-white ">
        <Container fluid>
          <Row>
            <div className="adminnavbar">
              <Col lg={2}>
                <Navbar className="bg-body-tertiary">
                  <Navbar.Brand href="#">INSTEPCART</Navbar.Brand>
                </Navbar>
              </Col>
              <Col lg={7}>
                {" "}
                <div className="Navsearch_bar">
                  <FiSearch className="allproduct_searchicon " />{" "}
                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    className=" mr-sm-2 navsearch"
                  />
                </div>
              </Col>
              <Col lg={3}>
                <div className="Navbarcons">
                  <div>
                    <BsGlobe2 className="navicons" /> visit store
                  </div>

                  <MdOutlineNotificationsActive className="navicons" />
                  <img
                    className="profile_img"
                    src="https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg"
                    alt=""
                  />
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Userheader;
