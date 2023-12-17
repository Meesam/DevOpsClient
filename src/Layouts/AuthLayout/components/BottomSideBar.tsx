import React from "react";

interface BottomSideBarProps {
  isToggled: boolean;
}
const BottomSideBar: React.FC<BottomSideBarProps> = ({ isToggled }) => {
  return (
    <>
      <a
        href=""
        className="flex items-center gap-2 font-light
         px-3 py-2 hover:underline
          text-sm text-neutral-600"
      >
        <i className="bi bi-gear-fill text-sky-700"></i>
        {!isToggled && "Setting"}
      </a>
      <a
        href=""
        className="flex items-center gap-2 font-light
         px-3 py-2 hover:underline
          text-sm text-neutral-600"
      >
        <i className="bi bi-question-circle-fill text-sky-700"></i>
        {!isToggled && "Help"}
      </a>

      <button
        className="flex items-center font-light
          py-2
          text-sm text-red-600 hover:underline gap-2"
        type="submit"
      >
        {!isToggled && "Logout"}
      </button>
    </>
  );
};

export default BottomSideBar;
