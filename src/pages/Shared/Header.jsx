import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import { FiArrowUpRight } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logOut, setUser } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast.success("Logout successful");
        setUser(null)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/coverage"}>Coverage</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/pricing"}>Pricing</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={"/send-parcel"}>Send Parcel</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          <Logo />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-medium">{links}</ul>
      </div>
      <div className="navbar-end flex gap-2">
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-primary coursor-pointer"
          >
            logout
          </button>
        ) : (
          <>
            <Link
              to={"/login"}
              className="btn btn-outline outline-primary font-bold hover:bg-primary hover:text-secondary"
            >
              Sing In
            </Link>
            <Link
              to={"/registration"}
              className="btn bg-primary  text-secondary  font-bold"
            >
              Sing Up
            </Link>
            <Link
              to={"/rider"}
              className=" p-2 bg-black rounded-full cursor-pointer"
            >
              <FiArrowUpRight className="text-primary text-2xl" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
