import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { FiSearch } from 'react-icons/fi';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { Pagination, Table } from 'react-bootstrap';
import { LuEdit3 } from 'react-icons/lu';


function Allproducts(params) {
    return (
        <>
            <div className="admin_toppadding ">
                <Row>
                    <Col className="Admin_dashboard margin_bottom" lg={12}>
                        <h3> Products</h3>
                        <div>
                            <Button className="Admin_rbutton" variant="secondary">
                                <AiOutlinePlus className="Admin_icons" />
                                Add Product
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className="searchbutton">
                        <div className='form_control_or_btngroup'>
                            <div className='all_product_search'>
                                <FiSearch className="allproduct_searchicon" />  <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2 search_bar"
                                />
                            </div>
                            <div className='btngroup'>
                                <Dropdown  >
                                    <Dropdown.Toggle className='select_button' variant="success" id="dropdown-basic">
                                        Select Brand
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
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
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>S/L</th>
                                    <th>Product Name</th>
                                    <th>Brand</th>
                                    <th>Categories</th>
                                    <th>Price</th>
                                    <th>Published</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Otto</td>
                                    <td>
                                        <Form>
                                            <Form.Check // prettier-ignore
                                                type="switch"
                                                id="custom-switch"
                                            />

                                        </Form>
                                    </td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                <BiDotsVerticalRounded />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1"> <LuEdit3 /> Edit</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className='table_pageination'>
                            <Pagination>
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item disabled>{5}</Pagination.Item>
                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next />
                            </Pagination>
                        </div>
                    </Col>
                </Row>
            </div>
        </>)


}
export default Allproducts;