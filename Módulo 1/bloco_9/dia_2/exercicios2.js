const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(item => item * item).reduce((acc, curr) => acc + curr);
    // console.log(sum);
    (sum < 8000) ? resolve() : reject();
  });
  
  myPromise 
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada'));
};

fetchPromise();
