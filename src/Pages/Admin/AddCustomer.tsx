import { Button } from "@radix-ui/themes";
import React from "react";
import { FaSave } from "react-icons/fa";
import AddCustomerContact from "./components/AddCustomerContact";
import CustomerContacts from "./components/CustomerContacts";
import AddCustomerBasicInfo from "./components/AddCustomerBasicInfo";

const AddCustomer = () => {
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
        <AddCustomerBasicInfo />

        {/* Address info */}
        <AddCustomerContact />
      </div>
      <h1 className="font-bold text-xl text-gray-600">Customer's Contacts</h1>
      {/* Contact List */}
      <CustomerContacts />
    </form>
  );
};

export default AddCustomer;
