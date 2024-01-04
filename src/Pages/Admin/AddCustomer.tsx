import { Button } from "@radix-ui/themes";
import React from "react";
import AddCustomerContact from "./components/AddCustomerContact";
import CustomerContacts from "./components/CustomerContacts";
import AddCustomerBasicInfo from "./components/AddCustomerBasicInfo";
import CustomerProvider, { useCustomer } from "../../Context/CustomerContext";
import { TbWorldUp } from "react-icons/tb";

const AddCustomer = () => {
  const { customerBasicInfo, customerContacts } = useCustomer();
  const [isPublishButtonActive, setPublishButtonActive] = React.useState(false);

  const handleCustomerPublish = React.useCallback(() => {
    if (customerBasicInfo && customerContacts.length > 0) {
      console.log("call api here");
    }
  }, [customerBasicInfo, customerContacts]);

  React.useEffect(() => {
    if (customerBasicInfo && customerContacts.length > 0) {
      setPublishButtonActive(true);
    } else {
      setPublishButtonActive(false);
    }
  }, [customerBasicInfo, customerContacts]);

  return (
    <form className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl text-gray-600">Create New Customer</h1>
        <Button
          type="button"
          onClick={handleCustomerPublish}
          disabled={!isPublishButtonActive}
        >
          <TbWorldUp /> Publish Customer Info
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
