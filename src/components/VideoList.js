import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_BASE_API } from "../utils/constants";

const VideoList = ({ categoryId }) => {
  const [videoIds, setVideoIds] = useState([]);
  const [videoList, setVideoList] = useState([]);

  const fetchVideoIdsByCategoryId = async () => {
    const response = await fetch(
      `${YOUTUBE_BASE_API}/videos?chart=mostPopular&&regionCode=IN&videoCategoryId=${categoryId}&maxResults=25&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();

    setVideoIds(data.items);
  };

  const fetchVideosByIds = async (str) => {
    const response = await fetch(
      `${YOUTUBE_BASE_API}/videos?part=snippet%2CcontentDetails&id=${str}&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();
    setVideoList(data.items);
    console.log(data.items);
  };

  useEffect(() => {
    fetchVideoIdsByCategoryId();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let str = "";
    for (let i = 0; i < videoIds.length; i++) {
      str += videoIds[i].id;
      if (i !== videoIds.length - 1) {
        str += "%2C";
      }
    }
    fetchVideosByIds(str);
  }, [videoIds]);

  return (
    <div className="flex flex-col">
      {videoList.map((video) => {
        const { channelTitle, title, thumbnails, liveBroadcastContent } =
          video.snippet;
        return (
          <div className="flex mb-2" key={video.id}>
            <img
              src={thumbnails.medium.url}
              alt=""
              className="rounded-xl hover:rounded-none w-[170px] h-[95px]"
            />
            <div className="flex flex-col ml-2">
              <h1 className="text-sm font-semibold">
                {title.length > 50
                  ? title.substring(0, 48) + "..."
                  : title.substring(0, 50)}
              </h1>
              <div className="my-2">
                <p className="text-xs text-gray-500">{channelTitle}</p>
              </div>
              <div className="w-10 mt-4">
                <h5 className="font-semibold bg-red-600 text-white px-2 text-sm">
                  {liveBroadcastContent === "live" ? "LIVE" : ""}
                </h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;
