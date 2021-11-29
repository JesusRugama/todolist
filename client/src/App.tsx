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
      completed: true,
  },
  {
    id: 3,
    todo: '500 squats',
    completed: false,
  },
  {
    id: 4,
    todo: 'Spend time with Family',
    completed: false,
  },
  {
    id: 5,
    todo: 'Complete project KPIs',
    completed: false,
  },
  {
    id: 6,
    todo: 'No screens after 5:00PM',
    completed: false,
  },
  {
    id: 7,
    todo: 'Light dinner',
    completed: false,
  },
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
