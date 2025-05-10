import React from "react";

const UserStatus = ({loggedIn, admin}) => {
  if (loggedIn == false) {
    return <h1>Please log in</h1>;
  } else if (loggedIn == true && admin == true) {
    return <h1>Hello Admin</h1>;
  }
  return <h1>Hello User</h1>;
};

export default UserStatus;
