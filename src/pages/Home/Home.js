import React from "react";
import "./Home.css";
import { ExploreVideos, Categories, Social } from "../../components/index";
export const Home = () => {
  return (
    <div className="home">
      <ExploreVideos />
      <Categories />
      <Social />
    </div>
  );
};