import "./Editor.css";
import { useRef, useState, memo } from "react";

const Editor = ({ createTodo }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const inputContent = (event) => {
    setContent(event.target.value);
  };
  const addTodo = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    createTodo(content);
    setContent("");
  };
  const onKeyDown = (event) => {
    if (event.keyCode === 13) addTodo();
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        type="text"
        placeholder="新しいTodo..."
        onChange={inputContent}
        onKeyDown={onKeyDown}
        value={content}
      />
      <button onClick={addTodo}>追加</button>
    </div>
  );
};

export default memo(Editor);
