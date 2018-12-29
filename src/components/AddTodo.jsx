import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    const content = e.target.value;
    this.setState({ content });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div className="form-box">
        <form classname="add-todo" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
            placeholder="Add Todo.."
            autoFocus
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
