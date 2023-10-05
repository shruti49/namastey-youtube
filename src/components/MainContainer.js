import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setComponentName, toggleMenu } from "../utils/redux/appSlice";
import VideoContainer from "./VideoContainer";
import { endTheBar } from "../utils/loadingBar";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  const menuStatus = useSelector((store) => store.app.menuStatus);

  const ref = useRef(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (ref.current) {
      endTheBar();
    }
  }, [ref]);

  useEffect(() => {
    dispatch(setComponentName("MainContainer"));
    dispatch(toggleMenu("full"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={
        menuStatus === "full"
          ? "col-span-10 pl-60 pr-4"
          : menuStatus === "short"
          ? "col-span-10 pl-[6rem] pr-4"
          : ""
      }
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
