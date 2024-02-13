import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
