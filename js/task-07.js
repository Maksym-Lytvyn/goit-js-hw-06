const text = document.querySelector('#text');
const range = document.querySelector('#font-size-control');
console.log(text);
console.log(range);


range.addEventListener('input', (event) => {
    text.style.fontSize = range.value + 'px';
    text.innerText = 'Abracadabra!';
}) 
 



/* const value = document.querySelector("#text")
const input = document.querySelector("#font-size-control")
value.textContent = input.value
input.addEventListener("input", (event) => {
  value.textContent = event.target.value
}) */