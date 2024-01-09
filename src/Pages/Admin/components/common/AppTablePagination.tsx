import { IconButton, Select, TextField } from "@radix-ui/themes";
import React from "react";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface AppTablePaginationProps {
  table: any;
}

const AppTablePagination: React.FC<AppTablePaginationProps> = ({ table }) => {
  return (
    <div className="flex items-center gap-2">
      <IconButton
        color="blue"
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        <MdKeyboardDoubleArrowLeft />
      </IconButton>
      <IconButton
        color="blue"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <MdArrowBackIos />
      </IconButton>

      <IconButton
        color="blue"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <MdArrowForwardIos />
      </IconButton>

      <IconButton
        color="blue"
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
        <TextField.Input
          type="number"
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            table.setPageIndex(page);
          }}
          style={{ maxWidth: 80, minWidth: 80, width: 80 }}
        />
      </span>
      <Select.Root defaultValue="10">
        <Select.Trigger />
        <Select.Content position="popper">
          {[10, 20, 30, 40, 50].map((pageSize, index) => (
            <Select.Item value={pageSize.toString()} key={index}>
              Show {pageSize.toString()}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default AppTablePagination;
