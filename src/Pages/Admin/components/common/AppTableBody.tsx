import React from "react";
import { flexRender } from "@tanstack/react-table";
import RowAction from "../RowAction";

interface AppTableBodyProps {
  table: any;
}

const AppTableBody: React.FC<AppTableBodyProps> = ({ table }) => {
  return (
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
                  <td key={cell.id} className="text-sm text-gray-700 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
