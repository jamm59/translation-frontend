"use client";
import Button from "./Button";
import { useRef } from "react";
export default function Modal() {
  const modal = useRef(null);
  const hideModal = () => {
    //hide modal if page has been visited
    modal.current.classList.toggle("hidden");
    modal.current.classList.toggle("grid");
  };
  return (
    <div
      ref={modal}
      className="modal grid absolute top-0 bottom-0 left-0 h-sceen right-0 bg-transparent place-items-center z-40 backdrop-blur"
    >
      <div className="bg-emerald-50 rounded-md h-fit w-[37%] md:w-full flex flex-col item-center justify-left p-6">
        <h1 className="font-black text-xl">
          <u>Please Read !</u>
        </h1>
        <p className="my-2 font-raleway text-md">
          <strong>Hello and welcome to our website!</strong> We are working on a
          machine translation system that can accurately translate between
          pidgin and English. However, in order to achieve this goal, we need a
          large and diverse dataset of pidgin text and its corresponding
          translations into English. This is where you come in. By contributing
          your translations to our dataset, you can help us build a translation
          system that truly understands the complexity and nuance of pidgin
          language. So if you're fluent in both pidgin and English and want to
          be a part of this exciting project, we encourage you to start
          contributing to our dataset today. Together, we can create a
          translation system that accurately captures the unique character of
          pidgin and helps to preserve and promote this vital aspect of our
          culture.
        </p>
        <div>
          <Button content={"close"} clickEvent={hideModal} />
        </div>
      </div>
    </div>
  );
}
