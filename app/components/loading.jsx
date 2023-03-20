export const Loading = () => {
  return (
    <div className="h-screen md:h-fit md:py-20 w-full md:bg-gray-900 grid place-items-center">
      <div className=" w-1/2 h-fit flex flex-col justify-center items-center">
        <img src={"/africanart.png"} alt="art" width={300} height={400} />
        <div className="loading rounded-md">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="text-3xl font-black text-center text-white">Loading...</p>
      </div>
    </div>
  );
};

export const SecondLoad = () => {
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
};

export const SubLoad = () => {
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
};
export default Loading;
