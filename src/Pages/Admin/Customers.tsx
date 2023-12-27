import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCustomers } from "../../Services/CustomerService";
import LoadingBar from "react-top-loading-bar";
import AppTable from "./components/AppTable";
import moment from "moment";
import { SortingState } from "@tanstack/react-table";
import { Button } from "@radix-ui/themes";
import { IoMdAdd } from "react-icons/io";
import { useHistory } from "react-router";

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
        header: () => (
          <span className="text-sm text-gray-500 text-left">Name</span>
        ),
      },
      {
        accessorKey: "website",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Website</span>
        ),
      },
      {
        accessorKey: "logoUrl",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Logo</span>
        ),
      },
      {
        accessorKey: "createdDate",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Created Date</span>
        ),
        cell: (props: any) => (
          <span>{moment(props.getValue()).format("MM-DD-YYYY")}</span>
        ),
      },
      {
        accessorKey: "updatedDate",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Updated Date</span>
        ),
        cell: (props: any) => (
          <span>{moment(props.getValue()).format("MM-DD-YYYY")}</span>
        ),
      },
      {
        accessorKey: "action",
        header: () => <span className="text-sm text-gray-500 text-left"></span>,
      },
    ];
  };

  const handleAddCustomer = () => {
    history.replace(`/add-customer`);
  };

  return (
    <div className="flex-col bg-white border rounded-md shadow-lg p-6">
      <div className="flex justify-between items-center">
        <span className="text-gray-800 font-semibold text-lg ">
          Customer List
        </span>
        <Button onClick={handleAddCustomer}>
          <IoMdAdd color="#FFFFFF" /> Add New
        </Button>
      </div>

      {customers && (
        <AppTable
          sorting={sorting}
          setSorting={setSorting}
          data={customers}
          columns={getColumn()}
        />
      )}
    </div>
  );
};

export default Customers;
