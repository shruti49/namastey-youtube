import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { GOOGLE_API_KEY, YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { setComponentName, toggleMenu } from "../utils/redux/appSlice";
import { endTheBar, beginTheBar } from "../utils/loadingBar";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const ref = useRef(true);

  const fetchVideosFromSearchResults = async (searchParams) => {
    const response = await fetch(
      `${
        YOUTUBE_SEARCH_RESULTS_API +
        searchParams.get("search_query").replace(/ /g, "+")
      }&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();
    setSearchResults(data.items);
    endTheBar();
  };

  useEffect(() => {
    fetchVideosFromSearchResults(searchParams);
  }, [searchParams]);

  useEffect(() => {
    if (ref.current) {
      endTheBar();
    }
  }, [ref]);

  useEffect(() => {
    dispatch(setComponentName("SearchResults"));
    dispatch(toggleMenu("full"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {searchResults &&
        searchResults.map((result) => (
          <Link
            key={result.id.videoId}
            to={`/watch?v=${result.id.videoId}`}
            onClick={() => beginTheBar()}
          >
            <SearchResultCard data={result.snippet} />
          </Link>
        ))}
    </>
  );
};

export default SearchResults;

//fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=live+cricket&key=AIzaSyCE7N9j9SnjehVZ37KRx6WObUZF4Xiwuhw").then(response => response.json()).then(data => console.log(data))
