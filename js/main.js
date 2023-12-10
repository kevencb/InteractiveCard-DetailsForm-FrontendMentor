//Datos de nombre
let nameCard = document.querySelector('.card-front__details-name');
let input_nameCard = document.querySelector('#cardHolder');
let error_nameCard = document.querySelector('.form__error--cardholder');

//Datos del número de tarjeta
let numberCard = document.querySelector('.card-front__number');
let input_numberCard = document.querySelector('#cardNumber');
let error_numberCard = document.querySelector('.form__error--cardnumber');

//Datos del MM de tarjeta
let monthCard = document.querySelector('.card__month');
let input_monthCard = document.querySelector('#input_cardMonth');
let error_monthCard = document.querySelector('.form__input-error--mm');

//Datos del YY de tarjeta
let yearCard = document.querySelector('.card__year');
let input_yearCard = document.querySelector('#input_cardYear');
let error_yearCard = document.querySelector('.form__input-error--yy');

//Datos del CVC de tarjeta
let cvcCard = document.querySelector('.card-back--cvc');
let input_cvc = document.querySelector('#cardCVC');
let error_cvc = document.querySelector('.form__input-error--cvc');

//Botón Submit
let btn_submit = document.querySelector('.form__submit')

//Secciones
let mainForm = document.querySelector('.main__form')
let message = document.querySelector('.message')

//** NameCard **//
input_nameCard.addEventListener('input', () => {
    if (/^[a-zA-Z\s]+$/.test(input_nameCard.value) || input_nameCard.value === '') {
        nameCard.innerText = input_nameCard.value || 'Jane Appleseed';
        validateError(input_nameCard, error_nameCard, '', false)
    } else {
        validateError(input_nameCard, error_nameCard, 'Only letters')
    }
});

//** NumberCard **//
input_numberCard.addEventListener('input', (e)=> {
    let inputValue = e.target.value //Almecena lo que el usuario digita
    
    numberCard.innerText = input_numberCard.value

    let regExp = /[A-z]/g;
    if(regExp.test(input_numberCard.value)){
        validateError(input_numberCard, error_numberCard, 'Wrong format, numbers only')
    }else{
        //Captura si el usuario ingresa un espacio en blanco y lo reemplace por un string vacío.
        //Cada cuatro digitos se agrega un esapcio en blanco,
        //Eliminamos el ùltimo espacio al finalizar el ùltimo grupo de números.
        //Se elimina el mensaje de error
        input_numberCard.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        validateError(input_numberCard, error_numberCard, '', false)
    }

    if(input_numberCard.value == ''){
        numberCard.innerText = '0000 0000 0000 0000'
    }
})

//** Month Card **//
input_monthCard.addEventListener('input', () => {
    monthCard.innerText += input_monthCard.value
    validateFieldNumbers(input_monthCard, error_monthCard)
})

//** Year Card **//
input_yearCard.addEventListener('input', () => {
    yearCard.innerText = input_yearCard.value
    validateFieldNumbers(input_yearCard, error_yearCard)
})

//** CVC Card **//
input_cvc.addEventListener('input', () => {
    cvcCard.innerText = input_cvc.value
    validateFieldNumbers(input_cvc, error_cvc)
})

//** Button Confirm**/
btn_submit.addEventListener('click', (e) => {

    let name_ok = false
    let number_ok = false
    let month_ok = false
    let year_ok = false
    let cvc_ok = false

    e.preventDefault()
    //Nombre validación
    if(verifyIsFilled(input_nameCard, error_nameCard)){
        name_ok = true
    }else{
        name_ok = false
    }
    
    //Número validación
    if(verifyIsFilled(input_numberCard, error_numberCard)){
        if(input_numberCard.value.length == 19){
            validateError(input_numberCard, error_numberCard, '', false)
            number_ok = true
        }else{
            validateError(input_numberCard, error_numberCard, 'Wrong number')
            number_ok = false
        }
    }

    //Mes validación
    if(verifyIsFilled(input_monthCard, error_monthCard)){
        if(parseInt(input_monthCard.value) > 0 && parseInt(input_monthCard.value) <= 12){
            validateError(input_monthCard, error_monthCard, '', false)
            month_ok = true
        }else{
            validateError(input_monthCard, error_monthCard, "Can´t be blank")
            month_ok = false
        }
    }
    //Año validación
    if(verifyIsFilled(input_yearCard, error_yearCard)){
        if(parseInt(input_yearCard.value) >= 22 && parseInt(input_yearCard.value) <= 27){
            validateError(input_yearCard, error_yearCard, '', false)
            year_ok = true
        }else{
            validateError(input_yearCard, error_yearCard, 'Wrong year', true)
            year_ok = false
        }
    }
    
    //CVC validación
    if(verifyIsFilled(input_cvc, error_cvc)){
        if(input_cvc.value.length == 3){
            validateError(input_cvc, error_cvc, '', false)
            cvc_ok = true
        }else{
            validateError(input_cvc, error_cvc, 'Wrong CVC', true)
            cvc_ok = false
        }
    }

    //** Validación Final **/
    if(name_ok && number_ok && month_ok && year_ok && cvc_ok){
        mainForm.style.display = 'none'
        message.style.display = 'block'
    }
})

//** Funciones **//
function validateError(inputDiv, errorDiv, msg, show=true){
    if(show){
        errorDiv.innerText = msg;
        inputDiv.style.borderColor = 'hsl(0, 100%, 66%)';
    }else{
        errorDiv.innerText = msg;
        inputDiv.style.borderColor = 'hsl(270, 3%, 87%)'
    }
}

function verifyIsFilled(inputDiv, errorDiv){
    if(inputDiv.value.length > 0){
        validateError(inputDiv, errorDiv, "", false)
        return true
    }else{
        validateError(inputDiv, errorDiv, "Can´t be blank")
        return false
    }
}

function validateFieldNumbers(inputDiv, errorDiv){
    let regExp = /[A-z]/g;
    if(regExp.test(inputDiv.value)){
        validateError(inputDiv, errorDiv, 'Wrong format, numbers only') 
    }else{
        validateError(inputDiv, errorDiv, '', false)
    }
}