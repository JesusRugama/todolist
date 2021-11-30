export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

export type TodoState = {
  todoList: Todo[];
};
