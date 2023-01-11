export default function TranslateSection({ reference, prediction }) {
  const textLength = prediction.length + 2;
  return (
    <div
      ref={reference}
      style={{ "--n": textLength }}
      className="min-h-fit w-full rounded-md md:text-md text-left p-2 text-black
                type clip step font-mono"
    >
      {prediction}
    </div>
  );
}
