import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { AiOutlineShopping } from "react-icons/ai"
import { FcProcess, FcShipped } from 'react-icons/fc'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { cartinfo } from '../../../../Redux/action/usercartinfo'

export default function Profile() {

    // const [userinfo,setuserinfo]=useState()
    // const [,setuserinfo]=useState()

    const dispatch = useDispatch()
    const userinfo = useSelector((state) => state?.cartdetails?.listdata?.data?.userdetails)

    const cartdata = useSelector((state) => state?.cartdetails?.listdata?.data?.userProductDetails)
    console.log(userinfo, "dauserinfota")
    console.log(cartdata, "cartdata")


    useEffect(() => {
        dispatch(cartinfo({ userid: "64b8ccde661f313c3be26a41" }))
    }, [])
    return (
        <div className='container'>



            <div className=" slider_col margin_bottom">
                <div className='recent_orders margin_bottom'>
                    <Row >


                        <Col lg={3}>
                            <div className="">

                                <img className="banner-img" src="https://grostore.themetags.com/public/uploads/media/binrIiKfbPUgMaMmQpi6mykL1cQYyFov0lBLzA2z.jpg" alt="" />
                            </div>
                        </Col>
                        <Col lg={9}>
                            <Row>
                                <Col><h3>Robert Jacobs  </h3>
                                    <div className='d-flex '> <p>customer@themetags.com</p>  <p>8801235385478</p>
                                    </div></Col>
                            </Row>
                            <Row>
                                <Col>  <AiOutlineShopping /> <div className='d-flex flex-column '><h3>3</h3>
                                    <p>Total Delivered</p></div></Col>
                                <Col>  <FcShipped /> <div className='d-flex flex-column '><h3>0</h3>
                                    <p>Total Shipped</p></div></Col>

                                <Col>  <FcProcess /> <div className='d-flex flex-column '><h3>2</h3>
                                    <p>Order Processing</p></div></Col>

                                <Col>  <MdShoppingCartCheckout /> <div className='d-flex flex-column '><h3>16</h3>
                                    <p>New Orders</p></div></Col>

                            </Row>

                        </Col>


                    </Row>
                </div>
                <Row>
                    <Col lg={3}>
                        <div className="recent_orders">
                            <th>Manage My Account</th>
                            <div className='d-flex flex-column'>
                                <div>Dashboard</div>

                                <div>Order History</div>
                                <div>Wallet History</div>
                                <div>Refund History</div>
                                <div>Track Order</div>
                                <div>Address Book</div>
                                <div>Updated Profile</div>
                                <div>Log Out</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="recent_orders">
                            <h3>Recent Orders</h3>
                        </div>
                        <Table responsive="md" className="main">
                            <thead>
                                <tr>
                                    <th>Order Code</th>
                                    <th>Placed On </th>
                                    <th>Items</th>
                                    <th>Total</th>
                                    <th>Status </th>
                                    <th>Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartdata?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item?.orderNumber}</td>
                                            <td>

                                                <p>{item?.men}</p>
                                                <p>{item?.subcategory}</p>

                                            </td>

                                            <td>{item?.price}</td>


                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>

                    </Col>
                </Row>
            </div>
        </div>
    )
}
