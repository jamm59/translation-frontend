import Image from "next/image";
export default function Loading() {
  return (
    <div className="h-screen md:h-fit md:py-20 w-full md:bg-gray-900 grid place-items-center">
      <div className=" w-1/2 h-fit flex flex-col justify-center items-center">
        <Image src={"/africanart.png"} alt="art" width={300} height={400} />
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
}
