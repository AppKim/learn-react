import { createContext, useCallback, useMemo, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: uuidv4(),
    isDone: false,
    content: "Reactの勉強",
    created_at: new Date().toLocaleDateString("sv-SE"),
  },
  {
    id: uuidv4(),
    isDone: false,
    content: "Railsの勉強",
    created_at: new Date().toLocaleDateString("sv-SE"),
  },
  {
    id: uuidv4(),
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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  // const createTodo = (content) => {
  //   dispatch({
  //     type: "CREATE",
  //     data: {
  //       id: uuidv4(),
  //       isDone: false,
  //       content: content,
  //       created_at: new Date().toLocaleDateString("sv-SE"),
  //     },
  //   });
  // };
  const createTodo = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: uuidv4(),
        isDone: false,
        content: content,
        created_at: new Date().toLocaleDateString("sv-SE"),
      },
    });
  }, []);
  const updateCheckStatus = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);
  const deleteTodo = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoriedDispatch = useMemo(
    () => ({ createTodo, updateCheckStatus, deleteTodo }),
    []
  );

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoriedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
