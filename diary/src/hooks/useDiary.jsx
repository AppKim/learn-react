import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContent } from "../App";

const useDiary = (id) => {
  const data = useContext(DiaryStateContent);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("This is a diary that doesn't exist.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, data]);
  return curDiaryItem;
};

export default useDiary;
