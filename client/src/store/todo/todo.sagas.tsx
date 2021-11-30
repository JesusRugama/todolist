import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  todoActionTypes,
  fetchTodoListSuccess,
  fetchTodoListFailure,
} from "./todo.actions";

export function* fetchTodoList() {
  // try {
  // const response = yield fetch('https://api.agify.io?name=bella');
  // const json = yield response.json();
  // console.log(json);
  // yield put(fetchTodoListSuccess(todoList));
  // } catch (error) {
  // console.log(error);
  // yield put(fetchTodoListFailure(error.message));
  // }
}

export function* fetchTodosStart() {
  yield takeLatest(todoActionTypes.FETCH_TODO_LIST_START, fetchTodoList);
}

export function* todoSagas() {
  yield all([call(fetchTodosStart)]);
}
