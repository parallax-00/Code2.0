import React, { useEffect, useState } from "react";

const FetchEffect = () => {
  const [data, setData] = useState([]);
  const [next, setNext] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    };
    document.title = `Title:${next+1}`;
    fetchData();
  }, [data, next]);
  return (
    <div>
      <h2>First Post Title:</h2>
      {data.length > 0 ? <h4>{data[next].title}</h4> : <p>Loading...</p>}
      <button
        onClick={() => {
          setNext(next + 1);
        }}
      >
        Next Title
      </button>
    </div>
  );
};

export default FetchEffect;
