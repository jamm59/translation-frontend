export default function Loading() {
  return (
    <div
      className="pt-20 w-full h-full col-span-3 flex flex-col
    justify-center items-center "
    >
      <img src={"/africanart.png"} alt="art" width={300} height={400} />
      <div className="h-10 w-52 p-1 items-center rounded-lg ">
        <div
          className={`progress h-full bg-orange-50 rounded-lg transition-allease-in-out delay-1000`}
        ></div>
      </div>
      <p className="text-3xl text-center text-white font-black">Loading...</p>
    </div>
  );
}
