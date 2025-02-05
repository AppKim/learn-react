import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";
import { useContext } from "react";
import { DiaryDispatchContent } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContent);
  const curDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id}th diary edit`);

  const onClickDelete = () => {
    if (
      window.confirm(
        "Do you really want to delete the read? It won't come back again"
      )
    ) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("Should I really edit my diary?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div className="editor">
      <Header
        title="Edit diary"
        leftChild={<Button text="< back" onClick={() => nav(-1)} />}
        rightChild={
          <Button text="delete" type="Negative" onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
