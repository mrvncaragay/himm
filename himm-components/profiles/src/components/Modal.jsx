import React from 'react';
import styled from 'styled-components';
import Button from "./Button";

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background-color:  rgba(255, 255, 255, 0.8);
`;
const Box = styled.div`
    display: inline-block;
    z-index: 1;
    height: auto;
    width: 400px;
    position: relative;
    margin: auto;
    top: 45px;
    left: 25%;
    bottom: 25px;
    right: 25%;
    max-width: 100%;
    max-height: 100%;
    line-height: 1.375em;
    @media (max-width: 768px) {
        width: 70%;
        height: 70%;
        }
    color: #484848;
    box-shadow: 1px 1px 20px 1px rgba(15,15,15,0.2);
    padding: 5%;
    background-color: white;
    font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
    div {
        padding: 7px;
    }
`;

const Title = styled.div`
   font-size: 17px;
   font-weight: 620; 
   display: flex;
   flex: 1;
   Button {
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
   }
   span {
      align-items: center;
      justify-content: center;
      flex: 1;
      color: #484848;;
      display: flex;
   }
`;

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <Wrapper show={this.props.show} onClick={this.props.closeModal}>
                    <div style={{
                        transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                        opacity: this.props.show ? "1" : "0"}}>
                        <Box>
                            <Button onClick={this.props.closeModal}><img style={{ maxWidth: "20px", maxHeight: "20px", borderRadius: "50%"}}src="cancel.jpg" /> </Button>
                            <div><h3>Amenities</h3></div>
                            <div><h4>Basic</h4></div>
                            <div>{this.props.room ? this.props.room.amen[0].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[1].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[2].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[3].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[4].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[5].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[6].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[7].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[8].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[9].title : null }</div>
                        </Box>
                    </div>
            </Wrapper>
        )
    }
}

export default Modal;