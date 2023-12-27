import { Button, Checkbox, TextField } from "@radix-ui/themes";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const AddCustomerContact = () => {
  const [contactState, setContactState] = React.useState({
    phone: "",
    email: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    primaryAddress: false,
  });

  const handleOnChange = React.useCallback(
    (
      e:
        | React.FormEvent<HTMLInputElement>
        | React.ChangeEventHandler<HTMLTextAreaElement>
        | any
    ) => {
      if (e === true) {
        setContactState((prevState) => ({ ...prevState, primaryAddress: e }));
        return;
      } else if (e === false) {
        setContactState((prevState) => ({ ...prevState, primaryAddress: e }));
        return;
      }
      const { name, value } = e.currentTarget;
      setContactState((prevState) => ({ ...prevState, [name]: value }));
    },
    []
  );

  console.log("contactState ", contactState);

  return (
    <div className="flex flex-col gap-4 bg-white h-auto p-5 rounded-md shadow-md w-full">
      <h1 className=" font-semibold text-lg text-gray-600">Contact Info</h1>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <TextField.Input
          type="text"
          name="phone"
          id="phone"
          value={contactState?.phone || ""}
          placeholder="Enter phone number"
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <TextField.Input
          type="text"
          name="email"
          id="email"
          placeholder="Enter email"
          value={contactState?.email || ""}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="street" className="text-sm font-medium">
          Street
        </label>
        <TextField.Input
          type="text"
          name="street"
          id="street"
          value={contactState?.street || ""}
          placeholder="Enter street name"
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-sm font-medium">
          City
        </label>
        <TextField.Input
          type="text"
          name="city"
          id="city"
          placeholder="Enter city name"
          value={contactState?.city || ""}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="state" className="text-sm font-medium">
          State
        </label>
        <TextField.Input
          type="text"
          name="state"
          id="state"
          placeholder="Enter state url"
          value={contactState?.state || ""}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="postalCode" className="text-sm font-medium">
          Zipcode
        </label>
        <TextField.Input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="Enter zipcode url"
          value={contactState?.postalCode || ""}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="zipcode" className="text-sm font-medium">
          Primary Address
        </label>
        <div className="flex justify-between items-center">
          <Checkbox
            size="3"
            name="primaryAddress"
            defaultChecked={contactState.primaryAddress}
            onCheckedChange={handleOnChange}
          />
          <Button type="button">
            <IoMdAdd /> Add New Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerContact;
