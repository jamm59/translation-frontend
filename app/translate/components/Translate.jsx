export default function TranslateSection({ reference, prediction }) {
  const text = `
      a set of words that is complete in itself.
      The solar wind is a stream of charged particles released 
      from the upper atmosphere of the Sun, called the corona. 
      This plasma mostly consists of electrons, protons and alpha 
      particles with kinetic energy between 0.5 and 10 keV.`;
  const textLength = text.length;
  return (
    <div
      ref={reference}
      style={{ "--n": textLength }}
      className="min-h-fit w-full rounded-md md:text-sm text-left p-2 text-black
                type clip step "
    >
      {!prediction ? text : prediction}
    </div>
  );
}
