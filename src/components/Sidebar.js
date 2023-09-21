import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [linkStyle, setLinkStyle] = useState("");

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return pattern makes more sense
  if (!isMenuOpen) return null;

  const addStyling = () => {
    setLinkStyle("bg-gray-100 font-semibold rounded-lg");
  };

  const videoSection = [
    "Library",
    "History",
    "Your Videos",
    "Watch Later",
    "Downloads",
    "Liked Videos",
    "Show More"
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
    <div className="mx-4 col-span-2 fixed bg-white h-5/6 hover:overflow-y-auto overflow-hidden">
      <div className="relative">
        <h2
          className={` text-black hover:bg-gray-100 hover:rounded-lg px-12 cursor-pointer ${linkStyle}`}
        >
          <Link to="/" onClick={addStyling}>
            Home
          </Link>
        </h2>
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
    </div>
  );
};

export default Sidebar;
