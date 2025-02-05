import { TodoDispatchContext } from "../App";
import "./Todoitem.css";
import { memo, useContext } from "react";

const Todoitem = ({ id, content, created_at, isDone }) => {
  const { updateCheckStatus, deleteTodo } = useContext(TodoDispatchContext);
  const checkItem = () => {
    updateCheckStatus(id);
  };
  const deleteItem = () => {
    deleteTodo(id);
  };
  return (
    <div className="Todoitem">
      <div className="left">
        <input type="checkbox" checked={isDone} onChange={checkItem} />
        <label className="content">{content}</label>
      </div>
      <div className="right">
        <span className="date">{created_at}</span>
        <button onClick={deleteItem}>削除</button>
      </div>
    </div>
  );
};

// const memorizedTodoitem = memo(Todoitem, (prevProps, nextProps) => {
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.created_at !== nextProps.created_at) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;

//   return true;
// });
export default memo(Todoitem);
