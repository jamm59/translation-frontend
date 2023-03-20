export default function NavItem({
  href,
  content,
  className,
  FontIcon,
  onClick,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={
        `navItem md:hidden rounded-lg md:rounded-sm text-white 
               bg-gray-800 my-3 mx-1 p-2 transition-all ease-in 
                 hover:bg-gray-700/70 font-normal shadow-lg md:my-0
                md:relative md:z-10 md:py-4 xl:w-[80%]
      ` + className
      }
    >
      {FontIcon}
      {content}
    </a>
  );
}
