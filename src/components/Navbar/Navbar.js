import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import "./Navbar.css";
import { FcStart } from "react-icons/fc";



export const Navbar = () => {

  return (
    <nav className="nav-menu navbar">
      <ul>
      <li className="menu-items"> 
      <FcStart/>
      </li>
        <li className="menu-items">
          <Link to="/" className="text-decorations text-white nav-logo">
            FumerStreaming
          </Link>
        </li>
        

        <li className="menu-items">
          <Link to="/" className="text-decorations text-white">
            Home
          </Link>
        </li>

        <li className="menu-items fas-icons">
          <Link to="/explore" className="text-decorations text-white">
            Explore
          </Link>
        </li>
      </ul>
      <div className="search">
        <i className="fas fa-search search-background"></i>
        <input type="text" placeholder="SearchVideos" className="search-bar" />
      </div>
      <div className="menu">
        <ul>
          <li className="menu-items">
            <Link to="/login" className="text-decorations text-white text-login">
              login
            </Link>
          </li>

          <li className="menu-items fas-icons ">
          <MdDarkMode />
        </li>
        </ul>
      </div>
    </nav>
  );
};