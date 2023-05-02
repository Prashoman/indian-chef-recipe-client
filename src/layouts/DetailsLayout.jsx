import React from "react";
import Header from "../pages/home/Header";
import { Outlet } from "react-router-dom";

const DetailsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default DetailsLayout;
