import Todo from "../../types/todo.type";
import TodoListItem from "../todo-list-item/todo-list-item.component"

export const TodoList = ({todoList}: {todoList:Todo[]}) => (
  <ul>
    { todoList.map((todo: Todo) => (
      <li key={todo.id}>
        <TodoListItem todo={todo}></TodoListItem>
      </li>
    ))}
  </ul>
)

export default TodoList;