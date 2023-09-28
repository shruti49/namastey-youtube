import React, { useMemo, useRef, useState } from "react";

const Demo = () => {
  const [text, setText] = useState(0);

  const [theme, setTheme] = useState("bg-white");

  //caching the heavy operation

  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const findNthPrime = (n) => {
    console.log("calculating");
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
        count++;
      }
      num++;
    }
    return num - 1;
  };

  //Cache my results untill dependencies changes
  const memoisedPrime = useMemo(() => findNthPrime(text), [text]);

  let x = 0;
  console.log("x =", x);
  const [y, setY] = useState(0);

  const ref = useRef(0);
  // ref => {current:}

  return (
    <>
      <div className={`w-96 h-96 border border-red-500 ml-56 ${theme}`}>
        <input
          type="number"
          className="border border-blue-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <h1 className={theme === "bg-white" ? "text-black" : "text-white"}>
            nth Prime : {memoisedPrime}
          </h1>
        </div>
        <button
          onClick={() =>
            theme === "bg-white" ? setTheme("bg-black") : setTheme("bg-white")
          }
          className={`p-3 m-6 ${
            theme === "bg-white" ? "bg-black text-white" : "bg-white text-black"
          } `}
        >
          {theme === "bg-white" ? "White" : "Black"}
        </button>
      </div>
      <div className="border border-black ml-6 p-3 w-96 h-96">
        <div className="flex items-center">
          <h1>let x = {x}</h1>
          <button
            onClick={() => {
              x = x + 1;
              console.log("x =", x);
            }}
            className="bg-slate-200 p-3 shadow-2xl ml-4"
          >
            Increment x
          </button>
        </div>

        <div className="flex items-center my-6">
          <h1>State y = {y}</h1>
          <button
            onClick={() => setY(y + 1)}
            className="bg-slate-200 p-3 shadow-2xl ml-4"
          >
            Increment y
          </button>
        </div>

        <div className="flex items-center">
          <h1>Ref z = {ref.current}</h1>
          <button
            onClick={() => {
              ref.current = ref.current + 1;
              console.log("ref =", ref.current);
            }}
            className="bg-slate-200 p-3 shadow-2xl ml-4  "
          >
            Increment z
          </button>
        </div>
      </div>
    </>
  );
};

export default Demo;
