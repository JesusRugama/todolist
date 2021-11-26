import Todo from "../../types/todo.type";
import Checkbox from "../checkbox/checkbox.component";

export const TodoListItem = ({todo}:{todo:Todo}) => (
    <>
        <Checkbox label={todo.todo} />
    </>
)

export default TodoListItem;