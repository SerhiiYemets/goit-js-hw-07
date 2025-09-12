const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', function () {
    let value = inputName.value;
    let trimmedValue = value.trim();
    spanName.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});







