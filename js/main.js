//Datos de nombre
let nameCard = document.querySelector('.card-front__details-name');
let input_nameCard = document.querySelector('#cardHolder');
let error_nameCard = document.querySelector('.form__error--cardholder');

input_nameCard.addEventListener('input', () => {
    if(input_nameCard.value == ''){
        nameCard.innerText = 'Jane Appleseed'
    }else{
        nameCard.innerText = input_nameCard.value
    }
})

//Datos del Número de tarjeta
let numberCard = document.querySelector('.card-front__number');
let input_numberCard = document.querySelector('#cardNumber');
let error_numberCars = document.querySelector('form__error--cardnumber');

input_numberCard.addEventListener('input', () => {
    if(input_numberCard.value == ''){
        numberCard.innerText = '0000 0000 0000 0000'
    }else{
        numberCard.innerText = input_numberCard.value
    }
})