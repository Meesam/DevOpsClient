import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerContact } from "../../../Interface";
import { useCustomer } from "../../../Context/CustomerContext";
import { customerContactsSchema } from "../../../ValidationSchema";

const AddCustomerContact = () => {
  const { addCustomerContact } = useCustomer();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerContact>({
    resolver: zodResolver(customerContactsSchema),
  });

  const addContactDetails = (data: CustomerContact) => {
    addCustomerContact(data);
  };

  return (
    <div className="flex flex-col gap-4 bg-white h-auto p-5 rounded-md shadow-md w-full">
      <h1 className=" font-semibold text-lg text-gray-600">Contact Info</h1>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="phone"
          className="text-sm font-medium"
          data-cy="Phone-lable"
        >
          Phone
        </label>
        <TextField.Input
          type="text"
          id="phone"
          placeholder="Enter phone number"
          {...register("phone")}
          data-cy="Phone-input"
        />
        {errors.phone && (
          <span className="text-xs text-red-500" data-cy="phone-error">
            {errors.phone.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="text-sm font-medium"
          data-cy="Email-lable"
        >
          Email
        </label>
        <TextField.Input
          type="email"
          id="email"
          placeholder="Enter email"
          {...register("email")}
          data-cy="Email-input"
        />
        {errors.email && (
          <span className="text-xs text-red-500" data-cy="email-error">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="street"
          className="text-sm font-medium"
          data-cy="Street-lable"
        >
          Street
        </label>
        <TextField.Input
          type="text"
          id="street"
          placeholder="Enter street name"
          {...register("street")}
          data-cy="Street-input"
        />
        {errors.street && (
          <span className="text-xs text-red-500" data-cy="street-error">
            {errors.street.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="city"
          className="text-sm font-medium"
          data-cy="City-lable"
        >
          City
        </label>
        <TextField.Input
          type="text"
          id="city"
          placeholder="Enter city name"
          {...register("city")}
          data-cy="City-input"
        />
        {errors.city && (
          <span className="text-xs text-red-500" data-cy="city-error">
            {errors.city.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="state"
          className="text-sm font-medium"
          data-cy="State-lable"
        >
          State
        </label>
        <TextField.Input
          type="text"
          id="state"
          placeholder="Enter state url"
          {...register("state")}
          data-cy="State-input"
        />
        {errors.state && (
          <span className="text-xs text-red-500" data-cy="state-error">
            {errors.state.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="postalCode"
          className="text-sm font-medium"
          data-cy="Zipcode-lable"
        >
          Zipcode
        </label>
        <TextField.Input
          type="text"
          id="postalCode"
          placeholder="Enter zipcode url"
          {...register("postalCode")}
          data-cy="Zipcode-input"
        />
        {errors.postalCode && (
          <span className="text-xs text-red-500" data-cy="postalCode-error">
            {errors.postalCode.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1 items-end">
        <div className="w-auto">
          <Button
            type="button"
            onClick={handleSubmit(addContactDetails)}
            data-cy="addContact-button"
          >
            <IoMdAdd /> Add New Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerContact;
