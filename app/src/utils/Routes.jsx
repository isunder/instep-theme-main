import { getToken, getUserId } from "./auth";
import AdminLayout from "./AdminLayout";
import Allproducts from "../component/DashboardPage/sideNavOption/Products/Allproducts";
import StockFile from "../component/DashboardPage/sideNavOption/Stocks/Addstock";
import Alllocation from "../component/DashboardPage/sideNavOption/Stocks/Alllocations";
import Subscribeuser from "../component/DashboardPage/sideNavOption/Newsletter/Subscriber";
import Allcategories from "../component/DashboardPage/sideNavOption/Products/Allcategories";
import Allvariations from "../component/DashboardPage/sideNavOption/Products/Allvariations";
import Allbrands from "../component/DashboardPage/sideNavOption/Products/Allbrands";
import Allunit from "../component/DashboardPage/sideNavOption/Products/Allunit";
import Alltaxes from "../component/DashboardPage/sideNavOption/Products/Alltaxes";
import Admindashboard from "../component/DashboardPage/sideNavOption/Dashboard";
import Bulkemails from "../component/DashboardPage/sideNavOption/Newsletter/Bulkemail";
import Productsale from "../component/DashboardPage/sideNavOption/Reports/Productsale";
import Orderreport from "../component/DashboardPage/sideNavOption/Reports/Orderreport";
import Categorywise from "../component/DashboardPage/sideNavOption/Reports/Categorieswisesales";
import SignIn from "../component/admin/signin/sign";
import Salesamount from "../component/DashboardPage/sideNavOption/Reports/Salesamountreport";
import SignUp from "../component/user/Signup/signup";
import Homepage from "../component/user/UserHeader/home/homepage";
import { Navigate } from "react-router-dom";
import Userheader from "../component/header/Mainheader";
import Layout from "./Layout";
import CustomerLayout from "./CustomerLayout";

const role = getUserId() ? getUserId()?.userRole : null;
const isLoggedIn = getToken();
const protects = {

    user: [
        {
            path: "/",
            element: isLoggedIn ? <CustomerLayout /> : <Navigate to="/" />,
            children: [
                { path: "/", element: <Homepage /> },
                { path: "/userheader", element: <Userheader /> },
                { path: "*", element: "NO PAGE FOUND" }
            ]
        }
    ],

    admin: [
        {
            path: "/",
            element: isLoggedIn ? <AdminLayout /> : <Navigate to="/" />,
            children: [
                { path: "/", element: <Admindashboard /> },
                { path: "/allproduct", element: <Allproducts /> },
                { path: "/Addstock", element: <StockFile /> },
                { path: "/Allloation", element: <Alllocation /> },
                { path: "/Subscriber", element: <Subscribeuser /> },
                { path: "/Allcategories", element: <Allcategories /> },
                { path: "/Allvariations", element: <Allvariations /> },
                { path: "/Allbrands", element: <Allbrands /> },
                { path: "/Allunit", element: <Allunit /> },
                { path: "/Alltaxes", element: <Alltaxes /> },
                { path: "/Orderreport", element: <Orderreport /> },
                { path: "/Categorywise", element: <Categorywise /> },
                { path: "/Bulkemails", element: <Bulkemails /> },
                { path: "/Productsale", element: <Productsale /> },
                { path: "/Salesamountreport", element: <Salesamount /> },
                { path: "*", element: "NO PAGE FOUND" },
            ],
        },
    ],
    default: [
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Homepage /> },
                { path: "/signup", element: <SignUp /> },
                { path: "/signin", element: <SignIn /> },
            ]
        },
    ],

};

export const protect =
    role && isLoggedIn ? protects[role] : protects["default"];
export const defaultProtect = protects["default"];
