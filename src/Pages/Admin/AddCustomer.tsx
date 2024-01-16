import React from "react";
import AddCustomerContact from "./components/AddCustomerContact";
import CustomerContacts from "./components/CustomerContacts";
import AddCustomerBasicInfo from "./components/AddCustomerBasicInfo";
import { useCustomer } from "../../Context/CustomerContext";
import { TbWorldUp } from "react-icons/tb";
import { addCustomer } from "../../Services/CustomerService";
import { useMutation } from "@tanstack/react-query";
import { CustomerInputRequest } from "../../Interface";
import { Paper, Button, Typography, Box, Grid, Snackbar } from "@mui/material";

const AddCustomer = () => {
  const { customerBasicInfo, customerContacts } = useCustomer();
  const [open, setOpen] = React.useState(false);
  const [isPublishButtonActive, setPublishButtonActive] = React.useState(false);
  const { status, error, mutate } = useMutation({
    mutationFn: addCustomer,
    mutationKey: ["add-customer"],
    onSuccess: () => {
      setOpen(true);
    },
  });

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCustomerPublish = React.useCallback(() => {
    if (customerBasicInfo && customerContacts.length > 0) {
      let finalInput: CustomerInputRequest = {
        customerBasicInfo,
        customerContactsInfo: customerContacts,
      };
      mutate(finalInput);
    }
  }, [customerBasicInfo, customerContacts]);

  React.useEffect(() => {
    if (customerBasicInfo && customerContacts.length > 0) {
      setPublishButtonActive(true);
    } else {
      setPublishButtonActive(false);
    }
  }, [customerBasicInfo, customerContacts]);

  return (
    <form className="flex flex-col gap-4">
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Customer added successfully"
      />
      <Box className="flex justify-between items-center">
        <Typography data-cy="create-new-customer" variant="h5">
          Create New Customer
        </Typography>
        <Button
          type="button"
          onClick={handleCustomerPublish}
          disabled={!isPublishButtonActive || status === "pending"}
          data-cy="publish-button"
          color="secondary"
          startIcon={<TbWorldUp />}
          variant="contained"
        >
          Publish Customer Info
        </Button>
      </Box>

      <Box>
        <Grid container spacing={2}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AddCustomerBasicInfo />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <AddCustomerContact />
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h5" data-cy="heading-customer-contacts">
        Customer's Contacts
      </Typography>
      {/* Contact List */}
      <CustomerContacts />
    </form>
  );
};

export default AddCustomer;
