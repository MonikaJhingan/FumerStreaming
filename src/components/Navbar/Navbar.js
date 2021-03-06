import React from "react";
import { useAuth, useVideo } from "../../context/index";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FcStart } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";


export const Navbar = () => {
  const { auth } = useAuth();
  const { pathname } = useLocation();
  const { videoDispatch, search} = useVideo();

  const searchVideos = (e) => {
    videoDispatch({ type: "SEARCH_VIDEO" , payload: e.target.value});
  }

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
      {pathname === "/explore" && (
        <div className="search">
          <i className="fas fa-search search-background"></i>
          <input
            type="text"
            placeholder="search videos"
            className="search-bar"
            onChange={searchVideos}
            value={search}
          />
        </div>
      )}
      <div className="menu">
        <ul>
          <li className="menu-items">
            {auth.user ? (
              <Link to="/profile" className="text-decorations text-white">
                <FaUserCircle />
              </Link>
            ) : (
              <Link to="/login" className="text-decorations text-white">
                login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};