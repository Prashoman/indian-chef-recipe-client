import React from "react";
import Header from "../pages/home/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/home/Footer";

const DetailsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default DetailsLayout;
