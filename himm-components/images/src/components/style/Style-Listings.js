import styled from "styled-components";

// the first 5 images display on the default gallery.
export const Image = styled.img`
 max-width: 100%;
 min-height: 100%;
 min-width: 100%;
 object-fit: cover;
 width 100%;
 height 100%;
 :hover {
    -webkit-filter: brightness(70%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 0.3s ease;
 }
`;

// the wrapper that organizes the gallery.
export const Wrapper = styled.div`
  margin: 0 151px;
  padding: 0 80px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 190px 200px;
  grid-gap: 7px;
  grid-template-areas: "first second third"
                        "first fourth fifth";
  #first {
    grid-area: first;
    border-radius: 10px 0px 0px 10px;
  }
  #second {
    grid-area: second;
  }
  #third {
    grid-area: third;
    border-radius: 0px 10px 0px 0px;
  }
  #fourth {
    grid-area: fourth;
  }
  #fifth {
    grid-area: fifth;
    border-radius: 0px 0px 10px 0px;
  }

  @media (max-width: 1440px) {
    margin: 0;
  }
`;
