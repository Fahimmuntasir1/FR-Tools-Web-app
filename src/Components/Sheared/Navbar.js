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
    <div className="navbar bg-amber-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
            <li>
              <NavLink className="mx-3" to="/portfolio">
                My Portfolio
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          FR - Computers
        </Link>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
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
            <li>
              <NavLink className="mx-3" to="/portfolio">
                My Portfolio
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:block">
          {!user && (
            <div className="flex">
              <NavLink to="login" className="btn btn-outline   mx-2">
                Log in
              </NavLink>
              <NavLink to="signup" className="btn btn-outline btn-accent mr-3">
                Sign up
              </NavLink>
            </div>
          )}
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={
                  user.photoURL
                    ? user.photoURL
                    : `https://i.ibb.co/PMQQ6Kz/icon-user-default.png`
                }
                alt=""
              />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>{user && <NavLink to="/dashboard">Dashboard</NavLink>}</li>
            <div className="lg:hidden">
              {!user && (
                <div className="flex flex-col">
                  <NavLink to="login" className="btn btn-outline   mx-2">
                    Log in
                  </NavLink>
                  <NavLink
                    to="signup"
                    className="btn btn-outline btn-accent mr-3"
                  >
                    Sign up
                  </NavLink>
                </div>
              )}
            </div>
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
