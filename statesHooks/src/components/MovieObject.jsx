import React from "react";
import { useState } from "react";

const MovieObject = () => {
    const [movie, setMovie] = useState({ title: "Black Panter", ratings: 7 });
    const handler = () => {
        setMovie({...movie, ratings:8})
    }
    
    return <div>
        <h3>Title: { movie.title}</h3>
        <p>Ratings: {movie.ratings}</p>
        <button onClick={handler}>Review Rating</button>
  </div>;
};

export default MovieObject;
