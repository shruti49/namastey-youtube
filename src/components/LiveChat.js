import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import {
  generateRandomId,
  generateRandomName,
  generateRandomString,
} from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  //API Polling
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        addMessage({
          id: generateRandomId(),
          name: generateRandomName(),
          message: generateRandomString(),
        })
      );
    }, 1500);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const [liveMessage, setLiveMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addMessage({
        id: generateRandomId(),
        name: "Shruti Shastri",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <div className="w-[410px]">
      <div className="border rounded-tl-xl rounded-tr-xl py-4 px-6">
        <h1>Live Chat</h1>
      </div>
      <div className="border h-[400px] overflow-y-scroll flex flex-col-reverse bg-gray-50">
        {chatMessages.length > 0 &&
          chatMessages.map((msg) => (
            <ChatMessage name={msg.name} text={msg.message} key={msg.id} />
          ))}
      </div>
      <div className="border py-4 px-6">
        <div className="flex items-center">
          <img src="user-icon.png" alt="user-icon" className="h-6" />
          <h5 className="text-sm ml-4 text-slate-500 font-medium">
            Shruti Shastri
          </h5>
        </div>
        <form onSubmit={handleFormSubmit} className="flex flex-col">
          <input
            type="text"
            className="border-b-2 mt-3 focus:outline-none focus:border-b-2 focus:border-blue-400"
            placeholder="chat..."
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <div className="flex justify-end">
            <button className="px-4 py-2 mt-3 bg-gray-100 shadow-md rounded-lg">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
