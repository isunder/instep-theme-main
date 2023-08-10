//Subscribers inside the newsletter
import React from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Navbar,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

function Categorywise() {
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>Category Wise Sales Report</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Navbar className="bg-body-tertiary justify-content-between">
            <Form inline>
              <Row>
                <Col xs="auto">
                  {" "}
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    style={{ width: "80rem" }}
                  />
                </Col>
                <Col>
                  {" "}
                  <Form.Select>
                    <option>High - Low</option>
                    <option>Low -High </option>
                  </Form.Select>{" "}
                </Col>
                <Col xs="auto">
                  <div className="d-flex ">
                    <Button type="submit">
                      {" "}
                      <AiOutlineSearch /> search
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <Table>
            <thead>
              <tr>
                <th>S/L</th>
                <th>Category Name </th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Fresh organic</td>
                <td>80</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Fresh fruit</td>
                <td>67</td>
              </tr>
              <tr>
                <td>3</td>
                <td>vegetable </td>
                <td>70</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Breakfast </td>
                <td>60</td>
              </tr>

              <tr>
                <td>Showing 1-15 of 15 results</td>
                <td>
                  <Pagination>{items}</Pagination>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default Categorywise;
