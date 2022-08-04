const Pavadinimas = document.getElementById('Pavadinimas')
const Kiekis = document.getElementById('Kiekis')
const Prideti = document.getElementById('Prideti')
const Stalas = document.getElementById('Stalas')
const Staliukas = document.getElementById('kebabas')
let Roe = 0
const Prekes = [[],[]]

console.log(Staliukas)

const Remove = (Index) =>{
    Prekes[0].splice(Index,1)
    Prekes[1].splice(Index,1)
    Staliukas.innerHTML = ""
    Roe = 0
    Prekes[0].forEach(Generator)
}

const Generator = () =>{
    Staliukas.innerHTML += `<tr>
    <td>${Prekes[0][Roe]}</td>
    <td>${Prekes[1][Roe]}</td>
    <td><button type="button" onclick="Remove(`+Roe+`)" btn btn-dark">Remove</button>
    </tr>`
    Roe += 1
}

const test = () =>{
    Roe = 0
    console.log(Pavadinimas.value.length)
    if(Pavadinimas.value.length > 0 && Kiekis.value != 0){
    Staliukas.innerHTML = ""
    Prekes[0].push(Pavadinimas.value)
    Prekes[1].push(Kiekis.value)

    Prekes[0].forEach(Generator)

if(Prekes[0].length != 0){
Stalas.classList.remove("Poof")
}
else{
    Stalas.classList.add("Poof")
}
}
console.log(Prekes)
}

Prideti.addEventListener('click', (test))
