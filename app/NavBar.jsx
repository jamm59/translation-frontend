"use client";
import NavItem from "./Link";
import Modal from "./modal";
import { useRef } from "react";
export default function NavBar() {
    const navContainer = useRef(null);

    const handleMenuToggle = (event) => {
        event.preventDefault();
        const elements = navContainer.current.querySelectorAll(".navItem");
        elements.forEach((el)=>{
            el.classList.toggle("md:hidden");
        });

    }

    return(<>
            <Modal/>
            <nav ref={navContainer} className="bg-gray-900 text-white h-screen px-10 my-auto py-6  flex flex-col text-center
                        md:w-[100%] md:h-16 md:mt-3 md:py-2 md:rounded-sm">
                <NavItem href={""} content={"menu"} type={"menu"} handleClick={handleMenuToggle}/>
                <NavItem href={"/"} content={"Translation site"}/>
                <NavItem href={"/"} content={"Get in Touch"}/>
                <NavItem href={"/"} content={"Learn More"}/>
                <NavItem href={"/#about"} content={"About"}/>
           </nav>
           </>);
}