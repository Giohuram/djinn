import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  background: #ffffff;
  padding: 20px;
  margin: 20px auto;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PredictionResult = ({ prediction }) => {
  return (
    <ResultContainer>
      <h2>Résultats des Prédictions</h2>
      <p>{prediction ? prediction.join(', ') : 'Pas encore de prédictions'}</p>
    </ResultContainer>
  );
};

export default PredictionResult;
