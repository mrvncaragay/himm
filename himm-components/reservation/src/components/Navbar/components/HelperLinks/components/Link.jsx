import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 8px;

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.strongFont};
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.strongFont};
  font-size: 14px;
  font-weight: 500;
  display: block;
`;

const Link = ({ text, icon }) => {
  return (
    <Root>
        <Anchor href="#">{text}</Anchor>
    </Root>
  )
};

export default Link;