import React from 'react';
import styled from 'styled-components';

const Amen = styled.div`
   margin: 20px 20px 20px 0;
   border-top: 1px solid #e4e4e4;
   display: flex;
   position: relative;
   flex-direction: column;
   padding: 0px 25px 0px 0px;

   h2 {
       color: #222222;
       font-weight: 500;
   }
`;

const Item = styled.div`
   display: flex;
   flex: 2;
   padding: 10px 20px 0 0;
   font-weight: 400;

   img {
       margin-right: 10px;
   }

   div {
       font-size: 16px;
       display: flex;
       align-items: center;
   }
`;

const ColumnFlex = styled.div`
   display: flex;
   flex: 3;
   flex-direction: row;
   justify-content: space-between;
`;

class Amenity extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Amen>
                <div><h2>Amenities</h2></div>
                <ColumnFlex>
                    <Item>
                        <img style={{ maxWidth: "24px", maxHeight: "24px"}} src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/iron.jpg"></img>
                        <div>{this.props.room ? this.props.room.amen[0].title : null }</div>
                    </Item>
                    <Item>
                        <img style={{ maxWidth: "24px", maxHeight: "24px"}} src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/parking.jpg"></img>
                        <div>{this.props.room ? this.props.room.amen[1].title : null }</div>
                    </Item>
                </ColumnFlex>
                <ColumnFlex>
                    <Item>
                        <img style={{ maxWidth: "28px", maxHeight: "24px"}} src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/wifi.jpg"></img>
                        <div>{this.props.room ? this.props.room.amen[2].title : null }</div>
                    </Item>
                    <Item>
                        <img style={{ maxWidth: "24px", maxHeight: "24px"}} src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/dinning.jpg"></img>
                        <div>{this.props.room ? this.props.room.amen[3].title : null }</div>
                    </Item>
                </ColumnFlex>
            </Amen>
        )
    }
}

export default Amenity;