export const getAverage = (dogArray) => {
  let sum = 0;
  for (let dog of dogArray) {
    sum += parseInt(dog.grade);
  }
  return (sum / dogArray.length).toFixed(2);
};
