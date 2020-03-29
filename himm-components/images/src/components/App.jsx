import React from "react";
import axios from "axios";
import Listings from "./Listings.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getListing = this.getListing.bind(this);
  }

  componentDidMount() {
    this.getListing(30);
  }

  getListing(id) {
    axios.get("http://18.144.84.50/api/listings")
      .then(({ data }) => {
        this.setState({ listing: data[Math.floor(Math.random() * 30)] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        { this.state.listing ? <Listings listing={this.state.listing} /> : "" }
      </div>
    );
  }
}

export default App;
