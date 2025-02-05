import useInput from '../hooks/useInput';

const HookExam = () => {
  const [name, changeName] = useInput();
  const [birth, changeBirth] = useInput();

  return (
    <>
      <input type="text" value={name} onChange={changeName}></input>
      <input type="text" value={birth} onChange={changeBirth}></input>
    </>
  );
};

export default HookExam;
