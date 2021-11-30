import { Todo } from "../../store/todo/todo.types";
import TodoListItem from "../todo-list-item/todo-list-item.component";

export const TodoList = ({ todoList }: { todoList: Todo[] }) => (
  <ul>
    {[...todoList]
      .sort((first: Todo, second: Todo): number => {
        return (first.completed ? 1 : 0) - (second.completed ? 1 : 0);
      })
      .map((todo: Todo) => (
        <li key={todo.id}>
          <TodoListItem todo={todo}></TodoListItem>
        </li>
      ))}
  </ul>
);

export default TodoList;
