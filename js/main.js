//Datos de nombre
let nameCard = document.querySelector('.card-front__details-name');
let input_nameCard = document.querySelector('#cardHolder');
let error_nameCard = document.querySelector('.form__error--cardholder');

//Datos del número de tarjeta
let numberCard = document.querySelector('.card-front__number');
let input_numberCard = document.querySelector('#cardNumber');
let error_numberCard = document.querySelector('.form__error--cardnumber');


input_nameCard.addEventListener('input', () => {
    if(input_nameCard.value == ''){
        nameCard.innerText = 'Jane Appleseed'
    }else{
        nameCard.innerText = input_nameCard.value
    }
})

input_numberCard.addEventListener('input', ()=> {

    numberCard.innerText = input_numberCard.value

    let regExp = /[A-z]/g;
    if(regExp.test(input_numberCard.value)){
        error_numberCard.innerText = 'No!'
    }

    if(input_numberCard.value == ''){
        numberCard.innerText = '0000 0000 0000 0000'
    }
})