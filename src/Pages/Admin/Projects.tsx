import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../Services/ProjectService";
import LoadingBar from "react-top-loading-bar";
import AppTable from "./components/common/AppTable";
import moment from "moment";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { SortingState } from "@tanstack/react-table";
import { IoMdAdd } from "react-icons/io";
import { useHistory } from "react-router";
import { Box, Paper, Typography } from "@mui/material";

const Projects = () => {
  const ref = React.useRef<any>(null);
  const history = useHistory();
  const [sorting, setSorting] = React.useState<SortingState>([]);
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
              return <Chip label="In progress" color="primary" />;
            case "Completed":
              return <Chip label="Compelted" color="success" />;
            case "New":
              return <Chip label="New" color="secondary" />;
          }
        },
      },
      {
        accessorKey: "action",
        header: () => <span className="text-sm text-gray-500 text-left"></span>,
      },
    ];
  };

  const handleAddProject = () => {
    history.replace(`/add-project`);
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Box className="flex justify-between items-center">
        <Typography variant="h5" className="text-gray-800 font-semibold">
          Project List
        </Typography>
        <Button
          onClick={handleAddProject}
          variant="contained"
          color="secondary"
          startIcon={<IoMdAdd color="#FFFFFF" />}
        >
          Add New
        </Button>
      </Box>
      {projects && (
        <AppTable
          sorting={sorting}
          setSorting={setSorting}
          data={projects}
          columns={getColumn()}
        />
      )}
    </Paper>
  );
};

export default Projects;
