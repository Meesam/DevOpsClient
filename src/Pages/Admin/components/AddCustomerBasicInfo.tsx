import { TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import { ZodType, boolean, z } from "zod";
import { CustomerBasicInfo } from "../../../Interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const AddCustomerBasicInfo = () => {
  const schema: ZodType<Partial<CustomerBasicInfo>> = z.object({
    name: z.string().min(4).max(10),
    website: z
      .string()
      .regex(
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g
      ),
    logoUrl: z.string().min(4).max(255),
    description: z.string().min(4).max(255),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerBasicInfo>({
    resolver: zodResolver(schema),
  });

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
    </div>
  );
};

export default AddCustomerBasicInfo;
