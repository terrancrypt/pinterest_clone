import React, { useEffect } from "react";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";
import HeaderUserMenu from "./HeaderUserMenu";

const Header = () => {
  // useEffect (()=>{
  //     const header = document.querySelector(".header");

  // },[])
  return (
    <div className="header fixed top-0 right-0 left-0 z-50 bg-white">
      <div className="flex justify-between items-center h-20 space-x-4 py-1 px-4">
        <HeaderNav />
        <HeaderSearch />
        <HeaderUserMenu />
      </div>
    </div>
  );
};

export default Header;
