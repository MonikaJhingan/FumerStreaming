import React from "react";
import { VideoCards, VideoCategories, Sidebar } from "components";
import "./Explore.css";
export const Explore = () => {
  return (
    <div className="explore-container">
      <Sidebar />
      <div className="explore-main">

      <VideoCategories />
      <VideoCards />
      </div>
    </div>
  );
};