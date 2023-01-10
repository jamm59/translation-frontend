"use client";

// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//importing font awesome css
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// icons
import {
  faHouse,
  faAddressCard,
  faLanguage,
  faGraduationCap,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

import NavItem from "./Link";
import Modal from "./modal";
import { useRef } from "react";
import MenuItem from "./MenuItem";
export default function NavBar({ addModal }) {
  const navContainer = useRef(null);
  const menu = useRef(null);

  const handleMenuToggle = (event) => {
    event.preventDefault();
    const elements = navContainer.current.querySelectorAll(".navItem");
    elements.forEach((el) => {
      el.classList.toggle("md:hidden");
    });
    menu.current.classList.toggle("md:rounded-sm");
  };
  const FontIcon = (icon) => (
    <FontAwesomeIcon className="text-white mr-2" icon={icon} />
  );
  return (
    <>
      {addModal ? <Modal /> : <></>}
      <nav
        ref={navContainer}
        className="bg-gray-900 md:bg-inherit text-white h-screen px-10 my-auto py-6  flex flex-col text-center
                        md:w-[100%] md:h-16 md:mt-3 md:py-2 md:rounded-sm group"
      >
        <NavItem
          content={"How it works! "}
          className={"hidden md:block group-first:first:rounded-t-md"}
          handleClick={handleMenuToggle}
          FontIcon={FontIcon(faQuestion)}
        />
        <MenuItem
          content={"Menu"}
          handleClick={handleMenuToggle}
          reference={menu}
        />
        <NavItem href={"/"} content={"Home"} FontIcon={FontIcon(faHouse)} />
        <NavItem
          href={"/translate"}
          content={"Translate"}
          FontIcon={FontIcon(faLanguage)}
        />
        <NavItem
          href={"/"}
          content={"About"}
          FontIcon={FontIcon(faAddressCard)}
        />
        <NavItem
          href={"https://huggingface.co/tasks/translation"}
          content={"Learn More"}
          FontIcon={FontIcon(faGraduationCap)}
        />
      </nav>
    </>
  );
}
