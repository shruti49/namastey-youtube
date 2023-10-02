import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const menuStatus = useSelector((store) => store.app.menuStatus);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div
      className={`p-2 mb-6 cursor-pointer ${
        menuStatus === "full"
          ? "w-[370px] "
          : menuStatus === "short"
          ? "w-[415px]"
          : ""
      }`}
    >
      <img
        src={thumbnails.medium.url}
        alt="video-thumbnail"
        className="rounded-xl w-full hover:rounded-none"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-sm font-medium">{channelTitle}</li>
        <li className="text-sm">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
