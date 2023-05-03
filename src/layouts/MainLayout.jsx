import React from "react";
import Header from "../pages/home/Header";
import { Outlet } from "react-router-dom";
import Menu from "../pages/home/Menu";
import Footer from "../pages/home/Footer";
import Services from "../pages/services/Services";
import SubscribleEmail from "../pages/services/SubscribleEmail";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <Outlet></Outlet>
      <Services></Services>
      <SubscribleEmail></SubscribleEmail>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
