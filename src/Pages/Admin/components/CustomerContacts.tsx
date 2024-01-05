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
          <span
            className="text-sm text-gray-500 text-left"
            data-cy="cusContact-table-phone"
          >
            Phone
          </span>
        ),
      },
      {
        accessorKey: "email",
        header: () => (
          <span
            className="text-sm text-gray-500 text-left"
            data-cy="cusContact-table-email"
          >
            Email
          </span>
        ),
      },
      {
        accessorKey: "street",
        header: () => (
          <span
            className="text-sm text-gray-500 text-left"
            data-cy="cusContact-table-street"
          >
            Street
          </span>
        ),
      },
      {
        accessorKey: "city",
        header: () => (
          <span
            className="text-sm text-gray-500 text-left"
            data-cy="cusContact-table-city"
          >
            City
          </span>
        ),
      },
      {
        accessorKey: "state",
        header: () => (
          <span
            className="text-sm text-gray-500 text-left"
            data-cy="cusContact-table-state"
          >
            State
          </span>
        ),
      },
      {
        accessorKey: "postalCode",
        header: () => (
          <span
            className="text-sm text-gray-500 text-left"
            data-cy="cusContact-table-zipcode"
          >
            Zip code
          </span>
        ),
      },
      {
        accessorKey: "action",
        header: () => <span className="text-sm text-gray-500 text-left"></span>,
      },
    ];
  };

  return (
    <div className="flex-col bg-white border rounded-md shadow-lg p-6">
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
