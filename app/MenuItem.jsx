import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MenuItem({ content, handleClick, reference }) {
  return (
    <a
      ref={reference}
      className={`menu text-white md:text-black rounded-xl bg-rose-600 my-3 mx-1 p-2 transition-all ease-in delay-1
                 font-black md:font-extrabold text-lg md:text-2xl shadow-lg md:my-0 md:bg-emerald-50 md:hover:bg-emerald-50
                md:relative md:z-10 md:py-3 xl:w-[90%] md:h-16`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faBars} className="mr-3 rounded-md" />
      {content}
    </a>
  );
}
