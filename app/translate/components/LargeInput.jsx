"use client";
export default function LargeInput({ reference }) {
  return (
    <>
      <textarea
        onClick={() => {
          alert("click 'Translate' to translate the text when you're done.");
        }}
        autoFocus
        placeholder="Type in english the text you want to translate... "
        ref={reference}
        className="w-full h-full rounded-md drop-shadow-lg bg-gray-700 text-lg
                resize-none outline-none text-white flex px-4 py-2 overflow-y-hidden
                border-8 border-gray-700 leading-none font-montserrat"
      ></textarea>
    </>
  );
}
