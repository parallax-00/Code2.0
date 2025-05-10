import React from "react";

const AdditionInLine = () => {
  const myName = "Parallax";

  return (
    <div>
          {<p>{5 + 2}</p>}     {/*  '5+2' will be returned as is where else for '{5+2}' addition 
                                operation will be performed -> JavaScript */}
          <h1>{myName}</h1>  {/* JavaScript syntax of using a variable in jsx */}
    </div>
  );
};

export default AdditionInLine;
