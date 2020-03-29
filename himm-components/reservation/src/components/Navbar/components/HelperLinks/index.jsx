import React from 'react';
import styled from 'styled-components';
import Link from './components/Link';

const Root = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly; 
`;

const HelperLinks = () => {
  return (
    <Root>
        <Link text="English (US)" />
        <Link text="$ USD" />
        <Link text="Become a host" />
        <Link text="Help" />
        <Link text="Sign up" />
        <Link text="Log in" />
    </Root>
  )
};

export default HelperLinks;