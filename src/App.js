import React, { Component } from "react";

import "./App.css";
import Customers from "./components/Customers.js";
import Reservations from "./components/Reservations";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hotel Booking</h1>
        </header>
        <div>
          <h2> Customers List</h2>
          <Customers />
          <h2> Reservations List</h2>
          <Reservations />
          <Reviews />

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
