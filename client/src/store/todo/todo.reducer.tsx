import { todoActionTypes } from "./todo.actions";
import { TodoState } from "./todo.types";
import { AnyAction } from "redux";
import { todoList } from "../../data/todos.sample";

const INITIAL_STATE: TodoState = {
  todoList: todoList,
};

const todoReducer = (state: TodoState = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case todoActionTypes.FETCH_TODO_LIST_START:
      return {
        ...state,
        todoList: [...state.todoList],
      };
    case todoActionTypes.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};

export default todoReducer;
