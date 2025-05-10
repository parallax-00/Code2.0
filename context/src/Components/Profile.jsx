import React, { useContext } from "react";
import UserContext from "../Context/UserCon";
const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h5>Please Login</h5>;
  return <h5>Welcome {user.userName}</h5>;
};

export default Profile;
