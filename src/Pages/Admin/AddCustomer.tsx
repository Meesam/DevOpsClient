import {
  Button,
  Checkbox,
  Separator,
  Table,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import React from "react";
import { FaSave } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const AddCustomer = () => {
  const [state, setState] = React.useState({
    name: "",
    website: "",
    logoUrl: "",
    description: "",
  });

  const handleOnChange = (
    e:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEventHandler<HTMLTextAreaElement>
      | any
  ) => {
    const { name, value } = e.currentTarget;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  console.log("state ", state);

  return (
    <form className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl text-gray-600">Create New Customer</h1>
        <Button type="button">
          <FaSave /> Save Custome Info
        </Button>
      </div>

      <div className="flex gap-4">
        {/* Basic info */}
        <div className="flex flex-col gap-4 bg-white h-auto p-5 rounded-md shadow-md w-full">
          <h1 className=" font-semibold text-lg text-gray-600">Basic Info</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium">
              Customer Name
            </label>
            <TextField.Input
              type="text"
              name="name"
              id="name"
              value={state?.name || ""}
              placeholder="Enter customer name"
              onChange={handleOnChange}
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
        {/* Address info */}
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
              value={state?.name || ""}
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
              value={state?.website || ""}
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
              value={state?.name || ""}
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
              value={state?.website || ""}
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
              value={state?.logoUrl || ""}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="zipcode" className="text-sm font-medium">
              Zipcode
            </label>
            <TextField.Input
              type="text"
              name="postalCode"
              id="zipcode"
              placeholder="Enter zipcode url"
              value={state?.logoUrl || ""}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="zipcode" className="text-sm font-medium">
              Primary Address
            </label>
            <div className="flex justify-between items-center">
              <Checkbox size="3" />
              <Button type="button">
                <IoMdAdd /> Add New Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-xl text-gray-600">Customer's Contacts</h1>
      <div className="bg-white rounded-md shadow-md w-full">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
              <Table.Cell>danilo@example.com</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
              <Table.Cell>zahra@example.com</Table.Cell>
              <Table.Cell>Admin</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
              <Table.Cell>jasper@example.com</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
    </form>
  );
};

export default AddCustomer;
