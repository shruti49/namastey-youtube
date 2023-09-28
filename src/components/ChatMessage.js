import React from "react";

const ChatMessage = ({ name, text }) => {
  return (
    <div className="flex items-center mx-6 my-2">
      <img src="user-icon.png" alt="user-icon" className="h-6" />
      <h5 className="text-sm ml-4 text-slate-500 font-medium">{name}</h5>
      <p className="text-xs ml-2">{text}</p>
    </div>
  );
};

export default ChatMessage;