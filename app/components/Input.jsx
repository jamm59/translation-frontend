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
        placeholder="Type in pidgin the text above... "
        ref={reference}
        className="w-full h-full rounded-lg drop-shadow-lg bg-gray-700 text-lg leading-snug
                resize-none outline-none text-white flex px-2 py-2 overflow-y-hidden
                border-8 border-gray-700 font-montserrat max-h-28 md:max-h-full"
      ></textarea>
    </>
  );
}
