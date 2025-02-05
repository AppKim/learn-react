import "./Viewer.css";
import { emotionList } from "../util/constants";
import { getEmotionImage } from "../util/get-emotion-image";

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find(
    (emotion) => emotion.emotionId === emotionId
  );

  return (
    <div className="viewer">
      <section className="emotionSection">
        <h3>Emotion</h3>
        <div className={`emotionImageWrapper emotionImageWrapper${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="contentSection">
        <h3>Content</h3>
        <div className="contentWrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};
export default Viewer;
