import React from "react";
import { Sidenav, Nav } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import {
    AiFillSetting,
    AiFillTags,
    AiFillUnlock,
    AiOutlineDashboard,
} from "react-icons/ai";
import { HiDocument, HiOutlineUserGroup } from "react-icons/hi";
import { MdPermMedia, MdProductionQuantityLimits } from "react-icons/md";
import { BsArrow90DegLeft, BsAwardFill, BsFilePostFill } from "react-icons/bs";
import { GoDatabase } from "react-icons/go";
import { FaShoppingCart, FaUserCheck } from "react-icons/fa";
import { SiPowerpages } from "react-icons/si";
import { BiCut, BiSolidReport } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const SidebarFun = () => {
    const navigate = useNavigate();

    const AllProductClick = () => {
        //   navigate("/allproductlist");
    };
    const AddProductClick = () => {
        //   navigate("/productform");
    };

    const dashClick = () => {
        navigate("/")
    }

    return (
        <div className="admin_sidebar col_hide">
            <Sidenav defaultOpenKeys={["3", "4"]}>
                <Sidenav.Body>
                    <div className="sidebar_deco">
                        <Nav activeKey="1">
                            <Nav.Item eventKey="1" onClick={() => dashClick()} >
                                {" "}
                                <AiOutlineDashboard />
                                Dashboard
                            </Nav.Item>{" "}
                            <Nav.Menu
                                eventKey="2"
                                title="Products"
                                icon={<MdProductionQuantityLimits />}
                            >
                                <Nav.Item eventKey="2-1">  <Link to={"/allproduct"}> All Products</Link> </Nav.Item>
                                <Nav.Item eventKey="2-2"> <Link to={"/Allcategories"}> All Categories</Link></Nav.Item>
                                <Nav.Item eventKey="2-3"><Link to={"/Allvariations"}> All Variations</Link></Nav.Item>
                                <Nav.Item eventKey="2-4"><Link to={"/Allbrands"}> All Brands</Link></Nav.Item>
                                <Nav.Item eventKey="2-5"><Link to={"/Allunit"}> All Units</Link></Nav.Item>
                                <Nav.Item eventKey="2-6"><Link to={"/Alltaxes"}> All Taxes</Link></Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu
                                eventKey="3"
                                title="Pos System"
                                icon={<BsFilePostFill />}
                            ></Nav.Menu>
                            <Nav.Menu eventKey="4" title="Order" icon={<HiDocument />} />{" "}
                            <Nav.Menu eventKey="5" title="Stock" icon={<GoDatabase />}>
                                <Nav.Item eventKey="5-1"><Link to={"/Addstock"} /> Add Stock  </Nav.Item>
                                <Nav.Item eventKey="5-2"><Link to={"/Allloation"}> All Location</Link></Nav.Item>
                            </Nav.Menu>{" "}
                            <Nav.Menu eventKey="6" title="Refunds" icon={<BsArrow90DegLeft />}>
                                {" "}
                                <Nav.Item eventKey="6-1">Refund Configurations</Nav.Item>
                                <Nav.Item eventKey="6-2">Refunds Requests</Nav.Item>
                                <Nav.Item eventKey="6-1">Approved Refunds</Nav.Item>
                                <Nav.Item eventKey="6-2">Rejected Refunds</Nav.Item>{" "}
                            </Nav.Menu>
                            <Nav.Menu
                                eventKey="7"
                                title="Rewards & Wallet"
                                icon={<BsAwardFill />}
                            >
                                {" "}
                                <Nav.Item eventKey="7-1">Rewards Configurations</Nav.Item>
                                <Nav.Item eventKey="7-2">Set Reward Points</Nav.Item>
                                <Nav.Item eventKey="7-3">Wallet Configurations</Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu
                                eventKey="8"
                                title="Customer"
                                icon={<HiOutlineUserGroup />}
                            />
                            <Nav.Menu title="Employee Staff" icon={<FaUserCheck />} />{" "}
                            <Nav.Menu eventKey="9" title="Tags" icon={<AiFillTags />} />
                            <Nav.Menu eventKey="10" title="Pages" icon={<SiPowerpages />} />
                            <Nav.Menu eventKey="11" title="Blogs" icon={<BsAwardFill />}>
                                {" "}
                                <Nav.Item eventKey="11-1">All Blogs</Nav.Item>
                                <Nav.Item eventKey="11-2">Categories</Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu
                                eventKey="12"
                                title="Media Manager"
                                icon={<MdPermMedia />}
                            />
                            <Nav.Menu
                                eventKey="13"
                                title="Newsletters"
                            //  icon={<BsAwardFill />}
                            >
                                {" "}
                                <Nav.Item eventKey="13-1">Bulk Email</Nav.Item>
                                <Nav.Item eventKey="13-2"><Link to={"/Subscriber"}> Subscribers</Link></Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu eventKey="14" title="Coupons" icon={<BiCut />} />
                            <Nav.Menu eventKey="15" title="Campaigns" />
                            <Nav.Menu eventKey="16" title="Logistics" icon={<BiCut />} />
                            <Nav.Menu
                                eventKey="17"
                                title="Shopping Zones"
                                icon={<FaShoppingCart />}
                            />
                            <Nav.Menu eventKey="18" title="Reports" icon={<BiSolidReport />}>
                                {" "}
                                <Nav.Item eventKey="18-1"> Order Report</Nav.Item>
                                <Nav.Item eventKey="18-2">Products Sales</Nav.Item>
                                <Nav.Item eventKey="18-3">Category Wise Sales</Nav.Item>
                                <Nav.Item eventKey="18-4">Sales Amount Report</Nav.Item>
                                <Nav.Item eventKey="18-5">Delivery Status Report</Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu
                                eventKey="19"
                                title="Queries"
                            //  icon={<BsAwardFill />}
                            />
                            <Nav.Menu eventKey="20" title="Appearance">
                                {" "}
                                <Nav.Item eventKey="20-1"> Home Page</Nav.Item>
                                <Nav.Item eventKey="20-2">Products Page</Nav.Item>
                                <Nav.Item eventKey="20-3">Products Details</Nav.Item>
                                <Nav.Item eventKey="20-4">About Us</Nav.Item>
                                <Nav.Item eventKey="20-5">Header</Nav.Item>
                                <Nav.Item eventKey="20-5">Footer</Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu
                                eventKey="22"
                                title="Roles & Permissions"
                                icon={<AiFillUnlock />}
                            />
                            <Nav.Menu eventKey="23" title="Setting" icon={<AiFillSetting />}>
                                {" "}
                                <Nav.Item eventKey="23-1"> Auth Setting</Nav.Item>
                                <Nav.Item eventKey="23-2">OTP Setting</Nav.Item>
                                <Nav.Item eventKey="23-3">Order Setting</Nav.Item>
                                <Nav.Item eventKey="23-4">Smtp Setting</Nav.Item>
                                <Nav.Item eventKey="23-5">General Setting</Nav.Item>
                                <Nav.Item eventKey="23-6">Payment Methods</Nav.Item>
                                <Nav.Item eventKey="23-7">Social Media Login</Nav.Item>
                                <Nav.Item eventKey="23-8">Multilingual Setting</Nav.Item>
                                <Nav.Item eventKey="23-9">Multi Currency Setting</Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu eventKey="4-5" title="Product">
                                <Nav.Item eventKey="4-5-1" onClick={() => AllProductClick()}>
                                    All Proucts
                                </Nav.Item>
                                <Nav.Item eventKey="4-5-2" onClick={() => AddProductClick()}>
                                    Add Product
                                </Nav.Item>
                            </Nav.Menu>
                        </Nav>
                    </div>

                </Sidenav.Body>
            </Sidenav>
        </div>
    );
};

export default SidebarFun;
