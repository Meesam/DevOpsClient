import React from "react";

const ProfilePopup = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Company Name</p>
        <form method="post" className="flex items-center gap-2 ml-3">
          <button
            className="flex items-center font-light py-2 text-sm text-gray-500 hover:underline gap-2"
            type="submit"
          >
            Sign out
          </button>
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-24 w-24 bg-green-800 text-white rounded-full flex items-center justify-center text-4xl">
          M
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-sm text-gray-500">Meesam.Z</p>
          <p className="text-sm text-gray-500">meesam.engineer@gmail.com</p>
          <a href="#" className="text-sm underline text-blue-600">
            View Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
