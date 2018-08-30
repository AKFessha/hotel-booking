import React from "react";
class Reservations extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      filteredReservations: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/reservations/")
      .then(data => data.json())
      .then(data => {
        this.setState({
          results: data,
          filteredReservations: data
        });
      });
  }
  onChange = e => {
    const searchValue = e.target.valueAsNumber;

    this.filterReserv(searchValue);
  };

  filterReserv(searchValue) {
    const filteredOutput = this.state.results.filter(result => {
      return result.room_id === searchValue || isNaN(searchValue);
    });
    this.setState({
      filteredReservations: filteredOutput
    });
  }

  render() {
    return (
      <div>
        <h2>Reservations List </h2>
        <input
          placeholder="search by id"
          type="number"
          onChange={this.onChange}
        />
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
          {this.state.filteredReservations.map(result => (
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
