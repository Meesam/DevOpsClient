import React from "react";
import HeaderSearch from "./HeaderSearch";
import ProfilePopup from "./ProfilePopup";
import { BsChatLeftTextFill, BsPersonCircle } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);

  return (
    <>
      <div className="bg-white border-b h-16 px-4 flex justify-between items-center">
        <HeaderSearch />
        <div className="flex items-center space-x-4 relative">
          <div className="text-xl">
            <BsChatLeftTextFill />
          </div>
          <div
            className="text-xl cursor-pointer"
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          >
            <IoMdNotifications />
          </div>
          <div
            className="text-xl cursor-pointer"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <BsPersonCircle />
          </div>
        </div>
      </div>

      {isNotificationOpen && (
        <div className="absolute top-12 bottom-0 right-14 z-50 bg-neutral-50 border border-neutral-200 shadow-lg rounded-md w-56 h-60 p-2 flex items-center justify-center">
          <p className="text-gray-500 text-base">No notification...</p>
        </div>
      )}

      {isProfileOpen && (
        <div className="absolute top-12 bottom-0 right-5 z-50 bg-neutral-50 border border-neutral-200 shadow-lg rounded-md w-96 h-52 p-4">
          <p className="text-gray-500 text-base">
            <ProfilePopup />
          </p>
        </div>
      )}
    </>
  );
};

export default Header;
