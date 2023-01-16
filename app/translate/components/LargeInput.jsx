"use client";
export default function LargeInput({ reference }) {
  return (
    <>
      <textarea
        autoFocus
        placeholder='Enter text you want to translate in English, and then click "Translate" above. '
        ref={reference}
        className="w-full h-full xl:h-[75%] rounded-md drop-shadow-lg bg-gray-800 text-lg
                resize-none outline-none text-white flex px-4 py-2 overflow-y-hidden
                border-8 border-gray-800 leading-snug font-montserrat"
      ></textarea>
    </>
  );
}
