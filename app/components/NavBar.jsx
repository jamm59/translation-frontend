"use client";
import { useRef } from "react";

// fontAwesome
import {
  FontAwesomeIcon,
  faBook,
  faAddressCard,
  faLanguage,
  faGraduationCap,
  faQuestion,
} from "../../lib/fontawesome.js";

import NavItem from "../components/Link";
import Modal from "../components/modal";
import MenuItem from "../components/MenuItem";
import AboutME from "../components/About";

export default function NavBar({ addModal }) {
  const navContainer = useRef(null);
  const menu = useRef(null);
  const aboutRef = useRef(null);

  const handleMenuToggle = (event) => {
    event.preventDefault();
    const elements = navContainer.current.querySelectorAll(".navItem");
    elements.forEach((el) => {
      el.classList.toggle("md:hidden");
    });
    menu.current.classList.toggle("md:rounded-sm");
  };
  const FontIcon = (icon) => (
    <FontAwesomeIcon
      className="text-rose-600 md:text-emerald-100 mr-2"
      icon={icon}
    />
  );
  const toggleAbout = (event, aboutRef) => {
    event.preventDefault();
    //hide modal if page has been visited
    aboutRef.current.classList.toggle("hidden");
    aboutRef.current.classList.toggle("grid");
  };
  return (
    <>
      {addModal ? <Modal /> : <></>}
      <AboutME innerRef={aboutRef} toggleAbout={toggleAbout} />
      <nav
        ref={navContainer}
        className="bg-gray-900 md:bg-inherit text-white h-screen px-10 my-auto py-6  flex flex-col text-center
                        md:w-[100%] md:h-16 md:mt-3 md:py-2 md:rounded-sm"
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
        <NavItem
          href={"/translate"}
          content={"Translate"}
          FontIcon={FontIcon(faLanguage)}
        />
        <NavItem
          href={"/"}
          content={"Help improve"}
          FontIcon={FontIcon(faBook)}
        />
        <NavItem
          href={"https://huggingface.co/tasks/translation"}
          content={"Learn More"}
          FontIcon={FontIcon(faGraduationCap)}
        />
        <NavItem
          href={"/"}
          content={"About ME"}
          FontIcon={FontIcon(faAddressCard)}
          onClick={(e) => toggleAbout(e, aboutRef)}
        />
      </nav>
    </>
  );
}
