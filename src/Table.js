import { Component } from "react";
import "./index.css";

class Table extends Component {
  render() {
    const { tableData } = this.props;

    let tableMarkUp =
      tableData.length > 0
        ? tableData.map((emp, index) => {
            return (
              <tr key={index}>
                <td>{emp.Name}</td>
                <td>{emp.Profession}</td>
                <td>
                  <button onClick={() => this.props.handleDeleteOnClick(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        : null;
    return (
      <div>
        <table className="data-table">
          <thead className="data-table-header">
            <tr>
              <td>Name</td>
              <td>Profession</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
                            <td>Binay</td>
                            <td>Trainer</td>
                            <td><button onClick={()=>this.handleClick()}>Delete</button></td>
                        </tr>
                        <tr>
                            <td>Sushree</td>
                            <td>Developer</td>
                            <td><button>Delete</button></td>
                        </tr> */}
            {tableMarkUp}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
