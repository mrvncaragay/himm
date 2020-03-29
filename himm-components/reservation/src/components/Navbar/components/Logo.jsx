import React from 'react';
import styled from 'styled-components';
import Airbnb from '../../../../assets/Airbnb.svg';

const Root = styled.div`
  display: flex;s
  height: inherit;
  justify-content: center;
  align-items: center;
  padding: 24px 24px;

  svg {
    width: 34px;
    height: 34px;
    fill: ${(props) => props.theme.btnBackgroundColor};
  }
`;

const Logo = () => {
  return (
    <Root>
      <Airbnb />
    </Root>
  )
};

export default Logo;