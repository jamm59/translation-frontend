import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 
import { faBurger } from "@fortawesome/free-solid-svg-icons";

export default function NavItem({ href, content, type, handleClick }) {
    const classNames = `bg-gray-800 my-3 mx-1 p-2 transition-colors ease-in rounded-md
                        hover:bg-gray-700/70 font-normal shadow-lg md:rounded-sm md:my-0  
                        md:relative md:z-10 md:py-4`;
    const menuClasses = `menu bg-rose-500 hover:bg-rose-600 md:rounded-lg`;
    return type !== "menu" ?
            
            (<a href={href} className={classNames + " navItem md:hidden"} >
            {content}
            </a>) 
           :
           (<a className={classNames + menuClasses} onClick={handleClick}>
            <FontAwesomeIcon icon={faBurger} className="mr-2"/>
           {content}
          </a>);
}
