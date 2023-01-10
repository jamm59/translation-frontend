"use client";
// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//importing font awesome css
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// icons
import { faLanguage, faSpinner } from "@fortawesome/free-solid-svg-icons";

import LargeInput from "./LargeInput";
import TranslateSection from "./Translate";
import { useRef, useState } from "react";

export default function Section() {
  const [displayData, setDisplayData] = useState(
    "Type in a sentence in the input box above to get a translation .."
  );
  const input = useRef(null);
  const display = useRef(null);
  const handleTranslateClick = () => {
    setDisplayData("");
    const value = input.current.value;
    if (value < 5) {
      setDisplayData("Type in a longer sentence..");
    } else {
      const data = {
        inputs: value,
      };
      display.current.classList.toggle("type");
      fetch("/api/model", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          display.current.classList.toggle("type");
          setDisplayData(data.prediction);
        });
    }
  };
  return (
    <section className="col-span-3 grid place-items-center font-montserrat text-lg md:text-md md:w-full leading-snug">
      <div className="h-full md:h-[75%] w-full flex flex-col justify-center items-center gap-3 rounded-md p-3">
        <div
          onClick={handleTranslateClick}
          className="ease-in-out duration-300 cursor-pointer focus:translate-x-2 hover:translate-x-2 w-[50%] text-center h-[5%]
                     font-black text-3xl text-white md:w-[80%] md:mb-4"
        >
          {displayData ? (
            <>
              <FontAwesomeIcon
                className="mr-3 text-rose-600"
                icon={faLanguage}
              />
              Translate
            </>
          ) : (
            <>
              <FontAwesomeIcon
                className="mr-3 text-rose-600 animate-spin"
                icon={faSpinner}
              />
              Translating
            </>
          )}
        </div>
        <div className="bg-white rounded-lg p-3 md:p-2 min-h-fit h-[50%] w-[60%] flex flex-col justify-spacebetween items-center gap-2 md:w-full md:h-full ">
          <LargeInput reference={input} />
          <TranslateSection reference={display} prediction={displayData} />
        </div>
      </div>
    </section>
  );
}
