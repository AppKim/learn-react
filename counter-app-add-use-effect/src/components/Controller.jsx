const Controller = ({ changeCounter }) => {
  // console.log('Controller', 'rerendered');
  return (
    <>
      <button
        onClick={() => {
          changeCounter(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          changeCounter(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          changeCounter(-100);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          changeCounter(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          changeCounter(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          changeCounter(+1);
        }}
      >
        +1
      </button>
    </>
  );
};

export default Controller;
