import React from "react";
import SideBarLink from "./SideBarLink ";
import BottomSideBar from "./BottomSideBar";
import Logo from "../../../img/logo.svg";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const sideBarItems = [
  { title: "Dashboard", path: "/dashboard", logo: "Dashboard" },
  { title: "Customers", path: "/customers", logo: "Customers" },
  { title: "Projects", path: "/projects", logo: "Projects" },
  { title: "Users", path: "/users", logo: "Users" },
];

const NavMenu = () => {
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <div className="flex flex-col bg-neutral-200 p-3 border-r-1 relative duration-300">
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
          return <SideBarLink isToggled={isToggled} sideBarItem={item} />;
        })}
      </div>
      <div className="flex flex-col gap-1 pt-2 border-t border-neutral-300">
        <BottomSideBar isToggled={isToggled} />
      </div>
    </div>
  );
};

export default NavMenu;
