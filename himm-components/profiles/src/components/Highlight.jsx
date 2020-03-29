import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   padding: 10px 10px 0 0;
   margin-bottom: 33px;
`;

const Item = styled.div`
   display: flex;
   padding: 10px 10px 0 0;
  // border: 2px solid blue;
   div:nth-child(1) {
       flex: 0.7;
   }
   div:nth-child(2) {
        font-size: 17px;
        flex: 10;
        display: flex;
        
        flex-direction: column;
        div:nth-child(1) {
            font-weight: 530;
            padding-bottom: 3px;
            //border: 2px solid pink;
        }
        div:nth-child(2) {
            font-weight: 340;
            padding-bottom: 3px;
            
        }
    }
`;

// for test
const Highlight = props => (
    <Container>
        <Item>
            <div><img style={{ maxWidth: "20px", maxHeight: "20px"}} src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/1.jpg"></img></div>
            <div>
                <div>{props.room ? props.room.highlight[1].characteristic : null }</div>
                <div>{props.room ? props.room.highlight[1].description : null }</div>
            </div>
        </Item>
        <Item>
            <div><img style={{ maxWidth: "20px", maxHeight: "20px"}} src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/2.jpg"></img></div>
            <div>
                <div>{props.room ? props.room.highlight[0].characteristic : null }</div>
                <div>{props.room ? props.room.highlight[0].description : null }</div>
            </div>
        </Item>
        <Item>
            <div><img style={{ maxWidth: "20px", maxHeight: "20px"}} src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/3.jpg"></img></div>
            <div>
                <div>{props.room ? props.room.highlight[2].characteristic : null }</div>
                <div>{props.room ? props.room.highlight[2].description : null }</div>
            </div>
        </Item>
        <Item>
            <div><img style={{ maxWidth: "20px", maxHeight: "20px"}} src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/4.jpg"></img></div>
            <div>
                <div>{props.room ? props.room.highlight[3].characteristic : null }</div>
                <div>{props.room ? props.room.highlight[3].description : null }</div>
            </div>
        </Item>
    </Container>
)

export default Highlight;