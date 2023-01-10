export default function TranslateSection({ reference, prediction }) {
  const textLength = prediction.length;
  return (
    <div
      ref={reference}
      style={{ "--n": textLength }}
      className="min-h-fit w-full rounded-md md:text-sm text-left p-2 text-black
                type clip step "
    >
      {prediction}
    </div>
  );
}
