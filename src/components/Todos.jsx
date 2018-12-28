import React, { Component } from "react";

const Todos = ({ todos, deleteTodo, toggleComplete }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="group-todo" key={todo.id}>
          <div className="list-todo">
            <span className={todo.complete === true ? "toggleComplete" : ""}>
              {todo.content}
            </span>
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
              className="btn btn-danger btn-delete"
            >
              X
            </button>
          </div>
        </div>
      );
    })
  ) : (
    <li className="list-group-item">Yeay, you have nothing left to do! </li>
  );
  return <div>{todoList}</div>;
};

export default Todos;
