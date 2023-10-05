import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setComponentName, toggleMenu } from "../utils/redux/appSlice";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { beginTheBar } from "../utils/loadingBar";
import { endTheBar } from "../utils/loadingBar";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const ref = useRef(true);

  const dispatch = useDispatch();

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVideos(data?.items);
  };

  useEffect(() => {
    if (ref.current) {
      endTheBar();
    }
  }, [ref]);

  useEffect(() => {
    dispatch(setComponentName("VideoContainer"));
    dispatch(toggleMenu("full"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap justify-between">
      {videos.length > 0 &&
        videos.map((video) => (
          <Link
            to={`/watch?v=${video.id}`}
            key={video.id}
            onClick={() => beginTheBar()}
          >
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
