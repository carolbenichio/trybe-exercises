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
  .then((sum) => console.log(sum))
  // .catch(() => console.log('Promise rejeitada')); // exercicio 3
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromise();
