import React, { Component } from "react";

const Todos = ({ todos, deleteTodo, toggleComplete }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <ul className="list-group" key={todo.id}>
          <li
            className={
              todo.complete === true
                ? "list-group-item toggleComplete"
                : "list-group-item"
            }
          >
            {todo.content}
            <button
              onClick={() => {
                toggleComplete(todo.id);
              }}
              className="btn btn-primary"
            >
              V
            </button>
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
              className="btn btn-danger"
            >
              X
            </button>
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
