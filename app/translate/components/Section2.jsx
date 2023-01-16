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
import Loading from "../components/loading2";
import { useRef, useState, useEffect } from "react";

export default function Section() {
  const [displayData, setDisplayData] = useState(
    "Type in a sentence in the input box above to get a translation and then click 'Translate' above .."
  );
  const input = useRef(null);
  const display = useRef(null);
  const [preLoadDone, setPreLoadDone] = useState(false);

  const handleTranslateClick = () => {
    display.current.classList.toggle("type");
    setDisplayData("");
    const value = input.current.value;
    if (value.length < 5) {
      setDisplayData("Type in a longer sentence..");
    } else {
      const inputs = value;
      retryPostRequest(inputs, display, setDisplayData);
    }
  };
  useEffect(() => {
    let intervalId;

    fetch("/api/random_data").then((dataResponse) => {
      const initialResponse = dataResponse.json();
      const inputs = initialResponse.comment;
      query({ inputs }).then((response) => {
        if (!response.error) {
          setPreLoadDone(true);
          console.log(response);
        } else {
          setPreLoadDone(false);
          let count = 0;
          intervalId = setInterval(() => {
            count++;
            if (count === 15) {
              setPreLoadDone(true);
              clearInterval(intervalId);
            }
          }, 1000);
        }
      });
      //.catch((error) => {});
    });
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      {!preLoadDone ? (
        <Loading />
      ) : (
        <section
          className="w-full col-span-3 flex flex-col
                  justify-center md:pt-16
                  font-montserrat text-lg md:text-md md:w-full leading-snug"
        >
          <div
            className="h-full md:h-[75%] w-full flex flex-col justify-center
                       items-center gap-3 rounded-md p-3 md:py-5"
          >
            <div
              onClick={handleTranslateClick}
              className="ease-in-out duration-300 cursor-pointer
                     focus:translate-x-2 hover:translate-x-2 w-[50%] text-center h-[5%]
                     font-black text-3xl text-white md:w-[80%] md:mb-4 "
            >
              {displayData ? (
                <>
                  <FontAwesomeIcon
                    className="mr-3 text-white"
                    icon={faLanguage}
                  />
                  Translate
                </>
              ) : (
                <>
                  <FontAwesomeIcon
                    className="mr-3 text-white animate-spin"
                    icon={faSpinner}
                  />
                  translating...
                </>
              )}
            </div>
            <div
              className="bg-white rounded-lg p-3 md:p-2 min-h-fit 
            md:h-80 h-[50%] w-[60%] flex flex-col justify-spacebetween 
            items-center gap-2 md:w-[95%] "
            >
              <LargeInput reference={input} />
              <TranslateSection reference={display} prediction={displayData} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
async function retryPostRequest(inputs, display, setDisplayData) {
  try {
    const response = await query({ inputs });
    display.current.classList.toggle("type");
    if (!response.error) {
      const prediction = response[0].translation_text;
      setDisplayData(prediction);
    }
  } catch (error) {
    setDisplayData("An error occurred, please try again later.");
  }
}

async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/jamm55/autotrain-improved-pidgin-model-2837583188",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}
function storeData({ prediction, inputs }) {
  const data = {
    inEnglish: inputs,
    inPidgin: prediction,
  };
  fetch("/api/post_data", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
