import React from "react";
import { useCustomer } from "../../../Context/CustomerContext";
import AppTable from "./common/AppTable";
import { SortingState } from "@tanstack/react-table";
import { Paper, Typography } from "@mui/material";

const CustomerContacts = () => {
  const { customerContacts } = useCustomer();
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const getColumn = () => {
    return [
      {
        accessorKey: "phone",
        header: () => (
          <Typography variant="tableHeading" data-cy="cusContact-table-phone">
            Phone
          </Typography>
        ),
      },
      {
        accessorKey: "email",
        header: () => (
          <Typography variant="tableHeading" data-cy="cusContact-table-email">
            Email
          </Typography>
        ),
      },
      {
        accessorKey: "street",
        header: () => (
          <Typography variant="tableHeading" data-cy="cusContact-table-street">
            Street
          </Typography>
        ),
      },
      {
        accessorKey: "city",
        header: () => (
          <Typography variant="tableHeading" data-cy="cusContact-table-city">
            City
          </Typography>
        ),
      },
      {
        accessorKey: "state",
        header: () => (
          <Typography variant="tableHeading" data-cy="cusContact-table-state">
            State
          </Typography>
        ),
      },
      {
        accessorKey: "postalCode",
        header: () => (
          <Typography variant="tableHeading" data-cy="cusContact-table-zipcode">
            Zip code
          </Typography>
        ),
      },
      {
        accessorKey: "action",
        header: () => <Typography></Typography>,
      },
    ];
  };

  return (
    <Paper className="p-6">
      {customerContacts && customerContacts.length > 0 && (
        <AppTable
          sorting={sorting}
          setSorting={setSorting}
          data={customerContacts}
          columns={getColumn()}
          applyfilter={false}
        />
      )}
    </Paper>
  );
};

export default CustomerContacts;
