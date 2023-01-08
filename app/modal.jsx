"use client";
import Button from "./Button";
import { useRef } from "react";
import { useState } from "react";
export default function Modal() {
  const [next, setNext] = useState(false);
  const modal = useRef(null);
  const hideModal = () => {
    //hide modal if page has been visited
    modal.current.classList.toggle("hidden");
    modal.current.classList.toggle("grid");
  };
  const originText = `
          Welcome to our website! We're building a machine translation system
          that can accurately translate between pidgin and English. We need a
          large dataset of pidgin text and English translations to achieve this.
          You can help us by contributing your translations to the dataset. If
          you're fluent in both pidgin and English and want to be a part of the
          project, we encourage you to contribute to the dataset. By working
          together, we can create a translation system that accurately captures
          the unique character of pidgin and promotes its cultural significance.
  `;
  const updateText = `
          The process works as follows: you will be presented with a 
          sentence that has been randomly selected from a group of 
          previously compiled sentences.Your task is to type a rephrased
          version of this sentence into the designated input box.
          The input box is where you will enter your version of 
          the randomly generated sentence,
          which should convey the same meaning as the original.`;
  return (
    <div
      ref={modal}
      className="modal grid absolute top-0 bottom-0 left-0 h-sceen right-0 bg-transparent
                 place-items-center z-40 backdrop-blur"
    >
      <div
        className="bg-white rounded-md md:rounded-sm h-fit w-[37%] md:w-full
                   flex flex-col item-center justify-left p-6 md:absolute md:top-1"
      >
        <h1 className="font-black text-xl">
          <u>Please Read !</u>
        </h1>
        <p className="my-2 text-md">{next ? updateText : originText}</p>
        <div>
          {!next ? (
            <Button
              content={"next"}
              clickEvent={() => {
                setNext(true);
              }}
            />
          ) : (
            <Button content={"close"} clickEvent={hideModal} />
          )}
        </div>
      </div>
    </div>
  );
}
