import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          done={todo.done}
          onClick={() => onToggle(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;