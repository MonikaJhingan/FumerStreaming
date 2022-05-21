import React from "react";
import "./ExploreVideos.css";
import {Link} from 'react-router-dom';

export const ExploreVideos = () => {

  return (
    <div className="explore-section">
      <img
        src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1905"
        alt="cricket"
        className="img-responsive img"
      ></img>
      <div className="explore-section-main">
        <h1 className="explore-heading gray-text">
          Browse and Watch your favourite sports videos.
        </h1>

        <button className="btn btn-secondary explore-btn"><Link to='/explore' className="text-white">Watch Now</Link></button>
      </div>
    </div>
  );
};