import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { beginTheBar } from "../utils/loadingBar";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVideos(data?.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  // useEffect(()=>{
  //   //window.onscroll=()=>this does work/
  //   const handleScroll=()=>{
  //     console.log(videos.length)
  //   }
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [videos]) 


  return (
    <div
      className="flex flex-wrap justify-between pt-10"
      
    >
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to={`/watch?v=${video.id}`} key={video.id} onClick={() => beginTheBar()}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
