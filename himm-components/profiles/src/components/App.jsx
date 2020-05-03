import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import Header from './Header.jsx';
import Highlight from './Highlight.jsx';
import Body from './Body.jsx';
import Map from './Map.jsx';
import Amenity from './Amenity.jsx';
import Modal from './Modal.jsx';
import Contact from './Contact.jsx';
import Carousel from './Carousel.jsx';

const Wrapper = styled.div`
    display: flex;
    overflow-wrap: break-word;
    padding-bottom:5%;
    user-select: none;
    height: auto;
    line-height: 1.375em;
    color: #484848;
    
    @media (max-width: 700px) {
      width: 90%;
      height: 60%;
    }

    .more-home {
      color: #222222;
      font-weight: 500;
    }
`;

const MainBodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 700px) {
    width: 90%;
    height: 60%;
    }
`;

const Heading = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 700px) {
    width: 90%;
    height: 60%;
    }
`;

const Highlights = styled.div`
  flex: 1;
  height: auto;
  position: relative;
  border-bottom: 1px solid #e4e4e4;
  @media (max-width: 700px) {
    width: 90%;
    height: 60%;
  }
`;

const ShowAll = styled.h3`
  margin: 0;
  cursor: pointer;
  color: #222222;
  font-weight: 500;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

var randomIndex = Math.floor(Math.random() * 15);

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            rooms: [],
            showModal: false,
            logIn: false,
        };
        // bind here
        this.get = this.get.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openLogIn = this.openLogIn.bind(this);
        this.closeLogIn = this.closeLogIn.bind(this);

    };
    componentDidMount() {
      this.get();
    };
    openModal() {
        this.setState({showModal: true})
    };
    closeModal() {

        this.setState({showModal: false})
    };
    openLogIn() {
        this.setState({logIn : true})
    };
    closeLogIn() {
        this.setState({logIn: false})
    };

    get(rooms, id) {
        axios.get('http://52.53.209.190/api/profiles', { params: { id: id } })
          .then((result) => {    
              this.setState({rooms: result.data});
          })
          .catch((err) => console.log(err));
    }

    
    render() {
        return (
          <Wrapper>
              <MainBodyLeft>
                <Heading>
                  <Header room={this.state.rooms[randomIndex]} />
                </Heading>

                 <Highlights>
                  <Highlight room={this.state.rooms[randomIndex]} />
                </Highlights>

                <Body room={this.state.rooms[randomIndex]} />
                <ShowAll onClick={this.openLogIn}>Contact host</ShowAll>
                <Contact logged={this.state.logIn} closeLogIn={this.closeLogIn}>Contact host</Contact>
                
                <Amenity room={this.state.rooms[randomIndex]} />
                <ShowAll onClick={this.openModal}>Show All 10 Amenities</ShowAll>
                
                <Map />
                <h2 className="more-home">More homes you may like</h2>

                <Carousel room={this.state.rooms} curRoom={this.state.shift} nextRoom={this.nextRoom} preRoom={this.preRoom}/>
              </MainBodyLeft>
            <div>
              <Modal room={this.state.rooms[randomIndex]} show={this.state.showModal} closeModal={this.closeModal} />
            </div>
          </Wrapper>        
        )
    }
}

export default App;
