export default function Input({ reference }) {
  return (
    <>
      <textarea
        autoFocus
        placeholder="Type in pidgin the equivalent of the text above... "
        ref={reference}
        className="w-full h-full rounded-md drop-shadow-lg bg-gray-700 text-lg
                resize-none outline-none text-white flex px-4 py-2 overflow-y-hidden
                border-8 border-gray-700 leading-none"
      ></textarea>
    </>
  );
}
