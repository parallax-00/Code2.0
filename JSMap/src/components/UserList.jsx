import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Parallax", age: 12 },
    { id: 2, name: "Shivam", age: 10 },
    { id: 3, name: "Saransh", age: 22 },
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>Name:{user.name}</h3>
          <h4>Age:{user.age}</h4>
        </div>
      ))}
    </div>
  );
};

export default UserList;
