export default function Loading() {
    return(<div className="h-screen w-full bg-white grid place-items-center">
                <div className=" w-1/2 h-2/3 grid place-items-center">
                    <img 
                        src={"https://abidewomen.org/wp-content/uploads/2022/01/pregnant-illustration.png"} 
                        alt={"image"} 
                        height={400}
                        width ={300}
                    />
                    <p className="text-xl"><strong>Loading...</strong></p>      
                </div>
            </div>
        );
    }