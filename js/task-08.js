const form = document.querySelector('.login-form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const submitBtn = document.querySelector('button');


console.log(form);
console.log(emailInput);
console.log(passwordInput);
console.log(submitBtn);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (emailInput.value === '' || passwordInput.value === '') {
        alert('Кожне поле має бути заповненим!')
    }
    else {
        const {elements: { email, password }} = event.currentTarget;
        console.log(email.value, password.value);
        form.reset();
    }
    
    
  
})