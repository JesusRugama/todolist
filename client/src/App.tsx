import './App.css';
import TodoList from './components/todo-list/todo-list.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todos for today
      </header>

      <TodoList></TodoList>
        
    </div>
  );
}

export default App;
