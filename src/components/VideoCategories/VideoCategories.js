import React from "react";
import { useVideo } from "../../context/video-context/video-context";
import "./VideoCategories.css";

export const VideoCategories = () => {
  const { videoDispatch } = useVideo();

  const cateogriesButton = [
    { id: "1", category: "all", dispatch: "ALL" },
    { id: "2", category: "cricket", dispatch: "CRICKET" },
    { id: "3", category: "football", dispatch: "FOOTBALL" },
    { id: "4", category: "tennis", dispatch: "TENNIS" },
    { id: "5", category: "hockey", dispatch: "HOCKEY" },
  ];

  return (
    <div className="video-categories">
      {cateogriesButton.map(({ id, category, dispatch }) => {
        return (
          <div key={id}>
            <button
              className="btn video-button"
              onClick={() => {
                videoDispatch({ type: dispatch });
              }}
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
};