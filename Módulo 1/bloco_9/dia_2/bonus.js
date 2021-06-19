const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(item => item * item).reduce((acc, curr) => acc + curr);
    // console.log(sum);
    (sum < 8000) ? resolve(sum) : reject();
  });
  
  myPromise 
  .then(sum => [2, 3, 5, 10].map(elm => Math.ceil(sum / elm)))
  // .then(sum => console.log(sum))
  .then((sum) => sum.reduce((acc, curr) => acc + curr), 0)
  .then((sum2) => console.log(sum2))
  // .catch(() => console.log('Promise rejeitada')); // exercicio 3
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromise();

// com async e await

const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );
  const sum = myArray.map(number => number * number)
    .reduce((number, acc) => number + acc, 0);

  if (sum >= 8000) {
    throw new Error();
  }

  return sum;
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
    console.log(sum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();