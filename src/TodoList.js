import { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
