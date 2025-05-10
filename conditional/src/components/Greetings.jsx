import React from 'react';
import UserStatus from './UserStatus';

const Greetings = (prop) => {
  
  if (prop.timeOfDay == 'morning' ) {
    return (<p>Good Morning  </p>)
  } else if(prop.timeOfDay == 'noon') {
    return (<p>Good Afternoon</p>)
  } else if(prop.timeOfDay == 'evening') {
    return (<p>Good Evening</p>)
  }
}

export default Greetings;
