const Viewer = ({ counter }) => {
  // console.log('Viewer', 'rerendered');
  return (
    <>
      <div>現在のカウント：</div>
      <h1>{counter}</h1>
    </>
  );
};

export default Viewer;
