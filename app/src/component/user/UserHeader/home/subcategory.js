import React from "react";
import { Col, Row } from "react-bootstrap";

const Subcategory = () => {
  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col lg={3}></Col>
          <Col lg={9}>
            <Row>
                <Col lg={3}></Col> 
                <Col lg={3}></Col> 
                <Col lg={3}></Col> 
                <Col lg={3}></Col> 
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Subcategory;
