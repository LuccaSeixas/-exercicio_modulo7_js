const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');

    const successMessage = 'Validado com sucesso, segundo número é maior que o primeiro.'
    const contanierSuccessMessage = document.querySelector('.success-message')
    contanierSuccessMessage.innerHTML = successMessage

    const failMessage = 'Falha na validação, segundo número é menor que o primeiro.'
    const contanierFailMessage = document.querySelector('.fail-message')
    contanierFailMessage.innerHTML = failMessage

    const equalMessage = 'Os números são iguais, favor informar outro.'
    const contanierEqualMessage = document.querySelector('.equal-message')
    contanierEqualMessage.innerHTML = equalMessage

    if (number1.value < number2.value){
        contanierSuccessMessage.style.display = 'block'
        contanierEqualMessage.style.display = 'none'
        contanierFailMessage.style.display = 'none'
    } else if (number1.value == number2.value){
        contanierEqualMessage.style.display = 'block'
        contanierSuccessMessage.style.display = 'none'
        contanierFailMessage.style.display = 'none'
    } else {
        contanierFailMessage.style.display = 'block'
        contanierSuccessMessage.style.display = 'none'
        contanierEqualMessage.style.display = 'none'
    }
})


