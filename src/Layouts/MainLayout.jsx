import React from "react";
import Home from "../pages/Home/Home/Home";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Header />
      </header>
      <Outlet>
        <Home />
      </Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;
