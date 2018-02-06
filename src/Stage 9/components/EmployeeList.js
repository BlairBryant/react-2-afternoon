import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          { 
            this.props.employees.map(x => <li className="listText" key={x.id} onClick={() => this.props.selectEmployee(x)}>{x.name}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default EmployeeList;