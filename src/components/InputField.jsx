import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, update } from "./TodoSlice/TodoSlice";

const InputField = () => {
  const { todo, edit } = useSelector((state) => state.TodoSlice);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(edit.todo.des);
    setText(edit.todo.title);
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    edit.isEdit
      ? dispatch(
          update({
            id: edit.todo.id,
            title: text,
            des: description,
          })
        )
      : dispatch(
          addTodo({ id: crypto.randomUUID(), title: text, des: description })
        );
    setDescription("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Enter Your todo"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Enter Your discription"
        variant="outlined"
        fullWidth
        multiline
        rows={"4"}
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        variant="contained"
        type="submit"
        fullWidth
        style={{ marginTop: "10px" }}
      >
        Submit
      </Button>
    </form>
  );
};

export default InputField;
