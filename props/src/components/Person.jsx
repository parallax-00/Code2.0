import React from "react";

const Person = ({name, age}) => {
  return (
    <div>
      <h2>Person's Name:{name}</h2>
      <p>Age:{age}</p>
    </div>
  );
};

export default Person;
