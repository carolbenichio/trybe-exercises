window.onload = function () {

//Cor de fundo
function setBackgroundColor(color) {
  let content = document.querySelector(".content")
  content.style.backgroundColor = color
  localStorage.setItem("backgroundColor", color)
}

let backgroundColorButtons = document.querySelectorAll("#background-color>button")
for (let index = 0; index < backgroundColorButtons.length; index += 1) {
  backgroundColorButtons[index].addEventListener("click", function(event) {
    setBackgroundColor(event.target.innerHTML)
  })
}

}
