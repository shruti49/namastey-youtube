import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "Gaming", "Movies", "Songs", "Live","Cricket","Soccer","Cooking","Bhajan"];

  return (
    <div className="flex bg-white w-full top-[70px] py-3">
      {list.map((ele) => (
        <Button name={ele} key={ele}/>
      ))}
    </div>
  );
};

export default ButtonList;
