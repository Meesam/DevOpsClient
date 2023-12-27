import React from "react";
import {
  Table as ReactTable,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import Filter from "./Filter";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdArrowBackIos,
  MdArrowForwardIos,
} from "react-icons/md";
import { IconButton, Select, TextField } from "@radix-ui/themes";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import RowAction from "./RowAction";

interface AppTableProps {
  data: any[];
  columns: ColumnDef<any>[];
  sorting: any;
  setSorting: any;
}

const AppTable: React.FC<AppTableProps> = ({
  data,
  columns,
  sorting,
  setSorting,
}) => {
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
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
                      <div
                        className="flex flex-col space-y-2 mr-4"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <div className="flex gap-1 items-center">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: <TiArrowSortedDown />,
                            desc: <TiArrowSortedUp />,
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>

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
          <>
            {table.getRowModel().rows.length <= 0 ? (
              <div className="text-sm font-semibold text-gray-500">
                No Record found...
              </div>
            ) : (
              table.getRowModel().rows.map((row: any) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell: any) => {
                      if (cell.column.id === "action") {
                        return (
                          <td
                            key={cell.id}
                            className="text-xl text-gray-700 py-3 text-center"
                          >
                            <RowAction />
                          </td>
                        );
                      }
                      return (
                        <td
                          key={cell.id}
                          className="text-sm text-gray-700 py-3"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </>
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
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
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
    </div>
  );
};

export default AppTable;
