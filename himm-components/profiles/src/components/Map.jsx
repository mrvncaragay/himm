import React from 'react';
import styled from 'styled-components';

const Mapdiv = styled.div`
   padding: 20px 20px 0 0;
   border-top: 1px solid #e4e4e4;
   @media (max-width: 786px) {
    width: 70%;
    height: 50%;
  }

  h2 {
    color: #222222;
    font-weight: 500;
  }
`;

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Mapdiv id="location"> 
           <h2>The neighborhood</h2>
            <img 
                style={{ maxWidth: "500px", maxHeight: "450px", paddingBottom: "30px", imageOrientation: "from-image" }}
                src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/Screen+Shot+2020-03-18+at+2.01.15+PM.jpg"
            />
        </Mapdiv>
      </div>
    );
  }
}

export default Map;