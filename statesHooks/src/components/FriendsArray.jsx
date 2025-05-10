import React from "react";
import { useState } from "react";

const FriendsArray = () => {
  const [friend, setFriend] = useState(["Alex, John, Winston"]);
  const addF = () => {
    setFriend([...friend, "Parallax"]);
  };
  const updateF = () => {
    setFriend(friend.map((f) => (f == "John" ? "John Smith" : f)));
  };
  const removeF = () => {
    setFriend(friend.filter((f) => f != "Alex"));
  };
  return (
    <div>
      {friend.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addF}>Add Friend</button>
      <button onClick={updateF}>Update Friend List</button>
      <button onClick={removeF}>Remove Friend</button>
    </div>
  );
};

export default FriendsArray;
