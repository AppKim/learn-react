import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const currentDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id}th diary`);

  if (!currentDiaryItem) return <div>load.....</div>;
  const { createdDate, emotionId, content } = currentDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div className="diary">
      <Header
        title={title}
        leftChild={<Button text="< back" onClick={() => nav(-1)} />}
        rightChild={
          <Button text="edit" onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
