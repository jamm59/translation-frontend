import Image from "next/image";
export default function Loading() {
    return(<div className="h-fit md:py-20 w-full md:bg-gray-900 grid place-items-center">
                <div className=" w-1/2 h-fit flex flex-col justify-center items-center">
                    <Image 
                        src={"/africanart.png"} 
                        alt="art"
                        width={300}
                        height={400}
                    />
                    <p className="text-xl font-normal text-center md:text-white">Loading...</p>      
                </div>
            </div>
        );
    }