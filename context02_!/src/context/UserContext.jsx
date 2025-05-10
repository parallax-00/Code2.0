import { createContext, useState } from "react";

const UserContext = createContext();

const UpdateUser = (newName) => {
  setUser({ name: newUpdate });
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe" });

  return (
    <UserContext.Provider value={{ user, UpdateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
