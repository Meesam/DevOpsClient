import { Button } from "@radix-ui/themes";
import React from "react";
import AddCustomerContact from "./components/AddCustomerContact";
import CustomerContacts from "./components/CustomerContacts";
import AddCustomerBasicInfo from "./components/AddCustomerBasicInfo";
import { useCustomer } from "../../Context/CustomerContext";
import { TbWorldUp } from "react-icons/tb";
import { addCustomer } from "../../Services/CustomerService";
import { useMutation } from "@tanstack/react-query";
import { CustomerInputRequest } from "../../Interface";
import { ToastContainer, toast } from "react-toastify";

const AddCustomer = () => {
  const { customerBasicInfo, customerContacts } = useCustomer();
  const [isPublishButtonActive, setPublishButtonActive] = React.useState(false);
  const { status, error, mutate } = useMutation({
    mutationFn: addCustomer,
    mutationKey: ["add-customer"],
    onSuccess: () => {
      toast.success("Customer added Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  const handleCustomerPublish = React.useCallback(() => {
    if (customerBasicInfo && customerContacts.length > 0) {
      let finalInput: CustomerInputRequest = {
        customerBasicInfo,
        customerContactsInfo: customerContacts,
      };
      mutate(finalInput);
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
      <ToastContainer />
      <div className="flex justify-between items-center">
        <h1
          className="font-bold text-xl text-gray-600"
          data-cy="create-new-customer"
        >
          Create New Customer
        </h1>
        <Button
          type="button"
          onClick={handleCustomerPublish}
          disabled={!isPublishButtonActive || status === "pending"}
          data-cy="publish-button"
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
      <h1
        className="font-bold text-xl text-gray-600"
        data-cy="heading-customer-contacts"
      >
        Customer's Contacts
      </h1>
      {/* Contact List */}
      <CustomerContacts />
    </form>
  );
};

export default AddCustomer;
