import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import { CustomerBasicInfo } from "../../../Interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaSave } from "react-icons/fa";
import { useCustomer } from "../../../Context/CustomerContext";
import { customerBasicInfoSchema } from "../../../ValidationSchema";

const AddCustomerBasicInfo = () => {
  const { addCustomerBasicInfo } = useCustomer();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerBasicInfo>({
    resolver: zodResolver(customerBasicInfoSchema),
  });

  const addBasicDetail = (data: CustomerBasicInfo) => {
    addCustomerBasicInfo(data);
  };

  return (
    <div className="flex flex-col gap-4 bg-white h-auto p-5 rounded-md shadow-md w-full">
      <h1 className=" font-semibold text-lg text-gray-600">Basic Info</h1>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="name"
          className="text-sm font-medium"
          data-cy="customer-name-label"
        >
          Customer Name
        </label>
        <TextField.Input
          type="text"
          id="name"
          placeholder="Enter customer name"
          {...register("name")}
          data-cy="customer-name-input"
        />
        {errors.name && (
          <span className="text-xs text-red-500" data-cy="name-error">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="website"
          className="text-sm font-medium"
          data-cy="website-label"
        >
          Website
        </label>
        <TextField.Input
          type="text"
          id="website"
          placeholder="Enter website name"
          {...register("website")}
          data-cy="website-input"
        />
        {errors.website && (
          <span className="text-xs text-red-500" data-cy="website-error">
            {errors.website.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="logoUrl"
          className="text-sm font-medium"
          data-cy="LogoUrl-label"
        >
          LogoUrl
        </label>
        <TextField.Input
          type="text"
          id="logoUrl"
          placeholder="Enter logo url"
          {...register("logoUrl")}
          data-cy="LogoUrl-input"
        />
        {errors.logoUrl && (
          <span className="text-xs text-red-500" data-cy="logoUrl-error">
            {errors.logoUrl.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="description"
          className="text-sm font-medium"
          data-cy="Description-label"
        >
          Description
        </label>
        <TextArea
          size="3"
          id="description"
          placeholder="Description"
          {...register("description")}
          data-cy="Description-input"
        />
        {errors.description && (
          <span className="text-xs text-red-500" data-cy="description-error">
            {errors.description.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1 items-end">
        <div className="w-auto">
          <Button
            type="button"
            onClick={handleSubmit(addBasicDetail)}
            data-cy="addContact-button"
          >
            <FaSave /> Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerBasicInfo;
