import React from "react";
import {
    Button,
    Col,
    Form,
    Pagination,
    Row,
    Table,
} from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

function Productsale() {
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
    }
    return (
        <>
            <div className="admin_toppadding ">
                <Row >
                    <Col className="Admin_dashboard margin_bottom" lg={12}>
                        <h3> Product Sale Report</h3>
                    </Col>
                </Row>
                <div className="Tableheading_border">
                    <Row>
                        <Col lg={12}>
                            <div className="margin_bottom">
                                <Row>
                                    <Col xs="auto">
                                        <div className='all_product_search location_sech' style={{ width: "78rem" }}>
                                            <FiSearch className="allproduct_searchicon " />  <Form.Control
                                                type="text"
                                                placeholder="Search"
                                                className=" mr-sm-2 search_bar"

                                            />
                                        </div>
                                    </Col>
                                    <Col>
                                        {" "}
                                        <Form.Select className="price_filter">
                                            <option>High - Low</option>
                                            <option>Low -High </option>
                                        </Form.Select>{" "}
                                    </Col>
                                    <Col xs="auto">
                                        <div className="d-flex ">
                                            <Button className="select_button m-0" type="submit">   <AiOutlineSearch /> search</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {" "}
                            <Table>
                                <thead>
                                    <tr>
                                        <th>S/L</th>
                                        <th> Product Name</th>
                                        <th className="table_colmn">Total Sales</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Din Cake Classic Browine</td>
                                        <td className="table_colmn num_bers" >14</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Red Tomato 25gm</td>
                                        <td className="table_colmn num_bers">13</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>cinthol </td>
                                        <td className="table_colmn num_bers">15</td>
                                    </tr>
                                </tbody>
                            </Table>
                            Showing 1-30 of 36 results

                        </Col>

                        
                    </Row >
                    <div className="productsale_pagination"><Pagination>{items}</Pagination></div>
                </div>
            </div>

        </>
    );
}

export default Productsale;
