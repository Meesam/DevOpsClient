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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

interface AppTableProps {
  data: any[];
  columns: ColumnDef<any>[];
  sorting: any;
  setSorting: any;
  applyfilter: boolean;
}

const AppTable: React.FC<AppTableProps> = ({
  data,
  columns,
  sorting,
  setSorting,
  applyfilter,
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
    <Box>
      <Box className="h-2" />
      <TableContainer sx={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="sticky table" className="w-full">
          <AppTableHeader table={table} applyfilter={applyfilter} />
          <TableBody>
            <AppTableBody table={table} />
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="h-2" />
      <AppTablePagination table={table} />
    </Box>
  );
};

export default AppTable;
