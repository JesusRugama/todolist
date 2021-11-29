import { ChangeEvent } from "react";
import Todo from "../../types/todo.type";
import Checkbox from "../checkbox/checkbox.component";

export const TodoListItem = ({todo}:{todo:Todo}) => {
  
  const onChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    //
    //
  }

  return (
    <>
      <Checkbox 
        checked={todo.completed}
        label={todo.todo}
        onChange={onChange}
      />
    </>
  )
}

export default TodoListItem;