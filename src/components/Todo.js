import React from 'react';
import TodoList from './TodoList';

class Todo extends React.Component {
  state = {
    tempTodos: '',
    todos: [],
    showTodos: false,
  }

  handleChange = (event) => {
    this.setState({
      tempTodos: event.target.value,
    })
  }

  handleSubmit = (event) => {
    let { tempTodos, todos } = this.state;
    let todoObject = {
      title: tempTodos,
      completed: false,
      id: todos.length
    };

    let copyTodos = [...todos];
    copyTodos.push(todoObject)

    this.setState({
      todos: copyTodos,
      tempTodos: ''
    })
    event.preventDefault()
  }

  completedTodo = (completedId) => {
    let cloneTodos = [...this.state.todos];
    cloneTodos.find(todo => {
      if (todo.id === completedId) {
        return todo.completed === false ? todo.completed = true : todo.completed = false;
      }
    })
    this.setState({
      todos: cloneTodos
    })

  }

  handleRemoveTodo = (todoId) => {
    let copyTodos = [...this.state.todos];
    let updateTodos = copyTodos.filter(todo => todo.id !== todoId);

    this.setState({
      todos: updateTodos,
    })
  }

  countOfUncompletedTodo = (todos) => todos.filter(todo => !todo.completed).length;

  clearAllTodos = () => this.setState({ todos: [] });

  todoToggle = (isShown) => (
    isShown ? this.setState({ showTodos: false }) : this.setState({ showTodos: true })
  )

  render() {
    const { todos, tempTodos, showTodos } = this.state;
    return (
      <div className="todo">
        <button
          className="show_todos"
          onClick={() => {
            this.todoToggle(showTodos)
          }}
        >
          TODO-LIST
        </button>
        {showTodos ?
          <div className="form_block" >
            {todos.length ?
              <button className="button_clear-all" onClick={this.clearAllTodos}>clear all</button>
              : null
            }
            <span
              className="close_todo-button"
              onClick={() => this.todoToggle(showTodos)}
            >
              X
            </span>
            <form className="todo_form" onSubmit={this.handleSubmit}>
              <h3><span>{this.countOfUncompletedTodo(todos)}</span> TO DO</h3>
              <input
                title="maximum of characters is 17"
                maxLength="17"
                autoFocus
                type="text"
                className="todo_input"
                value={tempTodos}
                onChange={this.handleChange} />
            </form>
            {todos.length ?
              <TodoList
                handleRemoveTodo={this.handleRemoveTodo}
                todos={todos}
                completedTodo={this.completedTodo}
              />
              :
              null}
          </div>
          :
          null}
      </div>
    )
  }
};

export default Todo;