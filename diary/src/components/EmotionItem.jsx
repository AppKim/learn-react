import { getEmotionImage } from "../util/get-emotion-image";
import "./EmotionItem.css";

const EmotionItem = ({
  emotionId,
  emotionName,
  isSelected,
  changeSelectId,
  onChangeInput,
}) => {
  const onClick = (event) => {
    changeSelectId(emotionId);
    onChangeInput(event);
  };

  return (
    <div
      className={
        isSelected
          ? `emotionItem emotionItem${emotionId}IsSelected`
          : "emotionItem"
      }
      onClick={onClick}
    >
      <img src={getEmotionImage(emotionId)} />
      <div>{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
