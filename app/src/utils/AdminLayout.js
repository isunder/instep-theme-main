import React, { memo } from "react";
import Mainheader from "../component/admin/header/Mainheader";
import { Outlet } from "react-router-dom";
import SidebarFun from "../component/DashboardPage/sidebar/Navbarside";
import { Col, Container, Row } from "react-bootstrap";

const AdminLayout = () => {
  return (
    <>
      <Mainheader />
      <Container fluid>
        <Row>
          <Col lg={2}>
            <SidebarFun />
          </Col>
          <Col lg={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default memo(AdminLayout);
