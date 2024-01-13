//import { IconButton, Select, TextField } from "@radix-ui/themes";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import React from "react";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

interface AppTablePaginationProps {
  table: any;
}

const AppTablePagination: React.FC<AppTablePaginationProps> = ({ table }) => {
  return (
    <div className="flex items-center gap-2">
      <IconButton
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        <MdKeyboardDoubleArrowLeft />
      </IconButton>
      <IconButton
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <MdArrowBackIos />
      </IconButton>

      <IconButton
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <MdArrowForwardIos />
      </IconButton>

      <IconButton
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        <MdKeyboardDoubleArrowRight />
      </IconButton>

      <span className="flex items-center gap-1">
        <div className=" text-sm text-gray-600">Page</div>
        <strong className=" text-sm font-bold text-gray-500">
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
      </span>
      <span className="flex items-center gap-1">
        | <p className=" text-sm text-gray-600">Go to page:</p>
        <TextField
          type="number"
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            table.setPageIndex(page);
          }}
          style={{ maxWidth: 80, minWidth: 80, width: 80 }}
          size="small"
        />
      </span>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Records</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={() => {}}
        >
          {[10, 20, 30, 40, 50].map((pageSize, index) => (
            <MenuItem value={pageSize.toString()}>
              Show {pageSize.toString()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default AppTablePagination;
