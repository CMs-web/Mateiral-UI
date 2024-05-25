import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Box, Stack } from "@mui/material";
import Items from "./Items";
import { useSelector } from "react-redux";

export default function ListGroup() {
  const todos = useSelector((state) => state.TodoSlice.todo);

  return (
    <List
      sx={{
        // width: "100%",
        bgcolor: "background.paper",
        padding: "0px 0px 0px 10px",
      }}
    >
      <Box >
        {todos.map((todo, index) => (
          <Items todo={todo} key={index} />
        ))}
      </Box>
    </List>
  );
}
