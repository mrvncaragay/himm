import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import Header from './Header.jsx';
import Highlight from './Highlight.jsx';
import Body from './Body.jsx';
import Image from './Image.jsx';
import Map from './Map.jsx';
import Amenity from './Amenity.jsx';
import Modal from './Modal.jsx';
import Contact from './Contact.jsx';
import Carousel from './Carousel.jsx';


const Wrapper = styled.div`
    display: flex;
    //border:2px solid red;
    flex-flow: row wrap;
    overflow-wrap: break-word;
    margin: auto;
    padding-bottom:15%;
    padding-right: 40%;
    padding-left: 5%;
    //position: relative;
    user-select: none;
    width: 560px;
    height: 1100px;
    line-height: 1.375em;
    letter-spacing: wide;
    color: #484848;
    @media (max-width: 700px) {
      width: 90%;
      height: 60%;
    }
    font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;

  // display: flex;
  // flex-flow: row wrap;
  // flex-direction: column;
  // margin: auto;
  // user-select: none;
  // //margin: 0px 200px 0px 190px;
  // overflow-wrap: break-word;
  // //padding: 0px 22px 0px 24px;
  // line-height: 1.375em;
  // height: 1100px;
  // width: 1000px;
  // color: #484848;
  // letter-spacing: wide;
  // @media (max-width: 800px) {
  //    width: 100%;
  //    height: 50%;
  //   }
  // @media (min-height: 300px) {
  //   width: 80%;
  //   height: 100%;
  //   }

  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
`;

const MainBodyLeft = styled.div`
  //border: 2px solid blue;
  //flex:1;
  width: 560px;
  //position: relative;
  height: auto;
  @media (max-width: 700px) {
    width: 90%;
    height: 60%;
    }
`;

const Heading = styled.div`
  //border:2px solid yellow;
  flex:2;
  display: flex;
  position: relative;
  height: auto;
  border-bottom: 1px solid #e4e4e4;  
  @media (max-width: 700px) {
    width: 90%;
    height: 60%;
    }
`;

const Highlights = styled.div`
  flex: 1;
  height: auto;
  position: relative;
  //border:2px solid green;
  border-bottom: 1px solid #e4e4e4;
  @media (max-width: 700px) {
    width: 90%;
    height: 60%;
  }
`;

const ShowAll = styled.h3`
  cursor: pointer;
  color: #008489;
  font-weight: 400;
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
        axios.get('http://18.144.84.50/api/profiles', { params: { id: id } })
          .then((result) => {    
              this.setState({rooms: result.data});
          })
          .catch((err) => console.log(err));
    }

    
    render() {
        return (
          <div>
              <Wrapper>
                  <MainBodyLeft>
                    <Heading>
                    <Header room={this.state.rooms[randomIndex]} />
                    {/* <Image /> */}
                    </Heading>
                    <Highlights>
                    <Highlight room={this.state.rooms[randomIndex]} />
                    </Highlights>
                    <Body room={this.state.rooms[randomIndex]} />
                    
                    <ShowAll onClick={this.openLogIn}>Contact host</ShowAll>
                    
                    <Contact logged={this.state.logIn} closeLogIn={this.closeLogIn}>Contact host</Contact>
                    
                    <Amenity room={this.state.rooms[randomIndex]} />
                    {console.log('rfehere')}
                    <ShowAll onClick={this.openModal}>Show All 10 Amenities</ShowAll>
                    <Map />
                    <h2>More homes you may like</h2>
                    <Carousel room={this.state.rooms} curRoom={this.state.shift} nextRoom={this.nextRoom} preRoom={this.preRoom}/>
                  </MainBodyLeft>
              {/* </Wrapper>  */}
                <div>
                  <Modal room={this.state.rooms[randomIndex]} show={this.state.showModal} closeModal={this.closeModal} />
                </div>
              </Wrapper>         
          </div>
        )
    }
}

export default App;
