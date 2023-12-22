import React from "react";
import SideBarLink from "./SideBarLink ";
import BottomSideBar from "./BottomSideBar";
import Logo from "../../../img/logo.svg";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import classNames from "classnames";

const sideBarItems = [
  { title: "Dashboard", path: "/home", logo: "Dashboard" },
  { title: "Customers", path: "/users", logo: "Customers" },
  { title: "Projects", path: "/home", logo: "Projects" },
  { title: "Users", path: "/users", logo: "Users" },
];

const NavMenu = () => {
  const [isToggled, setIsToggled] = React.useState(false);

  const toggleClass = classNames({
    "flex flex-col bg-neutral-200 p-3 border-r-1 relative duration-300": true,
    "w-14": isToggled,
  });

  return (
    <div className={toggleClass}>
      <div
        onClick={() => setIsToggled(!isToggled)}
        className="absolute -right-[0.7rem] top-10 flex justify-center items-center w-7 h-7 hover\:bg-gray-50 bg-sky-700 rounded-full text-white cursor-pointer"
      >
        {isToggled ? (
          <IoIosArrowRoundForward size={25} />
        ) : (
          <IoIosArrowRoundBack size={25} />
        )}
      </div>
      <div className="flex items-center gap-2 px-1 py-3">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex-1 py-7 flex flex-col gap-1 border-t border-neutral-300">
        {sideBarItems.map((item) => {
          return (
            <SideBarLink
              key={item.title}
              isToggled={isToggled}
              sideBarItem={item}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-1 pt-2 border-t border-neutral-300">
        <BottomSideBar isToggled={isToggled} />
      </div>
    </div>
  );
};

export default NavMenu;
