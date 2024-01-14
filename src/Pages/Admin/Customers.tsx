import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCustomers } from "../../Services/CustomerService";
import LoadingBar from "react-top-loading-bar";
import AppTable from "./components/common/AppTable";
import moment from "moment";
import { SortingState } from "@tanstack/react-table";
import Button from "@mui/material/Button";
import { IoMdAdd } from "react-icons/io";
import { useHistory } from "react-router";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

const Customers = () => {
  const ref = React.useRef<any>(null);
  const history = useHistory();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const { data: customers, isLoading } = useQuery({
    queryKey: ["customers"],
    queryFn: getAllCustomers,
  });

  if (isLoading) {
    ref?.current?.continuousStart();
    return <LoadingBar color="#f11946" ref={ref} shadow={true} />;
  }

  const getColumn = () => {
    return [
      {
        accessorKey: "name",
        header: () => <Typography>Name</Typography>,
      },
      {
        accessorKey: "website",
        header: () => <Typography>Website</Typography>,
      },
      {
        accessorKey: "logoUrl",
        header: () => <Typography>Logo</Typography>,
      },
      {
        accessorKey: "createdDate",
        header: () => <Typography>Created Date</Typography>,
        cell: (props: any) => (
          <Typography>
            {moment(props.getValue()).format("MM-DD-YYYY")}
          </Typography>
        ),
      },
      {
        accessorKey: "updatedDate",
        header: () => <Typography>Updated Date</Typography>,
        cell: (props: any) => (
          <Typography>
            {moment(props.getValue()).format("MM-DD-YYYY")}
          </Typography>
        ),
      },
      {
        accessorKey: "action",
        header: () => <Typography></Typography>,
      },
    ];
  };

  const handleAddCustomer = () => {
    history.replace(`/add-customer`);
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Box className="flex justify-between items-center">
        <Typography variant="h5">Customer List</Typography>
        <Button
          onClick={handleAddCustomer}
          variant="contained"
          color="secondary"
          startIcon={<IoMdAdd color="#FFFFFF" />}
        >
          Add New
        </Button>
      </Box>

      {customers && (
        <AppTable
          sorting={sorting}
          setSorting={setSorting}
          data={customers}
          columns={getColumn()}
        />
      )}
    </Paper>
  );
};

export default Customers;
