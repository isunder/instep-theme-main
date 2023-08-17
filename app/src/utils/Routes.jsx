
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
import DeliveryStatus from "../component/DashboardPage/sideNavOption/Reports/Deliverystatusreport";
import ProductForm from "../component/admin/addProductDetails/addProductFrom";
import PosSystem from "../component/DashboardPage/sideNavOption/possystem";

const role = getUserId() ? getUserId()?.userRole : null;
const isLoggedIn = getToken();
const protects = {
    // default: [
    //     {
    //         path: "/",
    //         element: <CustomerLayout />,
    //         children: [
    //             { path: "/", element: <Homepage /> }
    //         ]
    //     },
    // ],
    default: [
        {
            path: "/",
            element: <AdminLayout />,
            children: [
                { path: "/", element: <Admindashboard /> },
                { path: "/signin", element: <SignIn /> },
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
                { path: "*", element: "NO PAGE FOUND" },
            ],
        },
    ],
    // user: [
    //     {
    //         path: "/",
    //         element: <CustomerLayout />,
    //         children: [
    //             { path: "/", element: <Homepage /> }
    //         ]
    //     }
    // ]
};

export const protect =
    role && isLoggedIn ? protects[role] : protects["default"];
export const defaultProtect = protects["default"];
