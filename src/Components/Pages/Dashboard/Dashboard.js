import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <h2 className="uppercase text-2xl">DashBoard</h2>
        <Outlet />
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-yellow-100 text-base-content">
          <li>
            <Link to="myProfile">My Profile</Link>
          </li>
          <li>
            <Link to="manageOrders">Manage All Orders</Link>
          </li>
          <li>
            <Link to="addProduct">Add A Product</Link>
          </li>
          <li>
            <Link to="makeAdmin">Make Admin</Link>
          </li>
          <li>
            <Link to="manageProducts">Manage Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
