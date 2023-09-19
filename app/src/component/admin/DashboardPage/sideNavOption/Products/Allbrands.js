import React from 'react'
import { Button, Card, Col, Dropdown, FloatingLabel, Form, Row, Table } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { LuEdit3 } from 'react-icons/lu'

export default function Allbrands() {
    return (
        <>
            <Row>
                <div className="admin_toppadding ">
                    <Col className="Admin_dashboard margin_bottom" lg={12}>
                        <h3> Brands</h3>
                    </Col>
                    <Row className='m-0'>
                        <Col lg={9} className="searchbutton margin_bottom">
                            <div className='form_control_or_btngroup'>
                                <div className='all_product_search allvariation_search'>
                                    <FiSearch className="allproduct_searchicon" />  <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2 adminsearch_bar"
                                    />
                                </div>
                                <div className='btngroup variation_button '>
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
                                    <Button className="select_button" type="submit">   <AiOutlineSearch /> search</Button>
                                </div>
                            </div>
                            <Table responsive="md">
                                <thead>
                                    <tr>
                                        <th>S/L</th>
                                        <th> Name</th>
                                        <th></th>
                                        <th>Active</th>
                                        <th> </th>
                                        <th> </th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td> </td>
                                        <td><Form>
                                            <Form.Check // prettier-ignore
                                                type="switch"
                                                id="custom-switch"
                                            />

                                        </Form></td>
                                        <td> </td>
                                        <td>

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
                        </Col>
                        <Col lg={3}>
                            <Card className="right_variation
                             ">
                                <Card.Body>
                                    <Card.Title>Variation Information</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                    <div className='var_edit'>
                                        <Card.Text className="variation_text">
                                            <h4> All Variations</h4>
                                        </Card.Text>
                                        <Card.Text className="variation_text">
                                            <h5> Add New Variations</h5>
                                        </Card.Text>
                                        <Card.Text >
                                            <h5> Add Brand SEO</h5>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={9} >
                            <div className=' Addnewpeoduct margin_bottom'>
                                <h2 className='margin_bottom'> Add New Brand </h2>
                                <div className="margin_bottom">
                                    <h5>Brand Name</h5>
                                    <Form.Control
                                        type="text"
                                        placeholder="Type Brand Name"
                                        className=" mr-sm-2 adminsearch_bar"
                                    />
                                </div>
                                <div>
                                    <h5>Brand Image</h5>
                                    <div className='brand_image'>
                                        <h3>Choose brand Thumbnail</h3>
                                        <BsPlusCircleDotted className='brand_img_icon' />

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={9}>
                            <div className=' Addnewpeoduct margin_bottom'>
                                <h2 className='margin_bottom'> SEO Meta Configuration </h2>
                                <div className="margin_bottom">
                                    <h5>Meta Title</h5>
                                    <Form.Control
                                        type="text"
                                        placeholder="Type Meta Title"
                                        className=" mr-sm-2 adminsearch_bar"
                                    />
                                </div>
                                <div className='margin_bottom'>
                                    <h4>Meta Description</h4>
                                    <FloatingLabel controlId="floatingTextarea2" label="Type your meta descritption">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                </div>
                                <div>
                                    <h5>Meta Image</h5>
                                    <div className='brand_image'>
                                        <h3>Choose brand Thumbnail</h3>
                                        <BsPlusCircleDotted className='brand_img_icon' />

                                    </div>
                                </div>
                            </div>
                            <Button className="Brandsave_button" variant="success">Save Brand</Button>{' '}
                        </Col>
                    </Row>
                </div>
            </Row >
        </>
    )
}
