import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/redux/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/redux/searchSlice";
import { Link } from "react-router-dom";
import { beginTheBar } from "../utils/loadingBar";

const Header = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const { menuStatus, componentName } = useSelector((store) => store.app);

  const collapseSidebar = () => {
    switch (componentName) {
      case "MainContainer":
        if (menuStatus === "full") {
          dispatch(toggleMenu("short"));
        } else if (menuStatus === "short") {
          dispatch(toggleMenu("full"));
        }
        break;
      case "WatchPage":
        if (menuStatus === "full") {
          dispatch(toggleMenu("close"));
        } else if (menuStatus === "close") {
          dispatch(toggleMenu("full"));
        }
        break;

      default:
        break;
    }
  };

  const getSearchSuggestions = async (searchQuery) => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    // console.log(data[1]);

    //update SearchCache
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );

    setSearchResults(data[1]);
  };

  /*
  -------------DEBOUNCING------------
  cycle keeps on repeating for every search query
  key - i
  - component render
  - useEffect called
  - timer started and made an api call after 200ms

    key - ip
  - timer destroyed
  - component render
  - useEffect called
  - timer started and made an api call after 200ms
  */

  useEffect(() => {
    //make an api call after every keypress
    //but if the difference between 2 api calls is less then 200ms
    //decline the api calls

    const timer = setTimeout(() => {
      //if searched keyword is already present in the
      //cache then fetch results from cache
      if (searchCache[searchQuery]) {
        setSearchResults(searchCache[searchQuery]);
      } else {
        //else do a new api call
        getSearchSuggestions(searchQuery);
      }
    }, 200);
    //After every re-render I want my timer
    //to be destroyed so that the timers
    //dont get compiled in queue
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  // console.log(showSuggestions);

  return (
    <div className="grid grid-flow-col px-7 pt-3 pb-4 items-center fixed w-full bg-white">
      <div className="flex col-span-1">
        <button onClick={collapseSidebar}>
          <img
            alt="sidebar-icon"
            src="hamburger-icon.png"
            className="h-6 cursor-pointer"
          />
        </button>

        <Link to="/">
          <img src="youtube-logo.png" alt="youtube-logo" className="h-6 ml-6" />
        </Link>
      </div>
      <div className="col-span-10 px-12 z-50">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => handleBlur()}
            className="w-8/12 border border-r-0 border-gray-400 rounded-l-full py-2 px-4 focus:outline-none"
          />
          <button className="border border-gray-400 rounded-r-full bg-gray-100 px-2">
            <img src="search-icon.png" alt="search-icon" className=" h-10" />
          </button>
          {showSuggestions && (
            <div className="fixed top-14 w-[48%] pr-[48px] z-50">
              <ul className="py-2 bg-white border border-gray-100 shadow-lg rounded-lg ">
                {searchResults.map((result) => (
                  <Link
                    to={`/results?search_query=${result.replace(/ /g, "+")}`}
                    key={result}
                    onClick={() => {
                      setShowSuggestions(false);
                      beginTheBar();
                    }}
                  >
                    <li className="px-2 flex items-center hover:bg-gray-100 cursor-pointer open:border-spacing-4">
                      <img
                        src="search-icon.png"
                        alt="search-icon"
                        className="h-8"
                      />
                      {result}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1 flex justify-end">
        <img src="user-icon.png" alt="user-icon" className="h-6" />
      </div>
    </div>
  );
};

export default Header;
