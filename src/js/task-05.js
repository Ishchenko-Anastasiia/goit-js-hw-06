let textInput = document.getElementById('name-input');
let output = document.getElementById('name-output');

textInput.addEventListener('input', event => {
   output.textContent = event.target.value
    if (event.target.value === '') {
        output.textContent = 'Anonymous';
    }
})

