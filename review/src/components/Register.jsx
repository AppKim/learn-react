import { useState } from 'react';

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    contury: '',
    bio: '',
  });
  const onChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div>
        <input
          name="name"
          type="text"
          placeholder="이름"
          value={input.name}
          onChange={onChange}
        ></input>
      </div>
      <div>
        <input
          name="birth"
          type="date"
          value={input.birth}
          onChange={onChange}
        ></input>
      </div>
      <div>
        <select name="contury" value={input.contury} onChange={onChange}>
          <option value="kr">korea</option>
          <option value="jp">japan</option>
          <option value="usa">america</option>
        </select>
        {input.contury}
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
    </>
  );
};

export default Register;
