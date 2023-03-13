const spanColor = document.querySelector('.color');
const button = document.querySelector('.change-color');
console.log(spanColor);
console.log(button);

button.addEventListener('click', () => {
  spanColor.style.backgroundColor = getRandomHexColor();
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
