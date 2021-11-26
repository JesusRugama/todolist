import './App.css';
import TodoList from './components/todo-list/todo-list.component';
import Todo from './types/todo.type';

const todoList: Todo[] = [
  {
      id: 1,
      todo: 'Wake up at 6am',
      completed: false,
  },
  {
      id: 2,
      todo: 'Eat a healthy breakfast',
      completed: false,
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todos for today
      </header>

      <TodoList todoList={todoList}></TodoList>

      <footer>
        
      </footer>
        
    </div>
  );
}

export default App;
