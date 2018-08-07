import React from "react";
class Reservations extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/reservations/")
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
        <h2>Reservations List </h2>
        <label> Search by Id </label>
        <input />
        <button>Search </button>
        <table className="results">
          <thead>
            <tr>
              <th>Id </th>
              <th>Customer Id </th>
              <th> Room Id</th>
              <th>Check in date </th>
              <th>Check out date</th>
              <th>Room Price</th>
            </tr>
          </thead>
          {this.state.results.map(result => (
            <tbody>
              <tr>
                <td>{result.id} </td>

                <td>{result.customer_id} </td>

                <td>{result.room_id} </td>

                <td>{result.check_in_date} </td>

                <td>{result.check_out_date}</td>
                <td>{result.room_price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
export default Reservations;
