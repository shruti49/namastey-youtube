import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { beginTheBar } from "../utils/loadingBar";

const Sidebar = () => {
  const [linkStyle, setLinkStyle] = useState("");

  const menuStatus = useSelector((store) => store.app.menuStatus);

  const addStyling = () => {
    setLinkStyle("bg-gray-100 font-semibold rounded-lg");
    beginTheBar();
  };

  const videoSection = [
    "Library",
    "History",
    "Your Videos",
    "Watch Later",
    "Downloads",
    "Liked Videos",
    "Show More",
  ];

  const exploreSection = [
    "Trending",
    "Shopping",
    "Movies",
    "Music",
    "Live",
    "Gaming",
    "News",
  ];

  return (
    <div className="fixed bg-white col-span-2 h-5/6 hover:overflow-y-auto overflow-hidden">
      {menuStatus === "full" ? (
        <div className="mx-3">
          <Link to="/" onClick={addStyling}>
            <h2
              className={` text-black hover:bg-gray-100 hover:rounded-lg px-12 cursor-pointer py-2 ${linkStyle}`}
            >
              Home
            </h2>
          </Link>
          <h2 className=" text-black px-12 cursor-pointer hover:bg-gray-100 hover:rounded-lg py-2 mt-1">
            Shorts
          </h2>
          <h2 className=" text-black px-12 cursor-pointer hover:bg-gray-100 hover:rounded-lg py-2">
            Subscriptions
          </h2>
          <div className="border border-gray-100 my-2"></div>

          {videoSection.map((ele, index) => (
            <h2
              className={`text-black hover:bg-gray-100 hover:rounded-lg px-12 py-2 cursor-pointer`}
              key={index}
            >
              {ele}
            </h2>
          ))}

          <div className="border border-gray-100 my-2"></div>

          <h1>Explore</h1>
          {exploreSection.map((ele, index) => (
            <h2
              className={`text-black hover:bg-gray-100 hover:rounded-lg px-12 py-2 cursor-pointer`}
              key={index}
            >
              {ele}
            </h2>
          ))}
        </div>
      ) : menuStatus === "short" ? (
        <div className="flex flex-col fixed bg-white items-center ml-1">
          <div className="flex flex-col pb-3 items-center">
            <img src="home.png" alt="" className="h-6 w-6 mb-1" />
            <p className="text-xs font-medium">Home</p>
          </div>
          <div className="flex flex-col py-3 items-center">
            <img src="shorts.png" alt="" className="h-6 w-6 mb-1" />
            <p className="text-xs font-medium">Shorts</p>
          </div>
          <div className="flex flex-col py-3 items-center">
            <img src="subscribe.png" alt="" className="h-6 w-6 mb-1" />
            <p className="text-xs font-medium">Subscriptions</p>
          </div>
          <div className="flex flex-col py-3 items-center">
            <img src="library.png" alt="" className="h-6 w-6 mb-1" />
            <p className="text-xs font-medium">Library</p>
          </div>
          <div className="flex flex-col py-3 items-center">
            <img src="download.png" alt="" className="h-6 w-6 mb-1" />
            <p className="text-xs font-medium">Downloads</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Sidebar;
