import Todo from "../../types/todo.type";

export const TodoListItem = ({todo}:{todo:Todo}) => (
    <li>
        { todo.todo }
    </li>
)

export default TodoListItem;