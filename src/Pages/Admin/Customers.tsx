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
import { Box, IconButton, Typography } from "@mui/material";
import { FaFilter } from "react-icons/fa";

const Customers = () => {
  const ref = React.useRef<any>(null);
  const history = useHistory();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [applyfilter, setApplyFilter] = React.useState(false);
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
        header: () => <Typography variant="tableHeading">Name</Typography>,
      },
      {
        accessorKey: "website",
        header: () => <Typography variant="tableHeading">Website</Typography>,
      },
      {
        accessorKey: "logoUrl",
        header: () => <Typography variant="tableHeading">Logo</Typography>,
      },
      {
        accessorKey: "createdDate",
        header: () => (
          <Typography variant="tableHeading">Created Date</Typography>
        ),
        cell: (props: any) => (
          <Typography>
            {moment(props.getValue()).format("MM-DD-YYYY")}
          </Typography>
        ),
      },
      {
        accessorKey: "updatedDate",
        header: () => (
          <Typography variant="tableHeading">Updated Date</Typography>
        ),
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <IconButton onClick={() => setApplyFilter(!applyfilter)}>
            <FaFilter />
          </IconButton>

          <Button
            onClick={handleAddCustomer}
            variant="contained"
            color="secondary"
            startIcon={<IoMdAdd color="#FFFFFF" />}
          >
            Add New
          </Button>
        </Box>
      </Box>

      {customers && (
        <AppTable
          sorting={sorting}
          setSorting={setSorting}
          data={customers}
          columns={getColumn()}
          applyfilter={applyfilter}
        />
      )}
    </Paper>
  );
};

export default Customers;
