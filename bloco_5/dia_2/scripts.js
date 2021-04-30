//1 Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

//2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';