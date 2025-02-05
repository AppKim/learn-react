import { useEffect, useState } from "react";
import "./List.css";
import Todoitem from "./Todoitem";

const List = ({ todos, updateCheckStatus, deleteTodo }) => {
  const [keyword, setKeyword] = useState("");
  const search = (event) => {
    setKeyword(event.target.value);
  };
  const getFilteredData = () => {
    if (keyword === "") return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(keyword.toLowerCase())
    );
  };
  const filteredData = getFilteredData();

  return (
    <div className="List">
      <h3>Todo List🍀</h3>
      <input
        type="text"
        placeholder="キーワードを入力してください。"
        value={keyword}
        onChange={search}
      />
      {filteredData.map((todo) => (
        <Todoitem
          key={todo.id}
          {...todo}
          updateCheckStatus={updateCheckStatus}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default List;
