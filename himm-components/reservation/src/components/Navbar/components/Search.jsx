import React from 'react';
import styled from 'styled-components';
import Search from '../../../../assets/Search.svg'

const Root = styled.div`
  height: inherit;
  flex: 0 1 955px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;

const SearchInputContainer = styled.div`
  height: 48px;
  width: 448px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;

  svg {
    padding: 0 15px 0 5px;
    fill: ${(props) => props.theme.strongFont}
  }
`;

const SearchInput = styled.input`
  border: none;
  font-size: 17px;
  font-weight: bold;
  color: ${(props) => props.theme.strongFont};
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.strongFont};
  }
`;

const Navbar = () => {
  return (
    <Root>
      <SearchInputContainer>
        <Search />
        <SearchInput placeholder="Anywhere &middot; Stays" />
      </SearchInputContainer>
    </Root>
  )
};

export default Navbar;