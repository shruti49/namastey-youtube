import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "Gaming", "Movies", "Songs", "Live","Cricket","Soccer","Cooking","Bhajan"];

  return (
    <div className="flex fixed bg-white w-full top-[65px] py-3 z-40">
      {list.map((ele) => (
        <Button name={ele} key={ele}/>
      ))}
    </div>
  );
};

export default ButtonList;
