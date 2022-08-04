const form = document.querySelector('form')
const error = document.getElementById('Error')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    error.style.display = "none"
    const vardas = document.getElementById('vardas')
    const pavarde = document.getElementById('pavarde')
    const pastas = document.getElementById('pastas')
    const zinute = document.getElementById('zinute')
    const Roast = document.getElementById('BadRoast')
    Roast.style.display = "none"
    vardas.classList.remove('is-invalid')
    pavarde.classList.remove('is-invalid')
    pastas.classList.remove('is-invalid')
    zinute.classList.remove('is-invalid')
    var vardasCheck = false
    var pavardeCheck = false
    var pastasCheck = false
    var zinuteCheck = false

    console.log(vardas.value)
    if(vardas.value .length > 0){
        vardasCheck = true
    }
    else{
        vardasCheck = false
        error.style.display = "block"
        vardas.classList.add('is-invalid')
    }

    console.log(pavarde.value)
    if(pavarde.value.length > 0){
        pavardeCheck = true
    }
    else{
        pavardeCheck = false
        error.style.display = "block"
        pavarde.classList.add('is-invalid')
    }

    console.log(pastas.value)
    if(pastas.value.match('@') != null){
        pastasCheck = true
    }
    else{
        pastasCheck = false
        error.style.display = "block"
        pastas.classList.add('is-invalid')
    }

    console.log(zinute.value)
    if(zinute.value.length > 0){
        zinuteCheck = true
    }    
    else{
        zinuteCheck = false
        error.style.display = "block"
        zinute.classList.add('is-invalid')
    }

    if(vardasCheck == true && pavardeCheck == true && pastasCheck == true && zinuteCheck == true){
        console.log('aciu uz forma')
        Roast.style.display = "block"
    }
    else{
        return console.log("Ne viskas uzpildyta")
    }
})      