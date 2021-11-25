import Todo from "../../types/todo.type";
import TodoListItem from "../todo-list-item/todo-list-item.component"

const todoList: Todo[] = [
    {
        todo: 'Wake up at 6am',
        completed: false,
    },
    {
        todo: 'Eat a healthy breakfast',
        completed: false,
    }
];

export const TodoList = () => (
    <ul>
        { todoList.map((todo: Todo) => (
            <TodoListItem todo={todo}></TodoListItem>
        ))}
    </ul>
)

export default TodoList;