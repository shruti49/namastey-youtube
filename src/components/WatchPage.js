import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setComponentName, toggleMenu } from "../utils/redux/appSlice";
import CommentsContainer from "./CommentsContainer";
import { endTheBar } from "../utils/loadingBar";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  //We can't use useParams bcos the url doesn't contain normal params instead it has searchParams
  //So we will use useSerachParams

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    endTheBar();
  }, []);

  useEffect(() => {
    dispatch(setComponentName("WatchPage"));
    dispatch(toggleMenu());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-row mx-28 justify-between">
      <div className="flex flex-col">
        <iframe
          className="rounded-xl"
          width="700"
          height="400"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <CommentsContainer />
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchPage;
