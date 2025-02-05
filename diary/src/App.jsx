import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
import { createContext, useEffect, useReducer, useRef, useState } from "react";

const reducer = (state, action) => {
  let tmpState;
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      tmpState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      tmpState = state.map((item) =>
        item.id === action.data.id ? action.data : item
      );
      break;
    }
    case "DELETE": {
      tmpState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return console.log("NULL");
  }
  localStorage.setItem("diaryItems", JSON.stringify(tmpState));
  return tmpState;
};

export const DiaryStateContent = createContext();
export const DiaryDispatchContent = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const diaryItems = localStorage.getItem("diaryItems");
    if (!diaryItems) {
      setIsLoading(false);
      return;
    }
    const parsedItems = JSON.parse(diaryItems);
    if (!Array.isArray(parsedItems)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedItems.forEach((item) => {
      if (Number(item.id) > maxId) maxId = Number(item.id);
    });
    idRef.current = maxId + 1;
    dispatch({
      type: "INIT",
      data: parsedItems,
    });
    setIsLoading(false);
  }, []);
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: { id: idRef.current++, createdDate, emotionId, content },
    });
  };
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: { id: idRef.current++, createdDate, emotionId, content },
    });
  };
  const onDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };

  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <DiaryStateContent.Provider value={data}>
        <DiaryDispatchContent.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new" element={<New />}></Route>
            <Route path="/diary/:id" element={<Diary />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </DiaryDispatchContent.Provider>
      </DiaryStateContent.Provider>
    </>
  );
}

export default App;
