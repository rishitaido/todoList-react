import React from 'react';

const Todo = ({ title, done, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{
        cursor: 'pointer',
        color: done ? 'red' : 'black',
        userSelect: 'none',
      }}
    >
      {title}
    </li>
  );
};

export default Todo;