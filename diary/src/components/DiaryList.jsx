import Button from "./Button";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const sortData = (type, data) => {
  return data.toSorted((a, b) => {
    if (type === "oldest") {
      return a.createdDate - b.createdDate;
    } else {
      return b.createdDate - a.createdDate;
    }
  });
};

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const nav = useNavigate();
  const sortedData = sortData(sortType, data);
  const changeSortType = (event) => setSortType(event.target.value);
  return (
    <div className="diaryList">
      <div className="menuBar">
        <select value={sortType} onChange={changeSortType}>
          <option value="latest">New</option>
          <option value="oldest">Old</option>
        </select>
        <Button text="Register" type="Possitive" onClick={() => nav("/new")} />
      </div>
      <div className="listWrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default DiaryList;
