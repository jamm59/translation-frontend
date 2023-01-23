export default function Input({ reference }) {
  const onInputHandler = (event) => {
    reference.current.style.height = "";
    reference.current.style.height = reference.current.scrollHeight + "px";
  };
  return (
    <>
      <textarea
        autoFocus
        onInput={onInputHandler}
        placeholder="Enter text here .. "
        ref={reference}
        className="w-full h-full max-h-28 md:max-h-16 rounded-lg drop-shadow-lg
                 bg-gray-800 text-lg leading-snug
                resize-none outline-none text-white flex p-2 overflow-y-hidden
                border-6 border-gray-800 font-montserrat"
      ></textarea>
    </>
  );
}
