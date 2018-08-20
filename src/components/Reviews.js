import React from "react";
class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }
  onChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/reviews/")
      .then(data => data.json())
      .then(data => {
        this.setState({ reviews: data });
      });
    onSubmit = e => {
      e.preventDefault;
      this.state.reviews.filter(review => {
        review.id === id.change;
      });
    };
  }
  render() {
    return (
      <div>
        <h2> Reviews table </h2>
        <input
          placeholder="search by room type id "
          name="id"
          onChange={this.onChange}
        />
        <button onClick={this.onSubmit}>Search </button>
        <table>
          <thead>
            <tr>
              <th>Id </th>
              <th>Customer Id </th>
              <th>Room type Id </th>
              <th>Rating </th>
              <th>Comment </th>
              <th>Review data </th>
            </tr>
          </thead>
          {this.state.reviews.map(result => (
            <tbody>
              <tr>
                <td> {result.id}</td>
                <td>{result.customer_id} </td>
                <td>{result.room_type_id} </td>
                <td>{result.rating} </td>
                <th>{result.comment} </th>
                <td>{result.review_date} </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
export default Reviews;
