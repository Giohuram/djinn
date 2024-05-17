import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #4CAF50;
  padding: 20px;
  text-align: center;
  color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Djinn - Prédictions de Loterie</h1>
    </HeaderContainer>
  );
};

export default Header;
