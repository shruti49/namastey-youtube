import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-flow-col pt-20">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
