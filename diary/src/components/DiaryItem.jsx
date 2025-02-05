import Button from "./Button";
import { getEmotionImage } from "../util/get-emotion-image";
import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, createdDate, emotionId, content }) => {
  const nav = useNavigate();
  return (
    <div className="diaryItem">
      <div className={`imageSeciton imageSeciton${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="contentSection" onClick={() => nav(`/diary/${id}`)}>
        <div className="createdDate">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="buttonSection">
        <Button text="Edit" onClick={() => nav(`/edit/${id}`)} />
      </div>
    </div>
  );
};

export default DiaryItem;
