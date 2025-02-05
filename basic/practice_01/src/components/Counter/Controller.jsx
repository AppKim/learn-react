import Button from "./Button";
const Controller = ({ updateCount }) => {
  return (
    <>
      <Button count={"-1"} updateCount={updateCount}></Button>
      <Button count={"-10"} updateCount={updateCount}></Button>
      <Button count={"-100"} updateCount={updateCount}></Button>
      <Button count={"+100"} updateCount={updateCount}></Button>
      <Button count={"+10"} updateCount={updateCount}></Button>
      <Button count={"+1"} updateCount={updateCount}></Button>
    </>
  );
};

export default Controller;
