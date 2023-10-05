import React from "react";
import { useSelector} from "react-redux";


import ButtonList from "./ButtonList";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  const { menuStatus, componentName } = useSelector((store) => store.app);

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
      {(componentName === "VideoContainer" ||
        componentName === "SearchResults") && <ButtonList />}
      <Outlet />
    </div>
  );
};

export default MainContainer;
