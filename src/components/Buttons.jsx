import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { delTodo,edit } from "./TodoSlice/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const Buttons = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <Box display={"flex"} flexGrow={1} gap={2}>
      <Button
        variant="contained"
        color="warning"
        size="small"
        startIcon={<EditIcon />}
        onClick={()=>dispatch(edit(todo))}
      >
        Edit
      </Button>
      <Button
        size="small"
        variant="contained"
        startIcon={<DeleteIcon />}
        sx={{ backgroundColor: "red" }}
        onClick={() => dispatch(delTodo({ id: todo.id }))}
      >
        Delete
      </Button>
    </Box>
  );
};

export default Buttons;
