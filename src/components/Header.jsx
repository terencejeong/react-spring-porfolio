import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  text-align: center;
  color: ${props => props.headerColor};
  font-family: 'Montserrat', sans-serif;
`

const Header = ({ headerColor }) => {
  return (
    <HeaderContainer headerColor={headerColor}>
      <h1>Hi there, I'm Terry!</h1>
    </HeaderContainer>
  )
};

export default Header;
