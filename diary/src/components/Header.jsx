import "./Header.css";

const Header = ({ title, leftChild, rightChild, pageBack }) => {
  const onClick = () => pageBack;
  return (
    <div className="header">
      <div className="headerLeft" onClick={onClick}>
        {leftChild}
      </div>
      <div className="headerCenter">{title}</div>
      <div className="headerRight">{rightChild}</div>
    </div>
  );
};

export default Header;
