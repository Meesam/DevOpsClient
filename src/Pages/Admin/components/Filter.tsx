import React from "react";
import { Column, Table as ReactTable } from "@tanstack/react-table";
import { TextField } from "@radix-ui/themes";
import { GoSearch } from "react-icons/go";

interface FilterProps {
  column: Column<any, any>;
  table: ReactTable<any>;
}

const Filter: React.FC<FilterProps> = ({ column, table }) => {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? (
    <div className="flex space-x-2">
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <>
      <TextField.Root>
        <TextField.Slot>
          <GoSearch />
        </TextField.Slot>
        <TextField.Input
          placeholder="Search..."
          type="text"
          value={(columnFilterValue ?? "") as string}
          onChange={(e) => column.setFilterValue(e.target.value)}
          className="text-sm font-normal"
        />
      </TextField.Root>
    </>
  );
};

export default Filter;
