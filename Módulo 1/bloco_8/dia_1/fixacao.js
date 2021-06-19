const wakeUp = () => 'Acordando!!';

const coffe = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => callback();

console.log(doingThings(wakeUp) + doingThings(coffe) + doingThings(sleep));