import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const inputTodo = (event) => setTodo(event.target.value);
  const submit = (event) => {
    event.preventDefault();
    if (todo === '') return;
    setTodos((current) => [todo, ...current]);
    setTodo('');
  };
  console.log(todos.map((todo, index) => <li key={index}>{todo}</li>));
  return (
    <div>
      <h1>My To Dos({todos.length})</h1>
      <form onSubmit={submit}>
        <input type="text" value={todo} onChange={inputTodo}></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
