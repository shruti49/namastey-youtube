import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { GOOGLE_API_KEY, YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { endTheBar } from "../utils/loadingBar";

const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const fetchDataFromSearchResults = async (searchParams) => {
    // const response = await fetch(
    //   `${
    //     YOUTUBE_SEARCH_RESULTS_API +
    //     searchParams.get("search_query").replace(/ /g, "+")
    //   }&key=${GOOGLE_API_KEY}`
    // );
    // const data = response.json();
    // console.log(data);
    endTheBar()
  };

  useEffect(() => {
    fetchDataFromSearchResults(searchParams);
  }, [searchParams]);

  return <div className="col-span-10 ml-56">SearchResults</div>;
};

export default SearchResults;

//fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=live+cricket&key=AIzaSyCE7N9j9SnjehVZ37KRx6WObUZF4Xiwuhw").then(response => response.json()).then(data => console.log(data))
