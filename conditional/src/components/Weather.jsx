import React from "react";

const Weather = () => {
  let temp = 5;
  if (temp < 15) {
    return <h3> Its Cold outside! </h3>;
  } else if (25 <= temp >= 15) {
    return <h3>Its Nice outside!</h3>;
  } else if (temp > 25) {
    return <h3>Its Hot outside!</h3>;
  }
};

export default Weather;
