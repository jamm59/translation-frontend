"use client";
//import jsonData from "../public/files/chat.json";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import { SubLoad } from "../components/loading";
// fontAwesome
import {
  FontAwesomeIcon,
  faPaperPlane,
  faArrowsRotate,
} from "../../lib/fontawesome.js";
import { useRef, useState, useEffect } from "react";

export default function Section() {
  const [englishText, setEnglishText] = useState("");
  const input = useRef(null);
  const handleRefresh = (event) => {
    setEnglishText("");
    try {
      event.preventDefault();
    } catch (error) {}
    fetch("/api/random_data")
      .then((response) => response.json())
      .then((data) => {
        // this will return the first 160 characters
        setEnglishText(data.comment.slice(0, 160));
      });
  };
  const handleSubmit = (event) => {
    try {
      event.preventDefault();
    } catch (error) {}
    const value = input.current.value;
    input.current.value = "";
    if (value.length > 10 && englishText.length > 5) {
      const data = {
        inEnglish: englishText,
        inPidgin: value,
      };
      fetch("/api/post_data", {
        method: "POST",
        body: JSON.stringify(data),
      });
      alert("Thank you for submitting! ");
      handleRefresh();
    } else {
      alert("Please type in a Longer sentence! ");
    }
  };
  useEffect(() => {
    handleRefresh();
  }, []);
  return (
    <>
      {!englishText ? (
        <SubLoad />
      ) : (
        <section
          className="w-full col-span-3 flex flex-col
                    justify-center items-center
                    md:h-[50%] md:row-span-3 md:pt-20"
        >
          <div
            className="w-[60%] min-h-fit md:h-[80%] grid grid-row-4 gap-2 
                      rounded-2xl drop-shadow-lg
                      md:w-full md:rounded-t-2xl md:rounded-b-none
                      md:flex md:flex-col md:gap-0 md:absolute md:bottom-0"
          >
            <div className="w-full md:h-16 flex items-center justify-left">
              <Button
                clickEvent={handleSubmit}
                content={"submit"}
                FontIcon={
                  <FontAwesomeIcon
                    className="text-white mr-2"
                    icon={faPaperPlane}
                  />
                }
              />
            </div>
            <div className="py-2 md:py-8 text-left w-3/4 rounded-md row-span-2 mx-auto mb-4 md:w-[98%] ">
              <span
                className="text-3xl font-black bg-clip-text 
                                        text-transparent bg-gradient-to-r 
                                      from-rose-600 to-lime-500 md:text-2xl"
              >
                {englishText}
              </span>
            </div>
            <div className="w-full py-1 md:py-1 md:flex md:justify-left md:absolute md:bottom-20 md:place-items-center">
              <Button
                clickEvent={handleRefresh}
                content={"refresh"}
                FontIcon={
                  <FontAwesomeIcon
                    className="text-white mr-2 transition-transform duration-200 hover:rotate-180 hover:scale-150"
                    icon={faArrowsRotate}
                  />
                }
              />
            </div>
            <div
              className="grid place-items-center md:absolute md:bottom-0 w-full
                        h-fit md:h-16 rounded-lg p-2 md:rounded-none bg-gray-900"
            >
              <Input reference={input} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
