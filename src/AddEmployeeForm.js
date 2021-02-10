import { Component } from "react";

class AddEmployeeForm extends Component {
  state = {
    employee: {
      Name: "",
      Profession: "",
    },
  };

  handleOnchange = (event) =>
    this.setState({
      employee: { ...this.state.employee, Name: event.target.value },
    });

  render() {
    return (
      <div>
        <label>Name</label>
        <input
          type="text"
          value={this.state.employee.Name}
          // onChange={(event) =>
          //   this.setState({
          //     employee: { ...this.state.employee, Name: event.target.value },
          //   })
          // }
          onChange={this.handleOnchange}
        />
        <label>Profession</label>
        <input
          type="text"
          value={this.state.employee.Profession}
          onChange={(event) =>
            this.setState({
              employee: {
                ...this.state.employee,
                Profession: event.target.value,
              },
            })
          }
        />
        <button
          onClick={(event) => this.props.handleAddEmployee(this.state.employee)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default AddEmployeeForm;
