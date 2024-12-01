import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // タスクを追加する
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
    });
    todoNameRef.current.value = null;
  };
  
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  const toggleTodo = (toggleId) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === toggleId);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };


  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <input type="text" ref={todoNameRef}></input>
        <button onClick={handleAddTodo}>タスクを追加</button>
        <button onClick={handleClear}>完了したタスクの削除</button>
        <div>残りのタスク{todos.filter((todo) => !todo.completed).length}</div>
      </div>
    </>
  );
}

export default App;
