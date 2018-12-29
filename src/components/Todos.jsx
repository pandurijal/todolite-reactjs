import React, { Component } from "react";

const Todos = ({ todos, deleteTodo, toggleComplete }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="group-todo" key={todo.id}>
          <div className="list-todo">
            <input
              className="input-checkbox"
              type="checkbox"
              onClick={() => {
                toggleComplete(todo.id);
              }}
              checked={todo.complete}
              name={todo.content}
            />
            <label
              className={todo.complete === true ? "completed" : ""}
              for={todo.content}
            >
              {todo.content}
            </label>
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
