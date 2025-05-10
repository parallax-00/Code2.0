import React, { useRef } from "react";

const FocusInput = () => {
  const element = useRef(null);
  const handleClick = () => {
    element.current.focus();
  };
  return (
    <div>
      <input type="text" ref={element} />{" "}
      <button onClick={() => handleClick()}>toFocus</button>
    </div>
  );
};

export default FocusInput;
