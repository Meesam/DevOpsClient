import { Table } from "@radix-ui/themes";
import moment from "moment";
import React from "react";
import { useCustomer } from "../../../Context/CustomerContext";
import AppTable from "./AppTable";
import { SortingState } from "@tanstack/react-table";

const CustomerContacts = () => {
  const { customerContacts } = useCustomer();
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const getColumn = () => {
    return [
      {
        accessorKey: "phone",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Phone</span>
        ),
      },
      {
        accessorKey: "email",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Email</span>
        ),
      },
      {
        accessorKey: "street",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Street</span>
        ),
      },
      {
        accessorKey: "city",
        header: () => (
          <span className="text-sm text-gray-500 text-left">City</span>
        ),
      },
      {
        accessorKey: "state",
        header: () => (
          <span className="text-sm text-gray-500 text-left">State</span>
        ),
      },
      {
        accessorKey: "postalCode",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Zip code</span>
        ),
      },
    ];
  };

  return (
    <div className="bg-white rounded-md shadow-md w-full">
      {customerContacts && customerContacts.length > 0 && (
        <AppTable
          sorting={sorting}
          setSorting={setSorting}
          data={customerContacts}
          columns={getColumn()}
        />
      )}
    </div>
  );
};

export default CustomerContacts;
