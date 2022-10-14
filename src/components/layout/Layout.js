/** @format */

import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
