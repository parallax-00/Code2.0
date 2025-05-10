import React, { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([" "]);
  const [inputValue, setInputValue] = useState(" ");

  const handleSubmit = (e) => {
    if (inputValue.trim()) {
      setTodoList([...todoList, inputValue]);
      setInputValue(" ");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoList}
          onChange={handleChange}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>

      {todoList.map((t) => (
        <ul key={Math.random}>{t}</ul>
      ))}
    </div>
  );
};

export default TodoList;
