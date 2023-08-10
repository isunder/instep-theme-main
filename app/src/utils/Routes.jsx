
import { getToken, getUserId } from "./auth";
import AdminLayout from "./AdminLayout";
import Allproducts from "../component/DashboardPage/sideNavOption/Allproducts";
import StockFile from "../component/DashboardPage/sideNavOption/Stocks/Addstock";
import Alllocation from "../component/DashboardPage/sideNavOption/Stocks/Alllocations";
import Subscribeuser from "../component/DashboardPage/sideNavOption/Newsletter/Subscriber";
import Allcategories from "../component/DashboardPage/sideNavOption/Products/Allcategories";
import Allvariations from "../component/DashboardPage/sideNavOption/Products/Allvariations";
import Allbrands from "../component/DashboardPage/sideNavOption/Products/Allbrands";
import Allunit from "../component/DashboardPage/sideNavOption/Products/Allunit";
import Alltaxes from "../component/DashboardPage/sideNavOption/Products/Alltaxes";
import LoginPage from "../component/Loginpage/login";
import Admindashboard from "../component/DashboardPage/sideNavOption/Dashboard";
import SignIn from "../component/admin/signin/sign";
import CustomerLayout from "./CustomerLayout";
import Homepage from "../component/user/UserHeader/home/homepage";

const role = getUserId() ? getUserId()?.userRole : null;
const isLoggedIn = getToken();
const protects = {
    default: [
        {
            path: "/",
            element: <CustomerLayout />,
            children: [
                { path: "/", element: <Homepage /> }
            ]
        },
    ],
    admin: [
        {
            path: "/",
            element: <AdminLayout />,
            children: [
                // { path: "/", element: <Home /> },
                { path: "/", element: <Admindashboard /> },
                { path: "/signup", element: <LoginPage /> },
                { path: "/allproduct", element: <Allproducts /> },
                { path: "/Addstock", element: <StockFile /> },
                { path: "/Allloation", element: <Alllocation /> },
                { path: "/Subscriber", element: <Subscribeuser /> },
                { path: "/Allcategories", element: <Allcategories /> },
                { path: "/Allvariations", element: <Allvariations /> },
                { path: "/Allbrands", element: <Allbrands /> },
                { path: "/Allunit", element: <Allunit /> },
                { path: "/Alltaxes", element: <Alltaxes /> },
                { path: "*", element: "NO PAGE FOUND" },
            ],
        },
    ],  
    user: [
        {
            path: "/",
            element: <CustomerLayout />,
            children: [
                { path: "/", element: <Homepage /> }
            ]
        }
    ]
};

export const protect =
    role && isLoggedIn ? protects[role] : protects["default"];
export const defaultProtect = protects["default"];
