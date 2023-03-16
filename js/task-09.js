const spanColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');
const button = document.querySelector('.change-color');
console.log(spanColor);
console.log(button);

button.addEventListener('click', () => {
  const colorClick = spanColor.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = colorClick;
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
