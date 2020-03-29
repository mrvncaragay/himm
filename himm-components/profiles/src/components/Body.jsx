import React from 'react';
import styled from 'styled-components';

const ReadHide = styled.h4`
  cursor: pointer;
  color: #008489;
  font-weight: 400;
  text-space: wide;
  font-size: 16px;
`;

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.readMore = this.readMore.bind(this);
    }
    handleClick() {
        this.setState({
            expanded: !this.state.expanded
        });
    };
    readMore () {
        if (this.props.room) {
            var myText = this.props.room.listingBody;
            //console.log(myText[0])
        } else {
            return null;
        }
        if(this.state.expanded) {
            return myText;
        } else {
            return myText.substring(0, 600);
        };
    };
    render() {
        
        var expandedDiv = this.readMore();
        return (
            <div>
                <h2 id="body">The Space</h2>
                { expandedDiv }
                {this.state.expanded ? 
                <div>
                    <span><ReadHide onClick={this.handleClick} href="#body">Hide<img style={{bottom: "50px", top: "55px", marginLeft: "15px", maxWidth: "25px", maxHeight: "25px"}} src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/36126f22db95195b39b21d7462a03faf.jpg"/></ReadHide></span>
                </div>
                :  
                <div>
                    <span><ReadHide onClick={this.handleClick}>Read more about the space<img style={{ top: "75px", marginLeft: "15px", maxWidth: "25px", maxHeight: "25px"}} src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/down.jpg"/></ReadHide></span>
                </div>
                }
           </div>
        );
    };
};

export default Body;