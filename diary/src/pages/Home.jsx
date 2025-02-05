import DiaryList from "../components/DiaryList";
import { DiaryStateContent } from "../App";
import { useContext, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button.jsx";

const filterData = (rawData, pivotDate) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return rawData.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DiaryStateContent);
  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = filterData(data, pivotDate);
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  return (
    <div className="home">
      <Header
        title={`${pivotDate.getFullYear()}/${pivotDate.getMonth() + 1}`}
        leftChild={<Button text="<" onClick={onDecreaseMonth} />}
        rightChild={<Button text=">" onClick={onIncreaseMonth} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
