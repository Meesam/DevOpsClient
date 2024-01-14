import React from "react";
import { flexRender } from "@tanstack/react-table";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Filter from "./Filter";
import { Box } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

interface AppTableHeaderProps {
  table: any;
  applyfilter: boolean;
}

const AppTableHeader: React.FC<AppTableHeaderProps> = ({
  table,
  applyfilter,
}) => {
  return (
    <TableHead>
      {table.getHeaderGroups().map((headerGroup: any) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header: any) => {
            return (
              <TableCell
                key={header.id}
                align={header.numeric ? "right" : "left"}
                padding={header.disablePadding ? "none" : "normal"}
              >
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

                    {applyfilter &&
                    header.column.getCanFilter() &&
                    header.column.id !== "action" ? (
                      <Box>
                        <Filter column={header.column} table={table} />
                      </Box>
                    ) : null}
                  </Box>
                )}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableHead>
  );
};

export default AppTableHeader;
