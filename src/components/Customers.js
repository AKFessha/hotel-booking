import React, { Component } from "react";
class Customers extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      search: ""
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
  onChange = e => {
    const searchValue = e.target.value;
    this.setState({ search: searchValue });
  };
  render() {
    let filteredCustomers = this.state.results.filter(result => {
      return (
        result.firstname
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        result.surname.toLowerCase().includes(this.state.search.toLowerCase())
      );
    });
    return (
      <div>
        <h2>Customer List </h2>
        <input placeholder="search by name" onChange={this.onChange} />
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
          {filteredCustomers.map(result => (
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
