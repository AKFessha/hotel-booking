import React from "react";
class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      filterResult: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/reviews/")
      .then(data => data.json())
      .then(data => {
        this.setState({ reviews: data, filterResult: data });
      });
  }
  onChange = e => {
    const searchValue = e.target.value;
    this.filteredReviews(searchValue);
  };
  filteredReviews(searchValue) {
    const filteredOutput = this.state.reviews.filter(review => {
      return review.comment.toLowerCase().includes(searchValue.toLowerCase());
    });
    this.setState({
      filterResult: filteredOutput
    });
  }
  render() {
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
          {this.state.filterResult.map(result => (
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
