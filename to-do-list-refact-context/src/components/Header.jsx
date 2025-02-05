import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>今日は📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};
// これぐらい簡単なコンポーネントはmemoせずにrerenderした方が早い。
export default memo(Header);
