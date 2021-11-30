import TodoList from "../components/todo-list/todo-list.component";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../store/todo/todo.actions";
import { useEffect } from "react";
import { TodoState } from "../store/todo/todo.types";

const TodoListPage = ({ todoList, fetchCollectionsStart }: any) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);

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
  fetchCollectionsStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);
