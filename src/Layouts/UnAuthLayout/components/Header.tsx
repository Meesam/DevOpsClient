import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center bg-white border shadow-md h-14 justify-between px-10">
      <div>logo</div>
      <div className="flex gap-4">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default Header;
