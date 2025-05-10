import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((data) => setData(data));
  }, []);

  return [data];
};

export default useFetch;
