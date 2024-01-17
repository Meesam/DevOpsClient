import React from "react";
import AddProjectBasicInfo from "./components/AddProjectBasicInfo";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const AddProject = () => {
  return (
    <form className="flex flex-col gap-4">
      <Box className="flex justify-between items-center">
        <Typography variant="h5" data-cy="create-new-project">
          Create New Project
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AddProjectBasicInfo />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default AddProject;
