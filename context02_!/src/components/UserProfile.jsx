import { UserContext, UserProvider } from "../context/UserContext";
import { useContext } from "react";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <UserProvider>
      <h3>User Profile</h3>
      <h5>Name:{user.name}</h5>
    </UserProvider>
  );
};

export default UserProfile;
