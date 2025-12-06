import React from "react";
import Home from "../pages/Home/Home/Home";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="sticky top-0 z-50 py-4">
        <Header />
      </header>
      <Outlet>
        <Home />
      </Outlet>
      <Footer />
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
        draggable
        theme="light"
      />
    </div>
  );
};

export default MainLayout;
