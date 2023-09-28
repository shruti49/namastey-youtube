import React from "react";

const Button = ({ name }) => {
  return (
    <p className="bg-gray-100 rounded-lg ml-2 py-1 px-3 text-sm font-normal cursor-pointer hover:bg-gray-200">{name}</p>
  );
};

export default Button;
