import Image from "next/image";
export default function SubLoad() {
    return (<div className="w-full h-full col-span-3 flex flex-col
    justify-center items-center ">
                <Image 
                        src={"/africanart.png"} 
                        alt="art"
                        width={300}
                        height={400}
                    />
                <p className="text-3xl text-center text-white font-black">Loading...</p> 
            </div>);
}