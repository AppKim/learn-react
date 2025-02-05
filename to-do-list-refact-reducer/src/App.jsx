import { useReducer, useState } from "react";
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

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      return state;
  }
};

function App() {
  const uniqueId = uuidv4();
  const [todos, dispatch] = useReducer(reducer, mockData);
  const createTodo = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: uniqueId,
        isDone: false,
        content: content,
        created_at: new Date().toLocaleDateString("sv-SE"),
      },
    });
  };
  const updateCheckStatus = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };
  const deleteTodo = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
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
