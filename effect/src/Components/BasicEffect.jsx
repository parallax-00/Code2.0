import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Component mounted for the first time");
  }, []);

  return (
    <div>
      <h1>Check console.</h1>
    </div>
  );
};

export default BasicEffect;
