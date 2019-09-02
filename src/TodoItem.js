import React from 'react';

const TodoItem = ({todo}) => {
  return (
    <div className="TodoItem">
      <span>{todo.description}</span>
    </div>
  );
}

export default TodoItem;
