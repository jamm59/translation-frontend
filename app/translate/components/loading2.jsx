export default function Loading() {
  return (
    <div
      className="pt-20 w-full h-full col-span-3 flex flex-col
    justify-center items-center "
    >
      <img src={"/africanart.png"} alt="art" width={250} height={300} />
      <div className="loading rounded-md">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="text-3xl text-center text-white font-black">Loading...</p>
    </div>
  );
}
