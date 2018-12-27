import React, { Component } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 0, content: "todos 1", complete: false },
      { id: 1, content: "todos 2", complete: false },
      { id: 2, content: "todos 3", complete: false },
      { id: 3, content: "todos 4", complete: false }
    ]
  };

  addTodo = todo => {
    todo.id = Math.random();
    todo.compleste = false;
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };

  toggleComplete = id => {
    // console.log(this.state.todos[0].complete);
    let todos = [...this.state.todos];
    todos[id].complete = !todos[id].complete;
    this.setState({ todos });
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header todos={this.state.todos} />
          <Todos
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            toggleComplete={this.toggleComplete}
          />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
