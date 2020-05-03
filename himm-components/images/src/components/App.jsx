import React from "react";
import axios from "axios";
import Listings from "./Listings.jsx";
import styled from 'styled-components';
import Header from './Header';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

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
    axios.get("http://52.53.209.190/api/listings")
      .then(({ data }) => {
        this.setState({ listing: data[Math.floor(Math.random() * 30)] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Root>
        <Header />
        { this.state.listing ? <Listings listing={this.state.listing} /> : "" }
      </Root>
    );
  }
}

export default App;
