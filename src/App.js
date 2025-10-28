import './App.css';
import TodoList from './TodoList';
import React, {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([
    {title: 'Complete WEB DEV HW', done: false}, 
    {title: 'Complete MAD Project 1', done: false},
    {title: 'Complete OS HW', done: false},
  ]);

  const toggleTodo = (index) => {
    const updated = todos.map((todo, i) =>
      i === index ? {...todo, done: !todo.done} : todo
    );
    setTodos(updated);
  };

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <TodoList todos={todos} onToggle = {toggleTodo} />
    </div>
  );
}

export default App;