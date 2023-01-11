"use client";
export default function LargeInput({ reference }) {
  return (
    <>
      <textarea
        autoFocus
        placeholder='Type in english the text you want to translate and then click on "Translate" above... '
        ref={reference}
        className="w-full h-full xl:h-[80%] rounded-md drop-shadow-lg bg-gray-700 text-lg
                resize-none outline-none text-white flex px-4 py-2 overflow-y-hidden
                border-8 border-gray-700 leading-snug font-montserrat"
      ></textarea>
    </>
  );
}
