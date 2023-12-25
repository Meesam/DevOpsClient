import React from "react";
import {
  Table as ReactTable,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { Customer } from "../../../Services/CustomerService";
import Filter from "./Filter";
import {
  MdOutlineDeleteForever,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { IconButton, Select } from "@radix-ui/themes";

interface CustomerTableProps {
  data: Customer[];
  columns: ColumnDef<Customer>[];
}

const CustomerTable: React.FC<CustomerTableProps> = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <div>
      <div className="h-2" />
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup: any) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => {
                return (
                  <th key={header.id} colSpan={header.colSpan} className="pb-2">
                    {header.isPlaceholder ? null : (
                      <div className="flex flex-col space-y-2 mr-4">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanFilter() &&
                        header.column.id !== "action" ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row: any) => {
            return (
              <tr key={row.id} className="hover:bg-slate-100 hover:rounded-md">
                {row.getVisibleCells().map((cell: any) => {
                  if (cell.column.id === "action") {
                    return (
                      <td
                        key={cell.id}
                        className=" text-xl text-gray-700 py-3 text-center"
                      >
                        <MdOutlineDeleteForever color="#C40006D3" />
                      </td>
                    );
                  }
                  return (
                    <td key={cell.id} className="text-sm text-gray-700 py-3">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <IconButton
          color="blue"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <MdKeyboardDoubleArrowLeft />
        </IconButton>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
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
    </div>
  );
};

export default CustomerTable;
