import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../Services/CustomerService";
import LoadingBar from "react-top-loading-bar";
import AppTable from "./components/AppTable";
import moment from "moment";
import { Badge } from "@radix-ui/themes";

const Projects = () => {
  const ref = React.useRef<any>(null);
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
  });

  if (isLoading) {
    ref?.current?.continuousStart();
    return <LoadingBar color="#f11946" ref={ref} shadow={true} />;
  }

  const getColumn = () => {
    return [
      {
        accessorKey: "customerName",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Customer</span>
        ),
      },
      {
        accessorKey: "projectName",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Project</span>
        ),
      },
      {
        accessorKey: "projectDescription",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Description</span>
        ),
      },
      {
        accessorKey: "projectType",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Project Type</span>
        ),
      },
      {
        accessorKey: "projectStartDate",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Start Date</span>
        ),
        cell: (props: any) => (
          <span>{moment(props.getValue()).format("MM-DD-YYYY")}</span>
        ),
      },
      {
        accessorKey: "projectEndDate",
        header: () => (
          <span className="text-sm text-gray-500 text-left">End Date</span>
        ),
        cell: (props: any) => (
          <span>{moment(props.getValue()).format("MM-DD-YYYY")}</span>
        ),
      },
      {
        accessorKey: "projectStatus",
        header: () => (
          <span className="text-sm text-gray-500 text-left">Status</span>
        ),
        cell: (props: any) => {
          switch (props.getValue()) {
            case "In Progress":
              return <Badge color="orange">In progress</Badge>;
            case "Completed":
              return <Badge color="green">Compelted</Badge>;
            case "New":
              return <Badge color="blue">New</Badge>;
          }
        },
      },
      {
        accessorKey: "action",
        header: () => <span className="text-sm text-gray-500 text-left"></span>,
      },
    ];
  };

  return (
    <div className="flex-col bg-white border rounded-md shadow-lg p-6">
      <span className="text-gray-800 font-semibold text-lg">Project List</span>
      {projects && <AppTable data={projects} columns={getColumn()} />}
    </div>
  );
};

export default Projects;
