import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: center;
  height: 76px;
  padding: 0 8px;

  &:hover {
    margin-bottom: -2px;
    border-bottom: 2px solid ${(props) => props.theme.strongFont};
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.strongFont};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

const Link = ({ text, Icon = undefined }) => {
  return (
    <Root>
        <Anchor href="#">{Icon}  {text}</Anchor>
    </Root>
  )
};

export default Link;