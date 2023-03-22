import { useState } from "react";
import CountLoader from "../components/CountLoader";

export default function TranslateSection({ reference, prediction, inputTag }) {
  const textLength = prediction.length + 2;
  const [loadingDone, setLoadingDone] = useState(false);

  if (loadingDone) inputTag.current.disabled = false;

  console.log(prediction);
  return !loadingDone ? (
    <>
      <div
        ref={reference}
        style={{ "--n": textLength }}
        className="min-h-fit w-full rounded-md md:text-md text-left p-2 text-black
                type clip step font-mono"
      >
        <CountLoader loadingDone={setLoadingDone} />
      </div>
    </>
  ) : (
    <>
      <div
        ref={reference}
        style={{ "--n": textLength }}
        className="min-h-fit w-full rounded-md md:text-md text-left p-2 text-black
            type clip step font-mono"
      >
        {prediction}
      </div>
    </>
  );
}
