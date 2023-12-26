import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  Popover,
  TextArea,
} from "@radix-ui/themes";
import { CgDetailsMore } from "react-icons/cg";
import React from "react";
import { MdEdit, MdOutlineDeleteForever } from "react-icons/md";

const RowAction = () => {
  return (
    <>
      <Popover.Root>
        <Popover.Trigger>
          <Button variant="ghost">
            <CgDetailsMore />
          </Button>
        </Popover.Trigger>
        <Popover.Content style={{ width: 100 }}>
          <Flex gap="3" direction="column">
            <Button variant="ghost">
              <MdEdit /> <p className=" text-xs text-gray-600">Edit</p>
            </Button>
            <Button variant="ghost">
              <MdOutlineDeleteForever />
              <p className=" text-xs text-gray-600">Delete</p>
            </Button>
          </Flex>
        </Popover.Content>
      </Popover.Root>
    </>
  );
};

export default RowAction;
