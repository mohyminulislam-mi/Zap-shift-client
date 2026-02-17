import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to={"/"} className="flex items-end ">
        <img src={logo} alt="logo" />
        <h1 className="font-bold text-3xl -ms-3">ShiftFy</h1>
      </Link>
    </div>
  );
};

export default Logo;
