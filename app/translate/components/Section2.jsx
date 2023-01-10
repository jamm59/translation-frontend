// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//importing font awesome css
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// icons
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

import LargeInput from "./LargeInput";
import TranslateSection from "./Translate";

export default function Section() {
  return (
    <section className="col-span-3 grid place-items-center font-montserrat text-lg md:text-md md:w-full leading-snug">
      <div className="h-full md:h-[75%] flex flex-col justify-center items-center gap-3 rounded-md p-3">
        <div className="w-[50%] text-center h-[5%] font-black text-3xl text-white md:w-[80%] md:mb-4">
          <FontAwesomeIcon className="mr-3" icon={faLanguage} />
          Translate
        </div>
        <div className="bg-gray-800 rounded-lg p-3 min-h-fit h-[60%] w-[60%] flex flex-col justify-center items-center gap-2 md:w-full md:h-full ">
          <LargeInput />
          <TranslateSection />
        </div>
      </div>
    </section>
  );
}
