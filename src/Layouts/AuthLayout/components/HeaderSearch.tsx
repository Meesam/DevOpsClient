import React from "react";
import { MdSearch } from "react-icons/md";

const HeaderSearch = () => {
  return (
    <div className="relative">
      <div className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3">
        <MdSearch />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="text-sm focus:outline-none active:outline-none h-10 w-[30rem] border border-gray-300 rounded-md pl-11 pr-4"
      />
    </div>
  );
};

export default HeaderSearch;
