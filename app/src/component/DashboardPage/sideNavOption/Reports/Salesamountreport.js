//salesAmount  inside the Report
import React, { useRef } from "react";
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
import Flatpickr from "react-flatpickr";
import { AiOutlineSearch } from "react-icons/ai";

function Salesamount() {
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

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
                  <Flatpickr
                    ref={startDateRef}
                    options={{
                      dateFormat: "m/d/Y",
                      onClose: (_, selectedDates) => {
                        // Set the minimum date for the end date calendar
                        if (selectedDates.length > 0) {
                          endDateRef.current.flatpickr.set(
                            "minDate",
                            selectedDates[0]
                          );
                        }
                      },
                    }}
                    placeholder="Start Date"
                  />
                  <span className="date-range-separator">to</span>
                  <Flatpickr
                    ref={endDateRef}
                    options={{
                      dateFormat: "m/d/Y",
                      onClose: (_, selectedDates) => {
                        // Set the maximum date for the start date calendar
                        if (selectedDates.length > 0) {
                          startDateRef.current.flatpickr.set(
                            "maxDate",
                            selectedDates[0]
                          );
                        }
                      },
                    }}
                    placeholder="End Date"
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
                <Col xs="auto">
                  <div className="d-flex ">Total Amount</div>
                  <div> ₹398,939.30</div>
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
                <th>Date</th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td> 06 Aug, 2023</td>
                <td>₹75,200.00</td>
              </tr>
              <tr>
                <td>2</td>
                <td> 05 Aug, 2023</td>
                <td>₹40,200.00</td>
              </tr>
              <tr>
                <td>3</td>
                <td> 06 Aug, 2023 </td>
                <td>₹85,200.00</td>
              </tr>
              <tr>
                <td>4</td>
                <td> 06 Aug, 2023 </td>
                <td>34,200.00</td>
              </tr>

              <tr>
                <td>Showing 1-30 of 32 results</td>
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

export default Salesamount;
