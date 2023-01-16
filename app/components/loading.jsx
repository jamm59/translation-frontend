import Image from "next/image";
export default function Loading() {
  return (
    <div className="h-screen md:h-fit md:py-20 w-full md:bg-gray-900 grid place-items-center">
      <div className=" w-1/2 h-fit flex flex-col justify-center items-center">
        <Image src={"/africanart.png"} alt="art" width={300} height={400} />
        <div className="h-10 w-56 p-1 items-center rounded-lg">
          <div
            className={`progress-normal h-full bg-orange-50 rounded-lg transition-allease-in-out delay-1000`}
          ></div>
        </div>
        <p className="text-3xl font-black text-center text-white">Loading...</p>
      </div>
    </div>
  );
}
