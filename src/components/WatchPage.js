import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  //We can't use useParams bcos the url doesn't contain normal params instead it has searchParams
  //So we will use useSerachParams

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

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
