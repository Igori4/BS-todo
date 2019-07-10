import React from 'react';

function TodoList(props) {
  let { todos, completedTodo, handleRemoveTodo } = props;

  let completedStyles = {
    textDecoration: "line-through"
  }
  let ulOverwfowStyles = { overflowY: "scroll", maxHeight: '185px' };

  return (
    <ul style={todos.length >= 7 ? ulOverwfowStyles : null}>
      {todos.map(todo => {

        return (
          <li className="item" key={todo.id} >
            <input
              className="todo_checkbox"
              type="checkbox"
              onChange={() => {
                completedTodo(todo.id)
              }}
              checked={todo.completed}
            />
            <p style={todo.completed ? completedStyles : null} >
              {todo.title}
            </p>
            <button onClick={() => {
              handleRemoveTodo(todo.id)
            }} className="removeTodo">X</button>
          </li>
        )

      })}
    </ul>
  )
}

export default TodoList;