import { Box, TextField } from "@mui/material";
import React from "react";
import { MdSearch } from "react-icons/md";

const HeaderSearch = () => {
  return (
    <Box className="relative">
      <TextField
        type="text"
        placeholder="Search..."
        size="small"
        variant="outlined"
        fullWidth={true}
      />
    </Box>
  );
};

export default HeaderSearch;
