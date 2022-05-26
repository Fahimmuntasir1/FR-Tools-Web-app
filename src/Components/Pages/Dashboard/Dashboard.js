import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content m-3">
        <label
          tabIndex="0"
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden flex justify-end align-text-top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <h2 className="uppercase text-4xl font-semibold text-secondary py-2">
          Welcome to DashBoard
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-yellow-50 text-base-content">
          <li>
            <Link to="myProfile">My Profile</Link>
          </li>
          { !admin &&
            <li>
            <Link to="myOrders">My Orders</Link>
          </li>}
          {admin &&
            <li>
              <Link to="manageOrders">Manage All Orders</Link>
            </li>
          }
          <li>
            <Link to="addProduct">Add A Product</Link>
          </li>
          {admin &&
            <li>
              <Link to="makeAdmin">Make Admin</Link>
            </li>
          }
          <li>
            <Link to="addReview">Add A Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
