import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface BottomSideBarProps {
  isToggled: boolean;
}
const BottomSideBar: React.FC<BottomSideBarProps> = ({ isToggled }) => {
  const toggleClass = classNames({
    "flex items-center font-light py-2 hover:underline text-neutral-600": true,
    "justify-center text-[1.2rem]": isToggled,
    "gap-2 px-3 text-sm": !isToggled,
  });

  return (
    <>
      <Link to="" className={toggleClass}>
        <IoSettingsOutline size={18} />
        {!isToggled && "Setting"}
      </Link>
      <Link to="" className={toggleClass}>
        <IoMdHelpCircleOutline size={18} />
        {!isToggled && "Help"}
      </Link>

      <Link to="" className={toggleClass}>
        <LiaSignOutAltSolid size={20} />
        {!isToggled && "Log out"}
      </Link>
    </>
  );
};

export default BottomSideBar;
