import { getToken, getUserId } from "./auth";
import AdminLayout from "./AdminLayout";
import Allproducts from "../component/admin/dashboardPage/sideNavOption/Products/Allproducts";
import StockFile from "../component/admin/dashboardPage/sideNavOption/Stocks/Addstock";
import Alllocation from "../component/admin/dashboardPage/sideNavOption/Stocks/Alllocations";
import Subscribeuser from "../component/admin/dashboardPage/sideNavOption/Newsletter/Subscriber";
import Allcategories from "../component/admin/dashboardPage/sideNavOption/Products/Allcategories";
import Allvariations from "../component/admin/dashboardPage/sideNavOption/Products/Allvariations";
import Allbrands from "../component/admin/dashboardPage/sideNavOption/Products/Allbrands";
import Allunit from "../component/admin/dashboardPage/sideNavOption/Products/Allunit";
import Alltaxes from "../component/admin/dashboardPage/sideNavOption/Products/Alltaxes";
import Bulkemails from "../component/admin/dashboardPage/sideNavOption/Newsletter/Bulkemail";
import Productsale from "../component/admin/dashboardPage/sideNavOption/Reports/Productsale";
import Orderreport from "../component/admin/dashboardPage/sideNavOption/Reports/Orderreport";
import Categorywise from "../component/admin/dashboardPage/sideNavOption/Reports/Categorieswisesales";
import Salesamount from "../component/admin/dashboardPage/sideNavOption/Reports/Salesamountreport";
import SignUp from "../component/user/Signup/signup";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import CustomerLayout from "./CustomerLayout";
import DeliveryStatus from "../component/admin/dashboardPage/sideNavOption/Reports/Deliverystatusreport";
import ProductForm from "../component/admin/addProductDetails/addProductFrom";
import PosSystem from "../component/admin/dashboardPage/sideNavOption/possystem";
import Usernavbar from "../component/user/UserHeader/usernavbar/usernavbar";
import SignIn from "../component/user/signin/sign";
import Orders from "../component/admin/dashboardPage/Orders";
import Home from "../component/user/UserHeader/home/homepage";
import ProductDetails from "../component/Products/productDetails";
import Admindashboard from "../component/admin/dashboardPage/sideNavOption/Dashboard";
import Subcategory from "../component/user/UserHeader/home/subcategory";
import Searchproduct from "../component/SearchProducts/searchProduct";

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
        { path: "/productdetail/:_id", element: <ProductDetails /> },
        { path: "/subcategory/:subcategory", element: <Subcategory /> },
        { path: "/search", element: <Searchproduct /> },
        { path: "*", element: "NO PAGE FOUND" },
      ],
    },
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
        { path: "/productdetail/:_id", element: <ProductDetails /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/subcategory/:subcategory", element: <Subcategory /> },
        { path: "/search", element: <Searchproduct /> },
        { path: "*", element: "NO PAGE FOUND" },
      ],
    },
  ],
};

export const protect =
  role && isLoggedIn ? protects[role] : protects["default"];
export const defaultProtect = protects["default"];
