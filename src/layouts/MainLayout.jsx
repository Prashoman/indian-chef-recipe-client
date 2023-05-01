import React from "react";
import Header from "../pages/home/Header";
import { Outlet } from "react-router-dom";
import Menu from "../pages/home/Menu";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
