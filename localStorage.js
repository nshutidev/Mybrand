const storageInput = document.querySelector('.input-is-full-width');
const message = document.querySelector('.textarea');
const button = document.querySelector('.submit');
const storageInput = localStorage.getItem('inputmessage')

if(storageInput) {
 message.textContent = storageInput
}

storageInput.addEventListener('input', letter => {
    message.textContent = letter.target.value
})

const saveToLocalStorage = () => {
    localStorage.setItem('inputmessage', message.textContent)
}

button.addEventListener('click', saveToLocalStorage)