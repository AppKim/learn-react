import { useRef, useState } from "react";

const Rejister = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    contury: "",
    bio: "",
  });
  const inputRef = useRef();
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <input
          ref={inputRef}
          type="text"
          name="name"
          value={input.name}
          onChange={onChange}
        />
        {input.name}
      </div>
      <div>
        <input
          type="date"
          name="birth"
          value={input.birth}
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.contury} onChange={onChange}>
          <option value="ko">korea</option>
          <option value="us">america</option>
          <option value="ja">japan</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
      <button onClick={onSubmit}>submit</button>
    </>
  );
};

export default Rejister;
