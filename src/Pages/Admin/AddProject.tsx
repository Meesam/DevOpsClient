import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@radix-ui/themes";
import { TbWorldUp } from "react-icons/tb";
import AddProjectBasicInfo from "./components/AddProjectBasicInfo";

const AddProject = () => {
  return (
    <form className="flex flex-col gap-4">
      <ToastContainer />
      <div className="flex justify-between items-center">
        <h1
          className="font-bold text-xl text-gray-600"
          data-cy="create-new-project"
        >
          Create New Project
        </h1>
      </div>
      <div className="flex gap-4">
        {/* Basic info */}
        <AddProjectBasicInfo />
      </div>
    </form>
  );
};

export default AddProject;
