import React from 'react'
import { Button, Col,  Form, Row, Table } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

function Allcategories() {
    return (
        <>
            <div className="admin_toppadding ">
                <Row>

                    <Col className="Admin_dashboard margin_bottom" lg={12}>
                        <h3> Categories</h3>
                        <div>
                            <Button className="Admin_rbutton" variant="secondary">
                                <AiOutlinePlus className="Admin_icons" />
                                Add Category
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col lg={12} className="searchbutton">
                        <div className='form_control_or_btngroup'>
                            <div className='all_product_search location_search'>
                                <FiSearch className="allproduct_searchicon " />  <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2 adminsearch_bar"
                                />
                            </div>
                            <div className='btngroup location_button alllocation_button'>
                                <Button className="select_button m-0" type="submit">   <AiOutlineSearch /> search</Button>
                            </div>
                        </div>
                        <Table responsive="md" >
                            <thead className="alllocationtable">
                                <tr >
                                    <th>S/L</th>
                                    <th> Category Name</th>
                                    <th>Base Category</th>
                                    <th>Brands</th>
                                    <th>Priority</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="alllocationtable">
                                <tr >
                                    <td>1</td>
                                    <td> Meat & Fish</td>
                                    <td>N/A</td>
                                    <td>
                                        N/A
                                    </td>
                                    <td>
                                        0
                                    </td>
                                    <td>
                                        <BsThreeDotsVertical />
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td> Meat & Fish</td>
                                    <td>N/A</td>
                                    <td>
                                        N/A
                                    </td>
                                    <td>
                                        0
                                    </td>
                                    <td>
                                        <BsThreeDotsVertical />
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td> Meat & Fish</td>
                                    <td>N/A</td>
                                    <td>
                                        N/A
                                    </td>
                                    <td>
                                        0
                                    </td>
                                    <td>
                                        <BsThreeDotsVertical />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <div>Showing 1-2 of 2 result</div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Allcategories;