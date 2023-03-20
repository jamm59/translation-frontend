export function Input({ reference }) {
  const onInputHandler = (event) => {
    reference.current.style.height = "";
    reference.current.style.height = reference.current.scrollHeight + "px";
  };
  return (
    <>
      <textarea
        autoFocus
        onInput={onInputHandler}
        placeholder="Enter the translation here .. "
        ref={reference}
        className="w-full h-full max-h-28 md:min-h-full md:max-h-full font-mono
                 bg-gray-800 text-lg leading-snug rounded-lg drop-shadow-xl
                  resize-none outline-none text-white flex p-2 md:px-4 overflow-y-hidden
                  border-6 border-gray-800 md:flex md:justify-center"
      ></textarea>
    </>
  );
}

export function LargeInput({ reference }) {
  return (
    <>
      <textarea
        disabled
        autoFocus
        placeholder='Enter text you want to translate in English, and then click "Translate" above. '
        ref={reference}
        className="w-full h-full xl:h-[75%] rounded-md drop-shadow-xl bg-gray-800 text-lg
                resize-none outline-none text-white flex px-4 py-2 overflow-y-hidden
                border-8 border-gray-800 leading-snug font-montserrat"
      ></textarea>
    </>
  );
}
export default Input;
