import React from 'react';

function TodoList(props) {
  const { todos, completedTodo, handleRemoveTodo } = props;

  const completedStyles = {
    textDecoration: 'line-through',
  };
  const ulOverwfowStyles = { overflowY: 'scroll', maxHeight: '185px' };

  return (
    <ul style={todos.length >= 7 ? ulOverwfowStyles : null}>
      {todos.map(todo => {
        return (
          <li className="item" key={todo.id}>
            <input
              className="todo_checkbox"
              type="checkbox"
              onChange={() => {
                completedTodo(todo.id);
              }}
              checked={todo.completed}
            />
            <p style={todo.completed ? completedStyles : null}>{todo.title}</p>
            <button
              type="button"
              onClick={() => {
                handleRemoveTodo(todo.id);
              }}
              className="removeTodo"
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
