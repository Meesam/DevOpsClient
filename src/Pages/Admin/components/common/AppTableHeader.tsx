import React from "react";
import { flexRender } from "@tanstack/react-table";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Filter from "./Filter";

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
  );
};

export default AppTableHeader;
