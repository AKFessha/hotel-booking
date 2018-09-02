import React, { Component } from "react";
import "./style.css";
class Customers extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      filteredResults: [],
      show: true
    };
    this.toogleTable = this.toogleTable.bind(this);
  }
  toogleTable = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  componentDidMount() {
    fetch("http://localhost:8080/api/customers/")
      .then(data => data.json())
      .then(data => {
        this.setState({
          results: data,
          filteredResults: data
        });
      });
  }
  onChange = e => {
    const searchValue = e.target.value;
    const filteredOutput = this.state.results.filter(result => {
      return (
        result.firstname.toLowerCase().includes(searchValue.toLowerCase()) ||
        result.surname.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    this.setState({
      filteredResults: filteredOutput
    });
  };

  render() {
    return (
      <div>
        <h2>Customer List </h2>
        <input placeholder="search by name" onChange={this.onChange} />
        <br /> <br />
        <button onClick={this.toogleTable}> Toggle Table</button>
        <table className="results">
          <thead>
            <tr>
              <th>Id </th>
              <th>Title </th>
              <th> Firstname</th>
              <th>Surname </th>
              <th>Email </th>
            </tr>
          </thead>
          {this.state.show &&
            this.state.filteredResults.map(result => (
              <tbody>
                <tr>
                  <td>{result.id} </td>

                  <td>{result.title} </td>

                  <td>{result.firstname} </td>

                  <td>{result.surname} </td>

                  <td>{result.email}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    );
  }
}

export default Customers;
