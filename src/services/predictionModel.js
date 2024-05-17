import * as tf from '@tensorflow/tfjs';

export const createModel = () => {
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [45], units: 128, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 64, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 45, activation: 'softmax' }));

  model.compile({
    optimizer: tf.train.adam(),
    loss: tf.losses.meanSquaredError,
  });

  return model;
};

export const trainModel = async (model, draws) => {
  const xs = tf.tensor2d(draws.map(draw => {
    const oneHot = new Array(45).fill(0);
    draw.forEach(num => oneHot[num - 1] = 1);
    return oneHot;
  }));
  
  const ys = xs; // For simplicity, using xs as ys

  await model.fit(xs, ys, {
    epochs: 100,
    shuffle: true,
    batchSize: 5,
  });
};

export const predictNumbers = async (model) => {
  const prediction = model.predict(tf.randomUniform([1, 45])).dataSync();
  const predictedNumbers = Array.from(prediction)
    .map((prob, index) => ({ number: index + 1, prob }))
    .sort((a, b) => b.prob - a.prob)
    .slice(0, 6)
    .map(item => item.number);

  return predictedNumbers;
};
