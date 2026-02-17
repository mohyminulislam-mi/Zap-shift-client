import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import Logo from "../pages/Shared/Logo";
import {
  FaBoxOpen,
  FaHistory,
  FaUsers,
  FaHome,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoSettingsSharp, IoNotificationsOutline } from "react-icons/io5";
import { MdAssignmentAdd, MdDirectionsBike, MdClose } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const { user, logOut } = useAuth();
  const { role } = useRole();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { to: "/dashboard", icon: <FaHome />, label: "Homepage" },
    { to: "/dashboard/My-Parcel", icon: <FaBoxOpen />, label: "My Parcel" },
    {
      to: "/dashboard/payment-history",
      icon: <FaHistory />,
      label: "Payment History",
    },
  ];

  const adminItems = [
    {
      to: "/dashboard/approve-riders",
      icon: <MdDirectionsBike />,
      label: "Approve Riders",
    },
    {
      to: "/dashboard/assign-riders",
      icon: <MdAssignmentAdd />,
      label: "Assign Riders",
    },
    {
      to: "/dashboard/user-management",
      icon: <FaUsers />,
      label: "User Management",
    },
  ];

  const renderLinks = (items) =>
    items.map((item) => (
      <li key={item.to} className="mb-1">
        <NavLink
          to={item.to}
          end
          onClick={() => setIsSidebarOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-primary text-black shadow-md"
                : "hover:bg-base-300 text-base-content/80"
            }`
          }
        >
          <span className="text-xl">{item.icon}</span>
          <span className="font-medium">{item.label}</span>
        </NavLink>
      </li>
    ));

  return (
    <div className="flex h-screen bg-base-100 overflow-hidden text-base-content">
      {/* --- Sidebar for Desktop --- */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-base-200 border-r border-base-300 transition-transform duration-300 transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 flex items-center justify-between">
            <Logo />
            <button
              className="lg:hidden text-2xl"
              onClick={() => setIsSidebarOpen(false)}
            >
              <MdClose />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 overflow-y-auto custom-scrollbar">
            <ul className="menu p-0">
              <div className="text-xs font-bold text-base-content/40 uppercase mb-2 px-4">
                Menu
              </div>
              {renderLinks(navItems)}

              {role === "admin" && (
                <>
                  <div className="text-xs font-bold text-base-content/40 uppercase mt-6 mb-2 px-4">
                    Admin Panel
                  </div>
                  {renderLinks(adminItems)}
                </>
              )}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-base-300">
            <NavLink
              to="/dashboard/setting"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-base-300 transition-colors mb-2"
            >
              <IoSettingsSharp className="text-xl" />
              <span className="font-medium">Settings</span>
            </NavLink>
            <button
              onClick={logOut}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-error hover:bg-error/10 transition-colors w-full cursor-pointer"
            >
              <FaSignOutAlt className="text-xl" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 flex items-center justify-between px-4 lg:px-8 bg-base-100 border-b border-base-300 z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="btn btn-ghost btn-sm lg:hidden"
            >
              <FaBars className="text-xl" />
            </button>
            <h2 className="text-lg font-semibold hidden md:block capitalize">
              Welcome back, {user?.displayName?.split(" ")[0] || "User"}!
            </h2>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Notification */}
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <IoNotificationsOutline className="text-2xl" />
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-2 border-primary/20"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL || "https://ui-avatars.com/api/?name=User"
                    }
                    alt="Avatar"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-300"
              >
                <li className="px-4 py-2 font-bold border-b border-base-200 mb-1">
                  {user?.displayName}
                </li>
                <li>
                  <a>Profile</a>
                </li>
                <li className="text-error" onClick={logOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-base-200/50">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
