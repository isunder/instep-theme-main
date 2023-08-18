import React, { useRef } from "react";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Flatpickr from "react-flatpickr";

function DeliveryStatus() {
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  return (
    <>
      {" "}
      <Row>
        <Col className="Admin_dashboard margin_bottom" lg={12}>
          <h3> Delivery Status Report</h3>
        </Col>
      </Row>
      <Row className="searchbutton">
        <Col className="order_report margin_bottom" lg={12}>
          {" "}
          <Flatpickr
            className="order_date"
            ref={startDateRef}
            options={{
              dateFormat: "m/d/Y",
              onClose: (_, selectedDates) => {
                // Set the minimum date for the end date calendar
                if (selectedDates.length > 0) {
                  endDateRef.current.flatpickr.set("minDate", selectedDates[0]);
                }
              },
            }}
            placeholder="Start Date"
          />
          <span className="date-range-separator">to</span>
          <Flatpickr
            className="order_date"
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
          <div className="btngroup  alllocation_button">
            <Button className="select_button  m-0" type="submit">
              {" "}
              <AiOutlineSearch /> search
            </Button>
          </div>
          <div className="_totaldelivery_order">
            <div>Total Orders</div>
            <p>26</p>
          </div>
        </Col>
        <Col>
          {" "}
          <Table>
            <thead>
              <tr>
                <th>S/L</th>
                <th>Date</th>
                <th className="table_colmn table_value">Total Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Delivered</td>
                <td className="table_colmn table_value">17</td>
              </tr>
              <tr>
                <td>2</td>
                <td> Order Placed</td>
                <td className="table_colmn table_value">7</td>
              </tr>
              <tr>
                <td>3</td>
                <td> Pending </td>
                <td className="table_colmn table_value">1</td>
              </tr>
              <tr>
                <td>4</td>
                <td> Processing </td>
                <td className="table_colmn table_value">1 </td>
              </tr>
            </tbody>
          </Table>
          Showing 1-30 of 32 results
          <div className="table_pageination">
            <Pagination>{items}</Pagination>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DeliveryStatus;
