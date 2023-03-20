"use client";
import { useEffect, useState } from "react";

const CountLoader = ({ loadingDone }) => {
  const [counter, setCounter] = useState(11);
  useEffect(() => {
    const intervalDecrementer = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);
    if (counter < 2) {
      loadingDone(true);
      clearInterval(intervalDecrementer);
    }
    return () => {
      clearInterval(intervalDecrementer);
    };
  }, [counter]);
  return (
    <div className="w-full h-full grid place-items-left">
      <span>In</span>
      <h1 className=" h-full font-black text-3xl font-montserrat text-gray-800 flex-auto">
        {counter > 9 ? counter : `0${counter}`}
        <span className="font-normal text-sm pl-1">s</span>
      </h1>
      <div className="text-md flex-auto">loading translation model...</div>
    </div>
  );
};

export default CountLoader;
