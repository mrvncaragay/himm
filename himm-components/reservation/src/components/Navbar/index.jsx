import React from 'react';
import styled from 'styled-components';
import Logo from './components/Logo';
import Search from './components/Search';
import HelperLinks from './components/HelperLinks/';

const Root = styled.div`
  display: flex;
  align-items:center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor}
`;

const Navbar = () => {
  return (
    <Root>
      <Logo />
      <Search />
      <HelperLinks />
    </Root>
  )
};

export default Navbar;