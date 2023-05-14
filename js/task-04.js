const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;


buttonDecrement.addEventListener('click', minus);
buttonIncrement.addEventListener('click', plus );

function plus() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
function minus() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}