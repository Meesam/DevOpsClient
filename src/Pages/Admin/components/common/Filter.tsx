import React from "react";
import { Column, Table as ReactTable } from "@tanstack/react-table";
import TextField from "@mui/material/TextField";
import { GoSearch } from "react-icons/go";
import Box from "@mui/material/Box";

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
    <Box>
      <TextField
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
      <TextField
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
    </Box>
  ) : (
    <TextField
      placeholder="Search..."
      type="text"
      value={(columnFilterValue ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      size="small"
      variant="outlined"
    />
  );
};

export default Filter;
