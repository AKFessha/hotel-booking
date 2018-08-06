import React, { Component } from "react";
class Customers extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/customers/")
      .then(data => data.json())
      .then(data => {
        this.setState({
          results: data
        });
      });
  }
  render() {
    return (
      <div>
        <h2>Customer List </h2>
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
          {this.state.results.map(result => (
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
