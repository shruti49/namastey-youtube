import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useGetVideoByIdQuery } from "../utils/redux/apiService";
import { setComponentName, toggleMenu } from "../utils/redux/appSlice";
import CommentsContainer from "./CommentsContainer";
import { endTheBar } from "../utils/loadingBar";
import VideoList from "./VideoList";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  //We can't use useParams bcos the url doesn't contain normal params instead it has searchParams
  //So we will use useSerachParams

  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    endTheBar();
  }, []);

  useEffect(() => {
    dispatch(setComponentName("WatchPage"));
    dispatch(toggleMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, error, isLoading } = useGetVideoByIdQuery(videoId);

  if (data === undefined) {
    return error;
  }

  console.log(data);
  const { snippet, id } = data.items[0];
  const { channelTitle, title, categoryId, liveBroadcastContent } = snippet;

  return (
    <div className="flex flex-row mx-28 justify-between">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div className="flex flex-col">
            <iframe
              className="rounded-xl"
              width="700"
              height="400"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <div className="my-4">
              <h1 className="font-semibold text-xl">{title}</h1>
              <div className="flex items-center my-4">
                <img src="user-icon.png" alt="user-icon" className="h-8" />
                <h2 className="ml-2 font-semibold text-lg">{channelTitle}</h2>
                <div className="ml-8">
                  <button className="border rounded-3xl px-4 py-2 font-semibold">
                    Join
                  </button>
                  <button className="ml-4 bg-black text-white rounded-3xl px-4 py-2 text-base">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <CommentsContainer />
          </div>
          <div className={`flex flex-col ml-6`}>
            {liveBroadcastContent === "live" && <LiveChat />}
            <div
              className={liveBroadcastContent === "live" ? "mt-8" : ""}
            ></div>
            <VideoList categoryId={categoryId} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default WatchPage;
