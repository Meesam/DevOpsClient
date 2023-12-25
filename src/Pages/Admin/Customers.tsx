import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCustomers, Customer } from "../../Services/CustomerService";
import LoadingBar from "react-top-loading-bar";
import CustomerTable from "./components/CustomerTable";

const Customers = () => {
  const ref = React.useRef<any>(null);
  const {
    data: customers,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["customers"], queryFn: getAllCustomers });

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
      },
      {
        accessorKey: "updatedDate",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Updated Date</span>
        ),
      },
      {
        accessorKey: "action",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Action</span>
        ),
      },
    ];
  };

  return (
    <div className="flex-col bg-white border rounded-md shadow-lg p-6">
      <span className="text-gray-800 font-semibold text-lg ">
        Customer List
      </span>
      {customers && <CustomerTable data={customers} columns={getColumn()} />}
    </div>
  );
};

export default Customers;
