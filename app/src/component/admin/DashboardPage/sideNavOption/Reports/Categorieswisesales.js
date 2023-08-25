//Subscribers inside the newsletter
import React from "react";
import {
  Button,
  Col,
  Form,
  Navbar,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

function Categorywise() {
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }
  return (
    <>
      <div className="admin_toppadding ">
        <Row>
          <Col className="Admin_dashboard margin_bottom" lg={12}>
            <h3> Category Wise Sales Report</h3>
          </Col>
        </Row>
        <Row className="searchbutton">
          <Col lg={12}>
            <div className="margin_bottom">
              <Row>
                <Col xs="auto">
                  <div
                    className="all_product_search category_search"
                  >
                    <FiSearch className="allproduct_searchicon " />{" "}
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className=" mr-sm-2 adminsearch_bar"
                    />
                  </div>
                </Col>
                <Col>
                  {" "}
                  <Form.Select className="price_filter order_date">
                    <option>High - Low</option>
                    <option>Low -High </option>
                  </Form.Select>{" "}
                </Col>
                <Col xs="auto">
                  <div className="d-flex ">
                    <Button className="select_button m-0" type="submit">
                      {" "}
                      <AiOutlineSearch /> search
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>{" "}
          <Table>
            <thead>
              <tr>
                <th>S/L</th>
                <th>Category Name </th>
                <th className="table_colmn">Total Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Fresh organic</td>
                <td className="table_colmn num_bers">80</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Fresh fruit</td>
                <td className="table_colmn num_bers">67</td>
              </tr>
              <tr>
                <td>3</td>
                <td>vegetable </td>
                <td className="table_colmn num_bers">70</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Breakfast </td>
                <td className="table_colmn num_bers">60</td>
              </tr>
            </tbody>
          </Table>
          Showing 1-15 of 15 results
          <div className="table_pageination">
            <Pagination>{items}</Pagination>
          </div>
        </Row>
      </div>
    </>
  );
}

export default Categorywise;
