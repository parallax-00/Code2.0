import React from "react";

const Greetings = () => {
    const greet = "Hello!";
    const date = new Date();
  return (
    <div>
      <h1>{greet}</h1>
          <p>Year:{date.getFullYear()}</p>
    </div>
  );
};

export default Greetings;
