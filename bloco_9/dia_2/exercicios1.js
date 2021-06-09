// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObj = {
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObj)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke);
}

window.onload = () => fetchJoke();