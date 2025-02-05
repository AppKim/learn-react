import { useEffect, useState } from "react";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    emotionId: 1,
    content: "",
    createdDate: new Date(),
  });

  const changeSelectId = (value) => setInput({ ...input, emotionId: value });
  const onChangeInput = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === "createdDate") value = new Date(value);
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onSubmitButton = () => {
    onSubmit(input);
  };

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  return (
    <div className="editor">
      <div className="dateSeciton">
        <h1>Date</h1>
        <input
          name="createdDate"
          type="date"
          value={getStringedDate(input.createdDate)}
          onChange={onChangeInput}
        />
      </div>
      <div className="emotionSection">
        <h1>Emotion</h1>
        <div className="emotionWrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={
                Number(input.emotionId) === Number(item.emotionId)
                  ? true
                  : false
              }
              changeSelectId={changeSelectId}
              onChangeInput={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
            />
          ))}
        </div>
      </div>
      <div className="contentSection">
        <h1>Content</h1>
        <textarea
          placeholder="How was your day?"
          name="content"
          value={input.content}
          onChange={onChangeInput}
        ></textarea>
      </div>
      <div className="buttonSection">
        <Button text="Cancle" onClick={() => nav(-1)} />
        <Button text="Rejister" type="Possitive" onClick={onSubmitButton} />
      </div>
    </div>
  );
};

export default Editor;
