import Image from "next/image";
export default function SubLoad() {
    return (<div className="pt-20 w-full h-full col-span-3 flex flex-col
    justify-center items-center ">
                <img 
                        src={"/africanart.png"} 
                        alt="art"
                        width={300}
                        height={400}
                    />
                <p className="text-3xl text-center text-white font-black">Loading...</p> 
            </div>);
}