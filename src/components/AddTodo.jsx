import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    const content = e.target.value;
    this.setState({ content });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
