import "./Todoitem.css";

const Todoitem = ({
  id,
  content,
  created_at,
  isDone,
  updateCheckStatus,
  deleteTodo,
}) => {
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

export default Todoitem;
