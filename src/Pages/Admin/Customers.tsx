import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCustomers } from "../../Services/CustomerService";
import LoadingBar from "react-top-loading-bar";

const Customers = () => {
  const ref = React.useRef<any>(null);
  const {
    data: customers,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["customers"], queryFn: getAllCustomers });

  console.log("customers ", customers);
  console.log("isLoading ", isLoading);

  if (isLoading) {
    ref?.current?.continuousStart();
    return <LoadingBar color="#f11946" ref={ref} shadow={true} />;
  }

  return (
    <>
      {customers &&
        customers.map((customer) => {
          return (
            <div className="flex" key={customer.id}>
              <ul className="flex-col gap-2">
                <li>{customer.id}</li>
                <li>{customer.name}</li>
                <li>{customer.createdDate.toString()}</li>
                <li>{customer.updatedDate.toString()}</li>
              </ul>
            </div>
          );
        })}
    </>
  );
};

export default Customers;
