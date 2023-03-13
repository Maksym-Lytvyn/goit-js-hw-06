let counterValue = document.querySelector('#value');
let count = 0;
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

increment.addEventListener('click', () => {
    count++;
    counterValue.innerHTML = count;
    console.log(count);
})

decrement.addEventListener('click', () => {
    count--;
    counterValue.innerHTML = count;
    console.log(count);
})
console.log(counterValue);
