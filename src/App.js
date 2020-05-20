import React, { Component } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "todos1" },
      { id: 2, content: "todos2" },
      { id: 3, content: "todos3" },
      { id: 4, content: "todos4" },
    ],
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header todos={this.state.todos} />
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
