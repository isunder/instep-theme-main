import React, { useEffect } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { AiFillMessage, AiOutlineHome, AiOutlineShopping } from "react-icons/ai"
import { FcProcess } from 'react-icons/fc'
import { MdAccountCircle, MdShoppingCartCheckout } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { cartinfo } from '../../../Redux/action/usercartinfo'
import { RxBorderWidth, RxDashboard } from 'react-icons/rx'
import { BsArrowLeft, BsTelephoneFill, BsTruck, BsWalletFill } from 'react-icons/bs'
import { CiEdit, CiLocationOn } from 'react-icons/ci'
import { BiLogOut } from 'react-icons/bi'
import { getUserId, isUserLogined } from '../../../utils/auth'
import Editprofile from '../Editprofile/editprofile'
import TrackOrder from '../Editprofile/trackOrder'
import AddressBook from '../Editprofile/addressbook'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate();

    const userData = getUserId();
    console.log(userData, "usr");

    const userLogin = localStorage.getItem("token");

    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/')
        window.location.reload()
    };
    const userinfo = useSelector((state) => state?.cartdetails?.listdata)
    console.log(userinfo, "usersssssssssssssssss")

    const cartdata = useSelector((state) => state?.cartdetails?.listdata?.data?.userProductDetails)
    console.log(userinfo, "dauserinfota")
    console.log(cartdata, "cartdata")

    useEffect(() => {
        dispatch(cartinfo({ userid: "64b8ccde661f313c3be26a41" }))
    }, [])
    return (
        <div className='container'>
            <div className=" slider_col margin_bottom">
                <div className='recent_orders '>
                    <Row >
                        <Col lg={3} md={3} sm={4}>
                            <div className="d-flex justify-content-center mainiconalign">
                                <div className='mainiconalign'>
                                    <img className="banner-img img-edit2" src="https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg" alt="" />
                                </div>
                                <div className='iconouterdiv'><CiEdit className='profileedit' /></div>
                            </div>
                        </Col>
                        <Col lg={9} md={9} sm={8}>
                            <Row>
                                <Col lg={9} md={8} ><h3>{userData.username}</h3></Col>
                                <Col lg={3} md={4} >
                                    <div className='userprofile_contact'>
                                        <div>
                                            <p><AiFillMessage /> {userData.userEmail}</p>

                                        </div>
                                        <div>
                                            <p> <BsTelephoneFill />8801235385478</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                {/* <Col lg={3} md={6} sm={6} xs={6}>
                                    <div className="userhistory_icons">
                                        <AiOutlineShopping className='history_icon' />
                                        <div className='history_detail'><h3>3</h3>
                                            <p>Total Delivered</p>
                                        </div>
                                    </div>
                                </Col> */}
                                <Col lg={3} md={6} sm={6} xs={6}>
                                    <div className="userhistory_icons">
                                        <BsTruck className='historyshipped_icon' />
                                        <div className='history_detail'><h3>0</h3>
                                            <p>Total Shipped</p></div>
                                    </div></Col>



                                <Col lg={3} md={6} sm={6} xs={6}>
                                    <div className="userhistory_icons">
                                        <MdShoppingCartCheckout className='historyneworder_icon' />
                                        <div className='history_detail'><h3>16</h3>
                                            <p>New Orders</p></div></div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

            </div>
            <Row>
                <Col lg={3} md={3}>
                    <div className="recent_orders">
                        <th>Manage My Account</th>
                        <div class="nav flex-column nav-pills me-3 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button class="nav-link active " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"> <div className='d-flex justify-content-start align-items-center'><MdAccountCircle className='profilemanangeicon' />Edit Profile</div></button>
                            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">  <div className='d-flex justify-content-start align-items-center'><CiLocationOn className='profilemanangeicon' />Track Order </div></button>
                            <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">  <div className='d-flex justify-content-start align-items-center'><AiOutlineHome className='profilemanangeicon' />Address Book </div></button>
                            <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">  <div className='d-flex justify-content-start align-items-center'><BiLogOut className='profilemanangeicon' />Log Out </div></button>
                        </div>
                    </div>
                </Col>
                <Col lg={9} md={9} >
                    <div className='recent_orders'>
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Editprofile /></div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><TrackOrder /></div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><AddressBook /></div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    )
}
