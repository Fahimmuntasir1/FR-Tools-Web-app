import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div class="navbar bg-base-200">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink className="mx-3" to="/tools">
                Tools
              </NavLink>
            </li>
            <li>
              <NavLink className="mx-3" to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink className="mx-3" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost text-xl font-bold">
          FR - Tools
        </Link>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <NavLink className="mx-2" to="/tools">
                Tools
              </NavLink>
            </li>
            <li>
              <NavLink className="mx-2" to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink className="mx-2" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="navbar-end">
        {!user && (
          <div className="flex">
            <NavLink to="login" className="btn btn-outline  btn-secondary mx-2">
              Log in
            </NavLink>
            <NavLink to="signup" className="btn btn-outline btn-primary mr-3">
              Sign up
            </NavLink>
          </div>
        )}
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" alt="" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/profile" class="justify-between">
                Profile
                <span class="badge">New</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            {user && (
              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
