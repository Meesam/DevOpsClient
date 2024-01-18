import {
  Button,
  TextField,
  Box,
  Paper,
  Typography,
  Autocomplete,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import React from "react";
import { CustomerBasicInfo, Project } from "../../../Interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaSave } from "react-icons/fa";
import { useCustomer } from "../../../Context/CustomerContext";
import { projectSchema } from "../../../ValidationSchema";
import { useQuery } from "@tanstack/react-query";
import { getAllCustomers } from "../../../Services/CustomerService";

const AddProjectBasicInfo = () => {
  const { data: customers } = useQuery({
    queryKey: ["customers"],
    queryFn: getAllCustomers,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<Project>>({
    resolver: zodResolver(projectSchema),
  });

  const addBasicDetail = (data: Partial<Project>) => {
    //addCustomerBasicInfo(data);

    console.log("data ", data);
  };

  return (
    <Paper>
      <form>
        <Box className="flex flex-col gap-4 h-auto p-5">
          <Typography variant="h6">Basic Info</Typography>
          <Box className="flex flex-col gap-1">
            <Autocomplete
              id="customer-select-"
              options={customers || []}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Customer"
                  inputProps={{
                    ...params.inputProps,
                  }}
                  {...register("customerName")}
                />
              )}
            />
            {errors.customerName && (
              <span className="text-xs text-red-500" data-cy="name-error">
                {errors.customerName.message}
              </span>
            )}
          </Box>
          <Box className="flex flex-col gap-1">
            <TextField
              type="text"
              id="projectName"
              placeholder="Enter project name"
              {...register("projectName")}
              data-cy="projectName-input"
              label="Project Name"
              variant="outlined"
            />
            {errors.projectName && (
              <span
                className="text-xs text-red-500"
                data-cy="projectName-error"
              >
                {errors.projectName.message}
              </span>
            )}
          </Box>
          <Box className="flex flex-col gap-1">
            <Select
              data-cy="projectType-input"
              id="projectType-select"
              label="Project Type"
              variant="outlined"
              defaultValue="New"
              {...register("projectType")}
            >
              <MenuItem value="New">New</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Done">Done</MenuItem>
              <MenuItem value="Close">Close</MenuItem>
            </Select>
            {errors.projectType && (
              <span
                className="text-xs text-red-500"
                data-cy="projectType-error"
              >
                {errors.projectType.message}
              </span>
            )}
          </Box>
          <Box className="flex flex-col gap-1">
            <TextField
              type="date"
              id="projectStartDate"
              placeholder="projectStartDate"
              {...register("projectStartDate")}
              data-cy="projectStartDate-input"
              label="Start Date"
              variant="outlined"
              defaultValue=""
            />
            {errors.projectStartDate && (
              <span
                className="text-xs text-red-500"
                data-cy="projectStartDate-error"
              >
                {errors.projectStartDate.message}
              </span>
            )}
          </Box>
          <Box className="flex flex-col gap-1">
            <TextField
              type="date"
              id="projectEndDate"
              placeholder="projectEndDate"
              {...register("projectEndDate")}
              data-cy="projectEndDate-input"
              label="End Date"
              variant="outlined"
              defaultValue=""
            />
            {errors.projectEndDate && (
              <span
                className="text-xs text-red-500"
                data-cy="projectEndDate-error"
              >
                {errors.projectEndDate.message}
              </span>
            )}
          </Box>
          <Box className="flex flex-col gap-1">
            <TextField
              id="projectDescription"
              placeholder="projectDescription"
              {...register("projectDescription")}
              data-cy="projectDescription-input"
              label="Description"
              variant="outlined"
            />
            {errors.projectDescription && (
              <span
                className="text-xs text-red-500"
                data-cy="projectDescription-error"
              >
                {errors.projectDescription.message}
              </span>
            )}
          </Box>
          <Box className="flex flex-col gap-1 items-end">
            <Box className="w-auto">
              <Button
                type="button"
                data-cy="addProject-button"
                startIcon={<FaSave />}
                variant="contained"
                color="secondary"
                onClick={handleSubmit(addBasicDetail)}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Paper>
  );
};

export default AddProjectBasicInfo;
