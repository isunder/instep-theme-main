import React, { memo } from "react";
import { Outlet, Navigate } from "react-router";
import Usernavbar from "../component/user/UserHeader/usernavbar/usernavbar";
import MainFooter from "../component/user/UserHeader/usernavbar/footer";

function Layout() {
  const token = localStorage.getItem("token");
  return token ? (
    <>
      <Usernavbar />
      <Outlet />
      <MainFooter />
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default memo(Layout);
