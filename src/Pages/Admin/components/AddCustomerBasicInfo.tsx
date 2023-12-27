import { TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const AddCustomerBasicInfo = () => {
  const [state, setState] = React.useState({
    name: "",
    website: "",
    logoUrl: "",
    description: "",
  });

  const handleOnChange = React.useCallback(
    (
      e:
        | React.FormEvent<HTMLInputElement>
        | React.ChangeEventHandler<HTMLTextAreaElement>
        | any
    ) => {
      const { name, value } = e.currentTarget;
      setState((prevState) => ({ ...prevState, [name]: value }));
    },
    []
  );

  return (
    <div className="flex flex-col gap-4 bg-white h-auto p-5 rounded-md shadow-md w-full">
      <h1 className=" font-semibold text-lg text-gray-600">Basic Info</h1>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="name"
          className="text-sm font-medium"
          data-testid="customer-name-label"
        >
          Customer Name
        </label>
        <TextField.Input
          type="text"
          name="name"
          id="name"
          value={state?.name || ""}
          placeholder="Enter customer name"
          onChange={handleOnChange}
          data-testid="customer-name-label"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="website" className="text-sm font-medium">
          Website
        </label>
        <TextField.Input
          type="text"
          name="website"
          id="website"
          placeholder="Enter website name"
          value={state?.website || ""}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="logoUrl" className="text-sm font-medium">
          LogoUrl
        </label>
        <TextField.Input
          type="text"
          name="logoUrl"
          id="logoUrl"
          placeholder="Enter logo url"
          value={state?.logoUrl || ""}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="text-sm font-medium">
          Description
        </label>
        <TextArea
          size="3"
          id="description"
          placeholder="Description"
          name="description"
          value={state?.description || ""}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default AddCustomerBasicInfo;
