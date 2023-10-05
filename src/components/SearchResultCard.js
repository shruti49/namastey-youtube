import React from "react";

const SearchResultCard = ({ data }) => {
  const { channelTitle, title, thumbnails, description, liveBroadcastContent } =
    data;

  return (
    <div className="flex mb-4">
      <img
        src={thumbnails.medium.url}
        alt=""
        className="rounded-xl hover:rounded-none w-[360px] h-[200px]"
      />
      <div className="flex flex-col ml-4">
        <h1 className="text-lg">{title}</h1>
        <div className="my-4">
          <p className="text-sm text-gray-500">{channelTitle}</p>
        </div>
        <p className="text-sm">{description}</p>
        <div className="w-10 mt-4">
          <h5 className="font-semibold bg-red-600 text-white px-2 text-sm">
            {liveBroadcastContent === "live" ? "LIVE" : ""}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
