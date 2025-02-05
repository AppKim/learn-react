const Button = ({ count, updateCount }) => {
  return (
    <button
      onClick={() => {
        updateCount(Number(count));
      }}
    >
      {count}
    </button>
  );
};

export default Button;
