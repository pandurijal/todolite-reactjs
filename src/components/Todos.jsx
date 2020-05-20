import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <ul className="list-group" key={todo.id}>
          <li
            onClick={() => {
              deleteTodo(todo.id);
            }}
            className="list-group-item"
          >
            {todo.content}
          </li>
        </ul>
      );
    })
  ) : (
    <li className="list-group-item">Yeay, you have nothing left to do! </li>
  );
  return <div>{todoList}</div>;
};

export default Todos;
