import React, { useState } from 'react';
import Header from '../components/Header';
import LotteryForm from '../components/LotteryForm';
import PredictionResult from '../components/PredictionResult';
import FrequencyChart from '../components/FrequencyChart';
import { createModel, trainModel, predictNumbers } from '../services/predictionModel';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  min-height: 100vh;
  padding: 20px;
`;

const Home = () => {
  const [prediction, setPrediction] = useState(null);
  const [frequencyData, setFrequencyData] = useState([]);
  const [model, setModel] = useState(createModel());

  const handlePredict = async (draws) => {
    await trainModel(model, draws);
    const result = await predictNumbers(model);
    setPrediction(result);

    const frequency = new Array(45).fill(0);
    draws.forEach(draw => {
      draw.forEach(number => {
        frequency[number - 1] += 1;
      });
    });

    const chartData = frequency.map((freq, index) => ({ number: index + 1, frequency: freq }));
    setFrequencyData(chartData);
  };

  return (
    <AppContainer>
      <Header />
      <LotteryForm onPredict={handlePredict} />
      <PredictionResult prediction={prediction} />
      <FrequencyChart data={frequencyData} />
    </AppContainer> 
  )
}
  export default Home