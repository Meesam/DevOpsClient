import {
  Button,
  TextField,
  Box,
  Paper,
  Typography,
  Autocomplete,
} from "@mui/material";
import React from "react";
import { CustomerBasicInfo, Project } from "../../../Interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaSave } from "react-icons/fa";
import { useCustomer } from "../../../Context/CustomerContext";
import { customerBasicInfoSchema } from "../../../ValidationSchema";
import { useQuery } from "@tanstack/react-query";
import { getAllCustomers } from "../../../Services/CustomerService";

const AddProjectBasicInfo = () => {
  const { addCustomerBasicInfo } = useCustomer();
  const { data: customers } = useQuery({
    queryKey: ["customers"],
    queryFn: getAllCustomers,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<Project>>({
    resolver: zodResolver(customerBasicInfoSchema),
  });

  const addBasicDetail = (data: CustomerBasicInfo) => {
    addCustomerBasicInfo(data);
  };

  return (
    <Paper>
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
            id="website"
            placeholder="Enter website name"
            {...register("website")}
            data-cy="website-input"
            label="Website"
            variant="outlined"
          />
          {errors.website && (
            <span className="text-xs text-red-500" data-cy="website-error">
              {errors.website.message}
            </span>
          )}
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField
            type="text"
            id="logoUrl"
            placeholder="Enter logo url"
            {...register("logoUrl")}
            data-cy="LogoUrl-input"
            label="LogoUrl"
            variant="outlined"
          />
          {errors.logoUrl && (
            <span className="text-xs text-red-500" data-cy="logoUrl-error">
              {errors.logoUrl.message}
            </span>
          )}
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField
            id="description"
            placeholder="Description"
            {...register("description")}
            data-cy="Description-input"
            label="Description"
            variant="outlined"
          />
          {errors.description && (
            <span className="text-xs text-red-500" data-cy="description-error">
              {errors.description.message}
            </span>
          )}
        </Box>
        <Box className="flex flex-col gap-1 items-end">
          <Box className="w-auto">
            <Button
              type="button"
              onClick={handleSubmit(addBasicDetail)}
              data-cy="addContact-button"
              startIcon={<FaSave />}
              variant="contained"
              color="secondary"
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default AddProjectBasicInfo;
