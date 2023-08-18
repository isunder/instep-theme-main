//All location

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { Table } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

function Alllocation(params) {
    return (
        <>
            <div className="admin_toppadding ">
                <Row>
                    <Col className="Admin_dashboard margin_bottom" md={12} lg={12}>
                        <h3> Locations</h3>
                        <div>
                            <Button className="Admin_rbutton" variant="secondary">
                                <AiOutlinePlus className="Admin_icons" />
                                Add Locations
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className="searchbutton">
                        <div className='form_control_or_btngroup'>
                            <div className='all_product_search location_search'>
                                <FiSearch className="allproduct_searchicon" />  <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2 search_bar"
                                />
                            </div>
                            <div className='btngroup location_button'>
                                <Dropdown>
                                    <Dropdown.Toggle className='select_button' variant="success" id="dropdown-basic" >
                                        Select Status
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button className="select_button m-0" type="submit">   <AiOutlineSearch /> search</Button>
                            </div>
                        </div>
                        <Table responsive="md" >
                            <thead className="alllocationtable">
                                <tr >
                                    <th>S/L</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Default</th>
                                    <th>Published</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="alllocationtable">
                                <tr >
                                    <td>1</td>
                                    <td>Location Two</td>
                                    <td>Location two address</td>
                                    <td>
                                        <Form>
                                            <Form.Check // prettier-ignore
                                                type="switch"
                                                id="custom-switch"
                                            />

                                        </Form>
                                    </td>
                                    <td>
                                        {" "}
                                        <Form>
                                            <Form.Check // prettier-ignore
                                                type="switch"
                                                id="custom-switch"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        <BsThreeDotsVertical />
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Default Location</td>
                                    <td>Default Address</td>
                                    <td>
                                        {" "}
                                        <Form>
                                            <Form.Check // prettier-ignore
                                                type="switch"
                                                id="custom-switch"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        {" "}
                                        <Form>
                                            <Form.Check // prettier-ignore
                                                type="switch"
                                                id="custom-switch"
                                            />
                                        </Form>
                                    </td>
                                    <td>
                                        {" "}
                                        <BsThreeDotsVertical />
                                    </td>
                                </tr>
                                <tr>

                                </tr>
                            </tbody>
                        </Table>
                        <div>Showing 1-2 of 2 result</div>
                    </Col>
                </Row>
            </div>
        </>
    );
}
export default Alllocation;
