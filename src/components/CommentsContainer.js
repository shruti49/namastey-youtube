import React from "react";

const commentsData = [
  {
    index: 1,
    name: "User1",
    text: "hey!!",
    replies: [
      {
        index: 12,
        name: "user2",
        text: "sup?",
        replies: [
          {
            index: 123,
            name: "user1",
            text: "Nothing much bro!!",
            replies: [
              {
                index: 1234,
                name: "user3",
                text: "Chilling in Goa :)",
                replies: [
                  {
                    index: 12345,
                    name: "user2",
                    text: "Wow Bro!!!!",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        index: 10,
        name: "user3",
        text: "YO MAN WAZZUP!!",
      },
    ],
  },
  {
    index: 2,
    name: "User1",
    text: "hey!!",
    replies: [
      {
        index: 21,
        name: "user2",
        text: "sup?",
        replies: [
          {
            index: 212,
            name: "user1",
            text: "Nothing much bro!!",
            replies: [
              {
                index: 213,
                name: "user3",
                text: "Chilling in Goa :)",
                replies: [
                  {
                    index: 214,
                    name: "user2",
                    text: "Wow Bro!!!!",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        index: 22,
        name: "user3",
        text: "YO MAN WAZZUP!!",
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-center bg-gray-100 p-2 mb-2">
      <img src="user-icon.png" alt="user-icon" className="h-7" />
      <div className="flex flex-col ml-2">
        <h4 className="text-black font-bold text-xs">{name}</h4>
        <p className="text-xs">{text}</p>
      </div>
    </div>
  );
};

//recursion - n level comments
const CommentList = ({ comments }) =>
  comments.map((comment) => (
    <>
      <Comment data={comment} key={comment.index} />
      <div className="ml-5">
        {comment.replies && comment.replies.length > 0 && (
          <CommentList comments={comment.replies} />
        )}
      </div>
    </>
  ));

const CommentsContainer = () => {
  return (
    <div className="my-4">
      <h1 className="font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
