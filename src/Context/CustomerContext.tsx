import React from "react";
import { CustomerContact, CustomerBasicInfo } from "../Interface";

export interface CustomerContextProps {
  customerContacts: CustomerContact[];
  customerBasicInfo: CustomerBasicInfo | null;
  addCustomerContact: (customerContact: CustomerContact) => void;
  addCustomerBasicInfo: (customerBasicInfo: CustomerBasicInfo) => void;
}

export const CustomerContext = React.createContext<CustomerContextProps>({
  customerContacts: [],
  customerBasicInfo: null,
  addCustomerContact: () => {},
  addCustomerBasicInfo: () => {},
});

const CustomerProvider: React.FC<any> = ({ children }: { children: any }) => {
  const [customerContacts, setCustomerContacts] = React.useState<
    CustomerContact[]
  >([]);

  const [customerBasicInfo, setCustomerBasicInfo] =
    React.useState<CustomerBasicInfo | null>(null);

  const addCustomerContact = React.useCallback(
    (newCustomerContact: CustomerContact) => {
      setCustomerContacts([...customerContacts, newCustomerContact]);
    },
    [customerContacts]
  );

  const addCustomerBasicInfo = (customerBasicInfo: CustomerBasicInfo) => {
    setCustomerBasicInfo(customerBasicInfo);
  };

  return (
    <CustomerContext.Provider
      value={{
        customerContacts,
        customerBasicInfo,
        addCustomerContact,
        addCustomerBasicInfo,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = (): CustomerContextProps => {
  const ctx = React.useContext(CustomerContext);
  return ctx;
};

export default CustomerProvider;
