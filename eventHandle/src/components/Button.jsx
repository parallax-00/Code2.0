import React from "react";
const handleClick=() => {
    console.log(Math.round(Math.random()*10));
    
}

const Button = () => {
  return (
    <div>
      <button
        onClick={() => {
          handleClick()
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Button;
