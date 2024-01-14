import React from "react";
import { flexRender } from "@tanstack/react-table";
import RowAction from "./RowAction";
import { Typography } from "@mui/material";

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
                  <td key={cell.id}>
                    <Typography>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Typography>
                  </td>
                );
              })}
            </tr>
          );
        })
      )}
    </>
  );
};

export default AppTableBody;
