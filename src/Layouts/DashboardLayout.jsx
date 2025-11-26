import React from "react";
import { NavLink, Outlet } from "react-router";
import Logo from "../pages/Shared/Logo";
import { FaBoxOpen } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsLayoutTextSidebar } from "react-icons/bs";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  console.log(user?.email);
  
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <BsLayoutTextSidebar />
            </label>
            <div className="px-3">
              <Logo />
            </div>
          </div>
          <div className="text-end">
            <div>
              <img src={user?.photoUrl} alt="" />
              <h1> {user?.displayName}</h1>
              <p> {user?.email}</p>
            </div>
          </div>
        </nav>
        {/* Page content here */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <NavLink
                to="/dashboard"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Homepage</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to="/dashboard/my-parcel"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <FaBoxOpen />
                <span className="is-drawer-close:hidden">my parcel</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/setting"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <IoSettingsSharp />
                <span className="is-drawer-close:hidden">my parcel</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
