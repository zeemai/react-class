import { Component } from "react";

class TodoList extends Component {
  render() {
    const { items } = this.props;

    return (
      <ol>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    );
  }
}

export default TodoList;
