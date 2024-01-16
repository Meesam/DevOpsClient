import React from "react";
import { Button, Paper, TextField, Box, Typography } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerContact } from "../../../Interface";
import { useCustomer } from "../../../Context/CustomerContext";
import { customerContactsSchema } from "../../../ValidationSchema";

const AddCustomerContact = () => {
  const { addCustomerContact } = useCustomer();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerContact>({
    resolver: zodResolver(customerContactsSchema),
  });

  const addContactDetails = (data: CustomerContact) => {
    addCustomerContact(data);
  };

  return (
    <Paper>
      <Box className="flex flex-col gap-4 h-auto p-5 w-full">
        <Typography variant="h6">Contact Info</Typography>
        <Box className="flex flex-col gap-1">
          <TextField
            type="text"
            id="phone"
            placeholder="Enter phone number"
            {...register("phone")}
            data-cy="Phone-input"
            label="Phone"
            variant="outlined"
          />
          {errors.phone && (
            <span className="text-xs text-red-500" data-cy="phone-error">
              {errors.phone.message}
            </span>
          )}
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField
            type="email"
            id="email"
            placeholder="Enter email"
            {...register("email")}
            data-cy="Email-input"
            label="Email"
            variant="outlined"
          />
          {errors.email && (
            <span className="text-xs text-red-500" data-cy="email-error">
              {errors.email.message}
            </span>
          )}
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField
            type="text"
            id="street"
            placeholder="Enter street name"
            {...register("street")}
            data-cy="Street-input"
            label="Street"
            variant="outlined"
          />
          {errors.street && (
            <span className="text-xs text-red-500" data-cy="street-error">
              {errors.street.message}
            </span>
          )}
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField
            type="text"
            id="city"
            placeholder="Enter city name"
            {...register("city")}
            data-cy="City-input"
            label="City"
            variant="outlined"
          />
          {errors.city && (
            <span className="text-xs text-red-500" data-cy="city-error">
              {errors.city.message}
            </span>
          )}
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField
            type="text"
            id="state"
            placeholder="Enter state url"
            {...register("state")}
            data-cy="State-input"
            label="State"
            variant="outlined"
          />
          {errors.state && (
            <span className="text-xs text-red-500" data-cy="state-error">
              {errors.state.message}
            </span>
          )}
        </Box>
        <Box className="flex flex-col gap-1">
          <TextField
            type="text"
            id="postalCode"
            placeholder="Enter zipcode url"
            {...register("postalCode")}
            data-cy="Zipcode-input"
            label="Zipcode"
            variant="outlined"
          />
          {errors.postalCode && (
            <span className="text-xs text-red-500" data-cy="postalCode-error">
              {errors.postalCode.message}
            </span>
          )}
        </Box>
        <Box className="flex flex-col gap-1 items-end">
          <Box className="w-auto">
            <Button
              type="button"
              onClick={handleSubmit(addContactDetails)}
              data-cy="addContact-button"
              color="secondary"
              variant="contained"
              startIcon={<IoMdAdd />}
            >
              Add New Contact
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default AddCustomerContact;
