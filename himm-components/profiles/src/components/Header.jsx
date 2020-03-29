import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    //border: 2px solid pink;
    height: auto;
    float: left;
    padding: 4px;
    left: 0px;
    right: 0px;
    width: 400px;
    rgb(72, 72, 72);
    overflow-wrap:break-word;
    @media (max-width: 700px) {
      width: 100%;
      height: 10%;
      }
    div:nth-child(1) {
      font-size: 31px;
      line-height: 1.05em;
      letter-spacing:.7px;
      letter-spacing: wide;
      font-weight: 630;
      padding-bottom: 15px;
    }
    div:nth-child(2) {
      //border: 1px solid yellow;
      font-size: 17px;
      font-weight: 400;
      line-height: 1.05em;
    }
`;
const Spec = styled.div`
   //border: 2px solid blue;
   overflow-wrap:break-word;
   font-size: 17px;
   position: relative;
   font-weight: 400;
   padding-bottom: 2%;
   width: 340px;
   line-height: 1.175em;
   box-sizing:border-box;
   @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    }
   span:nth-child(1) {
     padding-right: 15px;
   //  border: 2px solid pink;
   }
   span:nth-child(2) {
    padding-right: 15px;
   // border: 2px solid pink;
  }
  span:nth-child(3) {
    padding-right: 15px;
  //  border: 2px solid pink;
  }
  span:nth-child(4) {
    padding-right: 15px;
    //border: 2px solid pink;
  }
`;

const Wrapper = styled.div`
   //border: 2px solid orange;
   float: right;
   display: flex;
   flex-direction: column;
   @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    }
    div:nth-child(1) {
      flex: 1;
      display: flex;
      vertical-align: middle
      flex-direction: column;
      //border: 2px solid purple;
    }
    div:nth-child(2) {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align:center;
      //border: 2px solid green;
    }
`;
 
const Front = styled.div`
   display: flex;
   width: 550px;
   //border: 2px solid black;
   height: auto;
   flex-direction: row;
   justify-content: space-between;
   @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    }
`;

const Item = styled.div`
   display: flex;
   flex-direction: column;
   font-weight: 400;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Box>
        <Front>
          <Item>
            <div>{this.props.room ? this.props.room.title : null}</div>
            <div><a href="#location">{this.props.room ? this.props.room.city : null}</a></div>
          </Item>
          <Wrapper>
            <div><img style={{ height: "75px", width: "80px" }} src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/IMG_3998.PNG"/></div>
            <div>{this.props.room ? this.props.room.userName : null}</div>
          </Wrapper>
        </Front>
        <Spec>
          <span>{this.props.room ? this.props.room.numberOfMaxGuest : null} guests  </span>
          <span>{this.props.room ? this.props.room.numberOfBedrooms : null} bedrooms  </span>  
          <span>{this.props.room ? this.props.room.numberOfBeds : null} beds  </span>
          <span>{this.props.room ? this.props.room.numberOfBaths : null} baths </span>
        </Spec>

      </Box>
    )
  }
}


// for running Enzyme test only
// const Header = ({rooms} ) => (
//     <div>
//         <h1>hello from header.jsx</h1>
//         <h1>{rooms.title}</h1>
//         <h1>{rooms.location}</h1>
//         <h4>{rooms.numberOfMaxGuest} guests  {rooms.numberOfBedrooms} bedrooms  {rooms.numberOfBeds} beds  {rooms.numberOfBaths} baths </h4>
//         <img src={rooms.imageUrl}  />
//     </div>
// )

export default Header;