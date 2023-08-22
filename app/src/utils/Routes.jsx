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
import Bulkemails from "../component/DashboardPage/sideNavOption/Newsletter/Bulkemail";
import Productsale from "../component/DashboardPage/sideNavOption/Reports/Productsale";
import Orderreport from "../component/DashboardPage/sideNavOption/Reports/Orderreport";
import Categorywise from "../component/DashboardPage/sideNavOption/Reports/Categorieswisesales";
import Salesamount from "../component/DashboardPage/sideNavOption/Reports/Salesamountreport";
import SignUp from "../component/user/Signup/signup";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import CustomerLayout from "./CustomerLayout";
import DeliveryStatus from "../component/DashboardPage/sideNavOption/Reports/Deliverystatusreport";
import ProductForm from "../component/admin/addProductDetails/addProductFrom";
import PosSystem from "../component/DashboardPage/sideNavOption/possystem";
import Usernavbar from "../component/user/UserHeader/usernavbar/usernavbar";
import SignIn from "../component/user/signin/sign";
import Orders from "../component/DashboardPage/Orders";
import Home from "../component/user/UserHeader/home/homepage";
import Admindashboard from "../component/DashboardPage/sideNavOption/Dashboard";
import ProductDetails from "../component/Products/productDetails";

const role = getUserId() ? getUserId()?.userRole : null;
// console.log(role, "aaasdfgfds");
const isLoggedIn = getToken();
const protects = {

    user: [
        {
            path: "/",
            element: isLoggedIn ? <Layout /> : <Navigate to="/" />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/userheader", element: <Usernavbar /> },
                { path: "/productdetail/id:", element: <ProductDetails /> },
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
                { path: "/addstock", element: <StockFile /> },
                { path: "/allloation", element: <Alllocation /> },
                { path: "/subscriber", element: <Subscribeuser /> },
                { path: "/allcategories", element: <Allcategories /> },
                { path: "/allvariations", element: <Allvariations /> },
                { path: "/allbrands", element: <Allbrands /> },
                { path: "/allunit", element: <Allunit /> },
                { path: "/alltaxes", element: <Alltaxes /> },
                { path: "/orderreport", element: <Orderreport /> },
                { path: "/categorywise", element: <Categorywise /> },
                { path: "/bulkemails", element: <Bulkemails /> },
                { path: "/productsale", element: <Productsale /> },
                { path: "/salesamountreport", element: <Salesamount /> },
                { path: "/deliverystatusreport", element: <DeliveryStatus /> },
                { path: "/product", element: <ProductForm /> },
                { path: "/possystem", element: <PosSystem /> },
                { path: "/orders", element: <Orders /> },
                { path: "*", element: "NO PAGE FOUND" },
            ],
        },
    ],
    default: [
        {
            path: "/",
            element: <CustomerLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/signup", element: <SignUp /> },
                { path: "/productdetail", element: <ProductDetails /> },
                { path: "/signin", element: <SignIn /> },
                { path: "*", element: "NO PAGE FOUND" },
            ]
        },
    ],

};

export const protect =
    role && isLoggedIn ? protects[role] : protects["default"];
export const defaultProtect = protects["default"];
