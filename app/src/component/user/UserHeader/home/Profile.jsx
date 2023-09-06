import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { AiFillMessage, AiOutlineHome, AiOutlineShopping } from "react-icons/ai"
import { FcProcess } from 'react-icons/fc'
import { MdAccountCircle, MdShoppingCartCheckout } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { cartinfo } from '../../../../Redux/action/usercartinfo'
import { RxBorderWidth, RxDashboard } from 'react-icons/rx'
import { BsArrowLeft, BsTelephoneFill, BsTruck, BsWalletFill } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { BiLogOut } from 'react-icons/bi'

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
                                <Col lg={9}><h3>Robert Jacobs</h3></Col>
                                <Col lg={3} > <div className='userprofile_contact'> <p> <AiFillMessage />customer@themetags.com</p> <p> <BsTelephoneFill />8801235385478</p>
                                </div></Col>
                            </Row>
                            <Row>
                                <Col lg={3} md={6} sm={6} xs={6}>
                                    <div className="userhistory_icons">
                                        <AiOutlineShopping className='history_icon' />
                                        <div className='history_detail'><h3>3</h3>
                                            <p>Total Delivered</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={6} xs={6}>
                                    <div className="userhistory_icons">
                                        <BsTruck className='historyshipped_icon' />
                                        <div className='history_detail'><h3>0</h3>
                                            <p>Total Shipped</p></div>
                                    </div></Col>

                                <Col lg={3} md={6} sm={6} xs={6}>
                                    <div className="userhistory_icons"><FcProcess className='historyprocess_icon' />
                                        <div className='history_detail'><h3>2</h3>
                                            <p>Order Processing</p></div>
                                    </div> </Col>

                                <Col lg={3} md={6} sm={6} xs={6}>
                                    <div className="userhistory_icons">
                                        <MdShoppingCartCheckout className='historyneworder_icon' />
                                        <div className='history_detail'><h3>16</h3>
                                            <p>New Orders</p></div></div></Col>

                            </Row>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col lg={3}>
                        <div className="recent_orders">
                            <th>Manage My Account</th>
                            <div className='d-flex flex-column profilemanage_account'>
                                <div ><RxDashboard className='profilemanangeicon' />Dashboard</div>
                                <div><RxBorderWidth className='profilemanangeicon' />Order History</div>
                                <div><BsWalletFill className='profilemanangeicon' />Wallet History</div>
                                <div><BsArrowLeft className='profilemanangeicon' />Refund History</div>
                                <div><CiLocationOn className='profilemanangeicon' />Track Order</div>
                                <div><AiOutlineHome className='profilemanangeicon' />Address Book</div>
                                <div><MdAccountCircle className='profilemanangeicon' />Updated Profile</div>
                                <div><BiLogOut className='profilemanangeicon' />Log Out</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="recent_orders">
                            <h3>Your Orders</h3>
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

                                            <td>{item?._id}</td>
                                            <td>
                                                {item?.subcategory}
                                            </td>
                                            <td></td>
                                            <td>{item?.price}</td>
                                            <td>
                                                <p className='orderplaced_profile'>Order Placed</p>
                                            </td>
                                            <td></td>


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
