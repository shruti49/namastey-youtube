import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 w-[355px] mb-6">
      <img src={thumbnails.medium.url} alt="video-thumbnail" className="rounded-lg w-full"/>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-sm font-medium">{channelTitle}</li>
        <li className="text-sm">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
