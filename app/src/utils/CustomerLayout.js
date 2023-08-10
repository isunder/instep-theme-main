import React from "react";
import Navbar from "../component/user/UserHeader/usernavbar/usernavbar";
import { Outlet } from "react-router";

function CustomerLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default CustomerLayout;
