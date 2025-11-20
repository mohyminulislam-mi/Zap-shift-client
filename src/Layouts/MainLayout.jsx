import React from "react";
import Home from "../pages/Home/Home/Home";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Outlet>
        <Home />
      </Outlet>
    </div>
  );
};

export default MainLayout;
