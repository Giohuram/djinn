import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 20px;
  background: #f9f9f9;
  margin: 20px auto;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const LotteryForm = ({ onPredict }) => {
  const [draws, setDraws] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const drawsArray = draws.split('\n').slice(0, 10).map(draw => draw.split(',').map(Number));
    onPredict(drawsArray);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <label>Entrez les derniers tirages (maximum 10, séparés par des virgules et des nouvelles lignes):</label>
        <TextArea value={draws} onChange={(e) => setDraws(e.target.value)} />
        <Button type="submit">Prédire</Button>
      </form>
    </FormContainer>
  );
};

export default LotteryForm;
