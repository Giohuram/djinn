// We don't need to modify this file for the UI
export const predictLotteryNumbers = (draws) => {
    let frequency = new Array(45).fill(0);
  
    draws.forEach(draw => {
      draw.forEach(number => {
        frequency[number - 1] += 1;
      });
    });
  
    let prediction = [];
    while (prediction.length < 6) {
      let randomNumber = Math.floor(Math.random() * 45) + 1;
      if (!prediction.includes(randomNumber)) {
        prediction.push(randomNumber);
      }
    }
  
    return prediction;
  };
  