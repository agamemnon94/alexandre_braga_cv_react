import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../App.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
