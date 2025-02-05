import { useState } from "react";

const useInput = (init) => {
  const [input, setInut] = useState(init);

  const onChange = (e) => {
    setInut(e.target.value);
  };

  return [input, onChange];
};

export default useInput;
