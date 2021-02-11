import { Component } from "react";
import TodoList from "./TodoList";

class TodoApp extends Component {
  state = {
    items: [],
    currentItem: "",
  };

  handleOnChnage = (e) => {
    this.setState({ currentItem: e.target.value });
  };

  handleNewItemSubmit = (e) => {
    e.preventDefault();
    //if (this.state.currentItem.trim().length === 0) return;
    if (this.state.currentItem.length === 0) return;

    //this.setState({ items: [...this.state.items, this.state.currentItem] });
    this.setState({
      items: this.state.items.concat(this.state.currentItem),
      currentItem: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleNewItemSubmit}>
          <label>Type in what you need to do next?</label>
          <input
            placeholder="Task..."
            value={this.state.currentItem}
            onChange={this.handleOnChnage}
          />
          <button>Add item #{this.state.items.length + 1}</button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default TodoApp;
