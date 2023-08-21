import React, { memo } from "react";
import { Outlet, Navigate } from "react-router";
import Usernavbar from "../component/user/UserHeader/usernavbar/usernavbar";

function Layout() {
  const token = localStorage.getItem("token");
  return token ? (
    <>
      <Usernavbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default memo(Layout);
