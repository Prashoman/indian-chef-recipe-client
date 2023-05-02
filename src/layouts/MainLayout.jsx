import React from "react";
import Header from "../pages/home/Header";
import { Outlet } from "react-router-dom";
import Menu from "../pages/home/Menu";
import Footer from "../pages/home/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
