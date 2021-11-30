export const todoActionTypes = {
  FETCH_TODO_LIST_START: "FETCH_TODO_LIST_START",
  FETCH_TODO_LIST_SUCCESS: "FETCH_TODO_LIST_SUCCESS",
  FETCH_TODO_LIST_FAILURE: "FETCH_TODO_LIST_FAILURE",
  ADD_TODO: "ADD_TODO",
};

export const fetchTodoListStart = () => ({
  type: todoActionTypes.FETCH_TODO_LIST_START,
});

export const fetchTodoListSuccess = () => ({
  type: todoActionTypes.FETCH_TODO_LIST_SUCCESS,
});

export const fetchTodoListFailure = () => ({
  type: todoActionTypes.FETCH_TODO_LIST_FAILURE,
});
