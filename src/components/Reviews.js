import React from "react";
class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/reviews/")
      .then(data => data.json())
      .then(data => {
        this.setState({ reviews: data });
      });
  }
  onChange = e => {
    const searchValue = e.target.value;

    this.setState({
      search: searchValue
    });
  };

  render() {
    let filteredReviews = this.state.reviews.filter(review => {
      return review.comment
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    return (
      <div>
        <h2> Reviews table </h2>
        <input placeholder="search by comment " onChange={this.onChange} />
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
          {filteredReviews.map(result => (
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
