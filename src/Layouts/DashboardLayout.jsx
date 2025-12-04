import React from "react";
import { NavLink, Outlet } from "react-router";
import Logo from "../pages/Shared/Logo";
import { FaBoxOpen, FaHistory } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { BsLayoutTextSidebar } from "react-icons/bs";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300 flex items-center justify-between">
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
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
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
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />{" "}
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="image"
                    src={user?.photoURL || user.reloadUserInfo.photoUrl}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
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
                to="/dashboard/My-Parcel"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Parcel"
              >
                {/* Settings icon */}
                <FaBoxOpen />
                <span className="is-drawer-close:hidden">My Parcel</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/payment-history"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Payment History"
              >
                {/* Settings icon */}
                <FaHistory />
                <span className="is-drawer-close:hidden">Payment History</span>
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
                <span className="is-drawer-close:hidden">Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
