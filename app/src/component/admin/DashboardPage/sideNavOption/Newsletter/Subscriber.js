//Subscribers inside the newsletter
import React from "react";
import {
  Button,
  Col,
  Dropdown,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBin5Fill, RiDeleteBin5Line } from "react-icons/ri";

function Subscribeuser() {
  return (
    <>
      <div className="admin_toppadding ">
        <Row >
          <Col className="Admin_dashboard margin_bottom" lg={12}>
            <h3> Subscribers</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="searchbutton">
            <div className='form_control_or_btngroup'>
              <div className='all_product_search location_search'>
                <FiSearch className="allproduct_searchicon " />  <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2 search_bar"
                />
              </div>
              <div className='btngroup location_button alllocation_button'>
                <Button className="select_button m-0" type="submit">   <AiOutlineSearch /> search</Button>
              </div>
            </div>

            <Table responsive="sm">
              <thead>
                <tr>
                  <th>S/L</th>
                  <th> Email</th>
                  <th> Suibscribed At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td> forestgreen@example.com</td>
                  <td>12-03-2023</td>
                  <td>
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle className="drop_threedot" variant="success" id="dropdown-basic">
                        <RiDeleteBin5Fill className="threedot_icon" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          {" "}
                          <RiDeleteBin5Line />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td> waterblue@themetags.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle className="drop_threedot" variant="success" id="dropdown-basic">
                        <RiDeleteBin5Fill className="threedot_icon" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          {" "}
                          <RiDeleteBin5Line />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle className="drop_threedot" variant="success" id="dropdown-basic">
                        <RiDeleteBin5Fill className="threedot_icon" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          {" "}
                          <RiDeleteBin5Line />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle className="drop_threedot" variant="success" id="dropdown-basic">
                        <RiDeleteBin5Fill className="threedot_icon" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          {" "}
                          <RiDeleteBin5Line />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle className="drop_threedot" variant="success" id="dropdown-basic">
                        <RiDeleteBin5Fill className="threedot_icon" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          {" "}
                          <RiDeleteBin5Line />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle className="drop_threedot" variant="success" id="dropdown-basic">
                        <RiDeleteBin5Fill className="threedot_icon" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          {" "}
                          <RiDeleteBin5Line />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle className="drop_threedot" variant="success" id="dropdown-basic">
                        <RiDeleteBin5Fill className="threedot_icon" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          {" "}
                          <RiDeleteBin5Line />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle className="drop_threedot" variant="success" id="dropdown-basic">
                        <RiDeleteBin5Fill className="threedot_icon" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          {" "}
                          <RiDeleteBin5Line />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle className="drop_threedot" variant="success" id="dropdown-basic">
                        <RiDeleteBin5Fill className="threedot_icon" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          {" "}
                          <RiDeleteBin5Line />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle className="drop_threedot" variant="success" id="dropdown-basic">
                        <RiDeleteBin5Fill className="threedot_icon" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          {" "}
                          <RiDeleteBin5Line />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle className="drop_threedot" variant="success" id="dropdown-basic">
                        <RiDeleteBin5Fill className="threedot_icon" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          {" "}
                          <RiDeleteBin5Line />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              </tbody>
            </Table>
            Showing 1-11 of 11 results
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Subscribeuser;
