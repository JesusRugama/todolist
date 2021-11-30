import TodoList from "../components/todo-list/todo-list.component";
import { connect } from "react-redux";
import { fetchTodoListStart } from "../store/todo/todo.actions";
import { useEffect } from "react";
import { Todo, TodoState } from "../store/todo/todo.types";

interface Props {
  todoList: Todo[];
  fetchTodoListStart: typeof fetchTodoListStart;
}

const TodoListPage = ({ todoList, fetchTodoListStart }: Props) => {
  useEffect(() => {
    fetchTodoListStart();
  }, [fetchTodoListStart]);

  return (
    <>
      <header className="App-header">Todos for today</header>

      <TodoList todoList={todoList}></TodoList>

      <footer></footer>
    </>
  );
};

const mapStateToProps = ({ todos }: { todos: TodoState }) => {
  return { todoList: todos.todoList };
};

const mapDispatchToProps = {
  fetchTodoListStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);
