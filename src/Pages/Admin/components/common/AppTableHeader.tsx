import React from "react";
import { flexRender } from "@tanstack/react-table";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Filter from "./Filter";
import { Box } from "@mui/material";

interface AppTableHeaderProps {
  table: any;
}

const AppTableHeader: React.FC<AppTableHeaderProps> = ({ table }) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup: any) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header: any) => {
            return (
              <th key={header.id} colSpan={header.colSpan} className="pb-2">
                {header.isPlaceholder ? null : (
                  <Box
                    className="flex flex-col space-y-2 mr-4"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <Box className="flex gap-1 items-center">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <TiArrowSortedDown />,
                        desc: <TiArrowSortedUp />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </Box>

                    {header.column.getCanFilter() &&
                    header.column.id !== "action" ? (
                      <Box>
                        <Filter column={header.column} table={table} />
                      </Box>
                    ) : null}
                  </Box>
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default AppTableHeader;
