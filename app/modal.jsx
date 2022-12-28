"use client";
import Button from "./Button";
import { useRef } from "react";
export default function Modal() {
    const modal = useRef(null);
    const hideModal = () => {
        //hide modal if page has been visited
        modal.current.classList.toggle("hidden");
        modal.current.classList.toggle("grid");
    }
    return (<div ref={modal} className="modal grid absolute top-0 bottom-0 left-0 h-sceen right-0 bg-transparent place-items-center z-40 backdrop-blur" >
                <div className='bg-emerald-50 rounded-md h-fit w-[35%] md:w-full flex flex-col item-center justify-left p-6'>
                    <h1 className="font-black text-xl"><u>Please Read !</u></h1>
                    <p className="my-2">
                        <strong>Hi there, </strong>Lorem ipsum dolor, sit amet 
                        consectetur adipisicing elit.
                        Dignissimos sunt nisi ullam molestias autem earum, totam 
                        nostrum facere quis, sit rem voluptatibus quae, doloremque 
                        in libero nihil ducimus suscipit provident!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Dignissimos sunt nisi ullam molestias autem earum, totam 
                        nostrum facere quis, sit rem voluptatibus quae, doloremque 
                        in libero nihil ducimus suscipit provident!
                        Commodi perspiciatis impedit provident ad porro at
                        quaerat rem voluptates!.
                    </p>
                    <div>
                        <Button content={"close"} clickEvent={hideModal}/>
                    </div>
                </div>
            </div>);
}