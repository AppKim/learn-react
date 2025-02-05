import "./Button.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button className={`button button${type}`} value={text} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
