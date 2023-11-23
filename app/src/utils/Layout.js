import React, { memo } from "react";
import { Outlet, Navigate } from "react-router";
import Usernavbar from "../component/user/UserHeader/usernavbar/usernavbar";
import MainFooter from "../component/user/UserHeader/usernavbar/footer";
import { useLocation } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();

  const token = localStorage.getItem("token");
  return token ? (
    <>
      {pathname === "/deliverydetail/id" ? (
        <>
          <Usernavbar />
          <Outlet />
        </>
      ) : (
        <>
          <Usernavbar />
          <Outlet />
          <MainFooter />
        </>
      )}
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default memo(Layout);
