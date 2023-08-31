var counterValue = document.querySelector("#counter-value");
var btnDecrease = document.querySelector("#btn-decrease");
var btnReset = document.querySelector('#btn-reset');
var btnIncrease = document.querySelector('#btn-increase');
var increaseDecreaseNumber = 0;

function increaseCounter() {
    btnDecrease.disabled = false;
    increaseDecreaseNumber = increaseDecreaseNumber + 1
    counterValue.style.color = '#f1f5f9';
    counterValue.innerText = increaseDecreaseNumber;
}

function resetCounter() {
    btnDecrease.disabled = false;
    counterValue.innerText = 0;
    counterValue.style.color = 'black';
    return increaseDecreaseNumber = 0;
}

function decreaseCounter() {
    if (increaseDecreaseNumber <= 0) {
        btnDecrease.disabled = true;
        return increaseDecreaseNumber = 0;
    }
    increaseDecreaseNumber = increaseDecreaseNumber - 1;
    counterValue.style.color = 'red';
    counterValue.innerText = increaseDecreaseNumber;
}

btnIncrease.addEventListener('click', increaseCounter);
btnReset.addEventListener('click', resetCounter);
btnDecrease.addEventListener('click', decreaseCounter);