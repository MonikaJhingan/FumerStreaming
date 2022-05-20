import React, { useEffect } from "react";
import "./VideoWatchLater.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth, useWatchLater } from "context";


export const VideoWatchLater = () => {
  const { watchLaterVideos, setWatchLaterVideos } = useWatchLater();

  const { auth } = useAuth();
  useEffect(() => {
    (async () => {
      const response = await axios({
        method: "get",
        url: "/api/user/watchlater",
        headers: { authorization: auth.token },
      });
      setWatchLaterVideos(response.data.watchlater);
    })();
  }, [auth.token, setWatchLaterVideos]);

  const removeWatchLater = (_id) => {
    (async () => {
      const response = await axios.delete(`/api/user/watchlater/${_id}`, {
        headers: { authorization: auth.token },
      });
      setWatchLaterVideos(response.data.watchlater);
    })();
  };

  return (
    <div className="video-watch-later">
      {watchLaterVideos.length > 0 &&
        watchLaterVideos.map(({ thumbnail, title, _id }) => {
          return (
            <div className="card card-image" key={_id}>
              <Link to={`/video/${_id}`}>
                <img src={thumbnail} alt={title} className="card-logo" />
              </Link>
              <p className="card-title watch-later-title">{title}</p>
              <button
                className="btn btn-success watch-later-remove"
                onClick={() => removeWatchLater(_id)}
              >
                remove
              </button>
            </div>
          );
        })}
    </div>
  );
};