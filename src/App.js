import { Component } from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import Table from "./Table";
import Timer from "./Timer";
import TodoApp from "./TodoApp";

class App extends Component {
  tableData = [
    {
      Name: "Sushree",
      Profession: "Developer",
    },
    {
      Name: "Binay",
      Profession: "Trainer",
    },
    {
      Name: "Tinu",
      Profession: "Student",
    },
  ];
  state = {
    tableData: this.tableData,
  };

  handleDeleteOnClick = (index) => {
    this.setState({
      tableData: this.state.tableData.filter((emp, i) => i !== index),
    });
  };

  handleAddEmployee = (emp) => {
    //emp.preventDefault(); not sure why preventdefault here breaks this so i had to comment
    console.log(emp);
    this.setState({
      tableData: [...this.state.tableData, emp],
    });
  };

  render() {
    return (
      <div>
        Welcome you all to first react demo app
        <Table
          tableData={this.state.tableData}
          handleDeleteOnClick={this.handleDeleteOnClick}
        />
        Add an employee to the database
        <AddEmployeeForm handleAddEmployee={this.handleAddEmployee} />
        <br />
        <Timer />
        <br />
        <TodoApp />
      </div>
    );
  }
}

export default App;
