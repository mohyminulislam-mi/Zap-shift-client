import React from "react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div>
      <div className="flex items-end">
              <img src={logo} alt="logo" />
              <h1 className="font-bold text-3xl -ms-3">ZapShift</h1>
      </div>
    </div>
  );
};

export default Logo;
