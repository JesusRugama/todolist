import TodoList from '../components/todo-list/todo-list.component';
import { todoList } from "../data/todos.sample";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const TodoListPage = () => (
  <>
    <header className="App-header">
      Todos for today
    </header>

    <TodoList todoList={todoList}></TodoList>

    <footer>
    
    </footer>
  </>
)

// const mapStateToProps = createStructuredSelector({
  // currentUser: selectCurrentUser
// });

// const mapDispatchToProps = dispatch => ({
  // checkUserSession: () => dispatch(checkUserSession())
// });

// export default connect(
  // mapStateToProps,
  // mapDispatchToProps
// )(TodoListPage);

export default TodoListPage;