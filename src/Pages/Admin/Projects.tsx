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
        header: () => <Typography>Customer</Typography>,
      },
      {
        accessorKey: "projectName",
        header: () => <Typography>Project</Typography>,
      },
      {
        accessorKey: "projectDescription",
        header: () => <Typography>Description</Typography>,
      },
      {
        accessorKey: "projectType",
        header: () => <Typography>Project Type</Typography>,
      },
      {
        accessorKey: "projectStartDate",
        header: () => <Typography>Start Date</Typography>,
        cell: (props: any) => (
          <Typography>
            {moment(props.getValue()).format("MM-DD-YYYY")}
          </Typography>
        ),
      },
      {
        accessorKey: "projectEndDate",
        header: () => <Typography>End Date</Typography>,
        cell: (props: any) => (
          <Typography>
            {moment(props.getValue()).format("MM-DD-YYYY")}
          </Typography>
        ),
      },
      {
        accessorKey: "projectStatus",
        header: () => <Typography>Status</Typography>,
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
        header: () => <Typography></Typography>,
      },
    ];
  };

  const handleAddProject = () => {
    history.replace(`/add-project`);
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Box className="flex justify-between items-center">
        <Typography variant="h5">Project List</Typography>
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
