import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 100%;
`;

const Item = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   font-weight: 400;

   h2 {
     margin-top: 0;
     margin-bottom: 8px;
     font-weight: 400;
     color: #222222;
   }
`;

const BoxWrapper = styled.div`
    display: flex;
    width: 86%;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4; 
    padding-bottom: 16px; 
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Box>
        <BoxWrapper>
          <Item>
            <h2>{this.props.room ? this.props.room.title : null} hosted by {this.props.room ? this.props.room.userName : null}</h2>
            <div>
              <span>{this.props.room ? this.props.room.numberOfMaxGuest : null} guests</span>
              &nbsp;
              &bull;
              &nbsp;
              <span>{this.props.room ? this.props.room.numberOfBedrooms : null} bedrooms</span>  
              &nbsp;
              &bull;
              &nbsp;
              <span>{this.props.room ? this.props.room.numberOfBeds : null} beds</span>
              &nbsp;
              &bull;
              &nbsp;
              <span>{this.props.room ? this.props.room.numberOfBaths : null} baths</span>
            </div>
          </Item>

          <div><img style={{ height: "56px", width: "56px" }} src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/IMG_3998.PNG"/></div>   
        </BoxWrapper>
      </Box>
    )
  }
}

export default Header;