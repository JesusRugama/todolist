import TodoList from "../components/todo-list/todo-list.component";
import { connect } from "react-redux";
import { fetchTodoList } from "../store/todo/todo.actions";
import { useEffect } from "react";
import { Todo, TodoState } from "../store/todo/todo.types";

interface Props {
  todoList: Todo[];
  fetchTodoList: typeof fetchTodoList;
}

const TodoListPage = ({ todoList, fetchTodoList }: Props) => {
  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

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
  fetchTodoList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);
