const catEl = document.querySelector('#categories');
const titleEl = catEl.querySelectorAll('h2');
console.log(`Number of categories: ${titleEl.length}`);

const totalCat = catEl.querySelectorAll('.item');

const totalTitleEl = totalCat.forEach((title) => {
    const titleEl = title.querySelector('h2');
    const elemList = title.querySelectorAll('li');
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${elemList.length}`);
})