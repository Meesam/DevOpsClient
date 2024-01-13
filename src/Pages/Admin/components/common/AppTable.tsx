import React from "react";
import {
  Table as ReactTable,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import AppTablePagination from "./AppTablePagination";
import AppTableHeader from "./AppTableHeader";
import AppTableBody from "./AppTableBody";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

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
        <AppTableHeader table={table} />
        <tbody>
          <AppTableBody table={table} />
        </tbody>
      </table>
      <div className="h-2" />
      <AppTablePagination table={table} />
    </div>
  );
};

export default AppTable;
