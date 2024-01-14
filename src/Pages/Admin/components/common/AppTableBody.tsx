import React from "react";
import { flexRender } from "@tanstack/react-table";
import RowAction from "./RowAction";
import { Typography } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

interface AppTableBodyProps {
  table: any;
}

const AppTableBody: React.FC<AppTableBodyProps> = ({ table }) => {
  return (
    <>
      {table.getRowModel().rows.length <= 0 ? (
        <Typography>No Record found...</Typography>
      ) : (
        table.getRowModel().rows.map((row: any) => {
          return (
            <TableRow
              key={row.id}
              style={{
                height: 10,
              }}
              hover
            >
              {row.getVisibleCells().map((cell: any) => {
                if (cell.column.id === "action") {
                  return (
                    <TableCell
                      key={cell.id}
                      className="text-xl text-gray-700 py-3 text-center h3"
                    >
                      <RowAction />
                    </TableCell>
                  );
                }
                return (
                  <TableCell key={cell.id} className="h-3">
                    <Typography>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })
      )}
    </>
  );
};

export default AppTableBody;
