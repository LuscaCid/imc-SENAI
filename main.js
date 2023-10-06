//Lucas Felipe Lima Cid e Emerson Costa
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const buttonCalculates = document.querySelector('#calculate')
const displayResultIMC = document.querySelector('#cod-imc')
const qualificationIMC = document.querySelector('.results p')

buttonCalculates.addEventListener('click', (event)=>{
    event.preventDefault()

    const replacedHeight = inputHeight.value.replace(',','.')
    const replacedWeight = inputWeight.value.replace(',','.')
    const altura = Number(replacedHeight)
    const peso = Number(replacedWeight)
    const resultado = peso / Math.pow(altura, 2)
    displayResultIMC.textContent = `${resultado.toFixed(2)}`
    if(resultado < 18.5) qualificationIMC.innerHTML = 'Está muito magro'
    else if (resultado > 18.5 && resultado < 25) qualificationIMC.innerHTML = 'Peso normal'
    else if (resultado > 25 && resultado < 30) qualificationIMC.innerHTML = 'Acima do peso'
    else if (resultado > 30)qualificationIMC.innerHTML = 'Obeso'

})