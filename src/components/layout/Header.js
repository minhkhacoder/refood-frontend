/** @format */

import { DropdownProvider } from "components/dropdown/dropdown-context";
import React from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = ({ props }) => {
  return (
    <>
      <DropdownProvider>
        <HeaderTop className="ht"></HeaderTop>
        <HeaderBottom className="hb"></HeaderBottom>
      </DropdownProvider>
    </>
  );
};

export default Header;
