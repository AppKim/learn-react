import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/header";
import Editor from "./components/editor";
import List from "./components/list";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "Reactの勉強",
    created_at: new Date().toLocaleDateString("sv-SE"),
  },
  {
    id: 1,
    isDone: false,
    content: "Railsの勉強",
    created_at: new Date().toLocaleDateString("sv-SE"),
  },
  {
    id: 2,
    isDone: true,
    content: "健康診断",
    created_at: new Date().toLocaleDateString("sv-SE"),
  },
];

function App() {
  const uniqueId = uuidv4();
  const [todos, setTodos] = useState(mockData);
  const createTodo = (content) => {
    setTodos([
      ...todos,
      {
        id: uniqueId,
        isDone: false,
        content: content,
        created_at: new Date().toLocaleDateString("sv-SE"),
      },
    ]);
  };
  const updateCheckStatus = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const deleteTodo = (targetId) => {
    setTodos(todos.filter((todo) => (todo.id !== targetId ? null : todo)));
  };

  return (
    <div className="App">
      <Header />
      <Editor createTodo={createTodo} />
      <List
        todos={todos}
        updateCheckStatus={updateCheckStatus}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
