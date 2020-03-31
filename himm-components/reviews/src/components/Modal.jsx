import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');
  width: 1100px;
  height: 800px;
  font-family: 'Poppins';
  background: white;
  border-radius: 1%;
  margin-top: 30px;
  #closeBtn {
    width: 40px;
    height: 40px;
    margin-top: 20px;
    margin-left: 20px;
    font-size: 30px;
    background-color: Transparent;
    border: none;
    grid-template-areas: "header"
  }
  .wrapper {
    display: grid;
    gap: 50px;
    grid-template-columns: 270px 200px 220px 200px ;
    grid-template-rows: repeat(100,minmax(5px,auto));
  }
  .headerContainer {
    grid-column: 1;
    grid-row: 1 / 4;
    #wrapper1 {
      color: black;
    }
    margin-top: 20px;
    margin-left: 20px;
  } 
  .reviewContainer{
    grid-column: 3 / 5;
    grid-row: 1 / 4;
    overflow: auto;
    max-height: 100vh;
    height: 700px;
    margin-top: 20px;
    #text {
      margin-bottom: 30px;
    }
  }
`;

const Modal = () => {
  return (
    <Modal show={reviews.show} handleClose={hideModal} >
        <ModalContainer>
          <button id="closeBtn" onClick={hideModal}>X</button>
          <div className="wrapper">
            <div className="headerContainer">
              <HeaderContainer>
                <div id="reviewHeader" className="reviewHeader">
                  <div>
                    <span>★</span> <span>{ totalAverage }
                    {' '}
                    ({ total } {' '} reviews)</span>
                  </div>
                </div>
              </HeaderContainer>
              <PointsContainer>
                <div id="wrapper1">
                  <div id="cleanDiv">
                    <div> Cleanliness </div>
                    <div><Line percent={ (cleanliness / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
                    <div> { (cleanliness / reviews.length).toFixed(1) } </div>
                  </div>
                  <div id="communicationDiv">
                  <div> Communication </div>
                    <div><Line percent={ (communication / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
                    <div>{ (communication / reviews.length).toFixed(1) }</div>
                  </div>
                  <div id="checkInDiv">
                  <div> Check_in </div> 
                    <div><Line percent={ (checkIn / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
                    <div>{ (checkIn / reviews.length).toFixed(1) } </div>
                  </div>
                  <div id="accuracyDiv">
                  <div>Accuracy</div>
                    <div><Line percent={ (accuracy / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
                    <div>{ (accuracy / reviews.length).toFixed(1) }</div>
                  </div>
                  <div id="locationDiv">
                  <div>Location </div>
                    <div><Line percent={ (location / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
                    <div>{ (location / reviews.length).toFixed(1) }</div>
                  </div>
                  <div id="valueDiv">
                    <div>Value </div>
                    <div><Line percent={ (value / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
                    <div>{ (value / reviews.length).toFixed(1) }</div>
                  </div>
                </div>
            </PointsContainer>
            </div>
            <div className="reviewContainer">
              { reviews.map((review, i) => (
              <div key={i}>
                <div id="userInfo">
                  <img id="userImage" src={review.userImg}/>
                <div id="userInfo2">
                  <div id="username">{review.firstName}</div>
                  <div id="created_at">{review.createdMonth}</div>
                </div>
              </div>
              <ReadMoreContainer>
              <div id="text">
                <ReadMoreReact
                  text={review.text}
                  min={1}
                  ideal={70}
                  max={150}
                  readMoreText="read more"
                />
              </div>
              </ReadMoreContainer>
              </div>
              ))}
            </div>
          </div>
        </ModalContainer>
      </Modal> 
  )
}

export default Modal;