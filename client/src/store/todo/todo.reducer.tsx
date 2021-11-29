import { ADD_TODO } from "./todo.types";
import Todo from "../../types/todo.type";
import { AnyAction } from "redux";

interface todoState {
  todoList: Todo[];
}

const INITIAL_STATE: todoState = {
  todoList: []
};

const todoReducer = (
  state: todoState = INITIAL_STATE, 
  action: AnyAction
) => {
  switch (action.type) {
    case ADD_TODO: 
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload
        ]
      }
    default:
      return state;
  }
};

export default todoReducer;