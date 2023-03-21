"use client";
// fontAwesome
import { FontAwesomeIcon, faLanguage, faSpinner } from "../../lib/fontawesome";
import { LargeInput } from "../components/Input";
import TranslateSection from "../components/Translate";
import { SecondLoad } from "../components/loading";
import { useRef, useState, useEffect } from "react";

export default function Section() {
  const [displayData, setDisplayData] = useState(
    "Type in a sentence in the input box above to get a translation and then click 'Translate' above .."
  );
  const input = useRef(null);
  const display = useRef(null);
  const [preLoadDone, setPreLoadDone] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Languages");

  const handleChange = (event) => {
    const languageCode = event.target.value; // convert selected option to language code
    setSelectedValue(languageCode);
  };
  const handleTranslateClick = () => {
    display.current.classList.toggle("type");
    setDisplayData("");
    const value = input.current.value;
    if (value.length < 5) {
      setDisplayData("Type in a longer sentence..");
    } else {
      const inputs = value;
      retryPostRequest(inputs, display, setDisplayData, selectedValue);
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
            // waiting for model to download
            if (count === 2) {
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
        <SecondLoad />
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
              className="cursor-pointer
                      w-[50%] flex justify-around h-[5%]
                     font-black text-3xl md:text-2xl text-white md:w-[80%] md:mb-4"
            >
              {displayData ? (
                <>
                  <button
                    onClick={handleTranslateClick}
                    className="ease-in-out duration-300 focus:translate-x-2 hover:translate-x-2"
                  >
                    <FontAwesomeIcon
                      className="mr-3 text-white"
                      icon={faLanguage}
                    />
                    Translate
                  </button>

                  <select
                    onChange={handleChange}
                    className="bg-black font-normal text-sm font-montserrat text-center focus:outline-none"
                  >
                    <option value="language">{selectedValue}</option>
                    <option value="Pidgin">Pidgin</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Romanian">Romanian</option>
                  </select>
                </>
              ) : (
                <span>
                  <FontAwesomeIcon
                    className="mr-3 text-white animate-spin"
                    icon={faSpinner}
                  />
                  translating...
                </span>
              )}
            </div>
            <div
              className="bg-white rounded-lg p-3 md:p-2 min-h-fit 
            md:h-80 h-[50%] w-[60%] flex flex-col justify-spacebetween 
            items-center gap-2 md:w-[95%] "
            >
              <LargeInput reference={input} />
              <TranslateSection
                reference={display}
                prediction={displayData}
                inputTag={input}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
async function retryPostRequest(inputs, display, setDisplayData, Lang) {
  try {
    const response = await query({ inputs }, Lang);
    display.current.classList.toggle("type");
    if (!response.error) {
      let prediction;
      if (response.translation_text) {
        prediction = response.translation_text;
      } else {
        prediction = response[0].translation_text;
      }
      setDisplayData(prediction);
      storeData({ prediction, inputs }, Lang);
    }
  } catch (error) {
    setDisplayData("An error occurred, please try again later.");
  }
}
async function query(data, Lang) {
  let secretUrl, secretKey;
  if (Lang === "Pidgin") {
    secretUrl =
      "https://api-inference.huggingface.co/models/jamm55/autotrain-improved-pidgin-model-2837583188";
    secretKey = "Bearer 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";
  } else {
    if (Lang === "language")
      return {
        error: false,
        translation_text: "SElect a langauge to Translate to!",
      };
    secretUrl = "https://api-inference.huggingface.co/models/t5-base";
    secretKey = "Bearer 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";
    data.inputs = `translate English to ${Lang}: ${data.inputs}`;
    console.log(data);
    const response = await fetch(secretUrl, {
      headers: {
        Authorization: secretKey,
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  }
}
function storeData({ prediction, inputs }, Lang) {
  if (Lang === "Pidgin") {
    const data = {
      inEnglish: inputs,
      inPidgin: prediction,
    };
    fetch("/api/post_data", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}
