import React from "react";
import { Button, TextField, Typography, Box, Paper } from "@mui/material";
import { CustomerBasicInfo } from "../../../Interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaSave } from "react-icons/fa";
import { useCustomer } from "../../../Context/CustomerContext";
import { customerBasicInfoSchema } from "../../../ValidationSchema";

const AddCustomerBasicInfo = () => {
  const { addCustomerBasicInfo } = useCustomer();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerBasicInfo>({
    resolver: zodResolver(customerBasicInfoSchema),
  });

  const addBasicDetail = (data: CustomerBasicInfo) => {
    addCustomerBasicInfo(data);
  };

  return (
    <Paper>
      <Box className="flex flex-col gap-4  h-auto p-5 w-full">
        <Typography className=" font-semibold" variant="h6">
          Basic Info
        </Typography>
        <Box className="flex flex-col gap-1">
          <TextField
            type="text"
            id="name"
            placeholder="Enter customer name"
            {...register("name")}
            data-cy="customer-name-input"
            variant="outlined"
            label="Customer Name"
          />
          {errors.name && (
            <span className="text-xs text-red-500" data-cy="name-error">
              {errors.name.message}
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
            variant="outlined"
            label="Website"
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
            variant="outlined"
            label="LogoUrl"
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
            variant="outlined"
            label="Description"
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
              color="secondary"
              startIcon={<FaSave />}
              variant="contained"
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default AddCustomerBasicInfo;
