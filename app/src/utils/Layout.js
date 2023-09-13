import React, { memo } from "react";
import { Outlet, Navigate } from "react-router";
import Usernavbar from "../component/user/UserHeader/usernavbar/usernavbar";
import Footer from "../component/user/UserHeader/usernavbar/footer";

function Layout() {
  const token = localStorage.getItem("token");
  return token ? (
    <>
      <Usernavbar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default memo(Layout);
