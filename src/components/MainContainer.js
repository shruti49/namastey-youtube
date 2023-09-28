import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={isMenuOpen ? "col-span-10 pl-56 pr-4" : "col-span-10 pl-[6rem] pr-4"}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
