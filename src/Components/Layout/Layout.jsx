import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../App.css";

const Layout = ({ children, section2Ref }) => {
  return (
    <div>
      <Header section2Ref={section2Ref} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
