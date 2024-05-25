import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  edit: {
    todo: {},
    isEdit: false,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        id: action.payload.id,
        title: action.payload.title,
        des: action.payload.des,
      });
    },
    delTodo: (state, action) => {
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.payload.id),
      };
    },
    edit: (state, action) => {
      return {
        ...state,
        edit:{todo:action.payload,isEdit:true}
      }
    },
    update: (state, action) => {
      return {
        ...state,
        todo: state.todo.map((td) =>
          td.id === action.payload.id ? action.payload : td
        ),
        edit: {
          todo: {},
          isEdit: false,
        },
      };
    }
  },
});

export const { addTodo, delTodo, edit, update } = todoSlice.actions;

export default todoSlice.reducer;
