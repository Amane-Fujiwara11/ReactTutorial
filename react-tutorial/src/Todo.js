import React from 'react';

const Todo = ({ todo, toggleTodo }) => {

  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.compketed} readOnly onChange={handleTodoClick}></input>
      </label>
      {todo.name}
    </div>
  )
}

export default Todo
