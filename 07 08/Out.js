function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Tarpas
const Iterpimas = (Text,numb) => {
    document.getElementById(numb).innerHTML = Text
    return console.log("Tekstas perduotas į " + numb + " galvą")
}
//Tarpas
function Capital(input) {
    let regex = /^[A-Z]*$/;
    return regex.test(input);
}
//Tarpas
const Batonas = (Text1) => {
    let Sample =""
    for(let i = 0; i < Text1.length ; i++){
    if(Capital(Text1[i]) === true){
        Sample += Text1[i]
    }
    else{
        document.write("<h1>"+Sample+"</h1>")
        Sample =""
    }

}
return console.log("Batonas suvalgytas")
}
//Tarpas
const Sveikuolis = (Skaiciai) => {
    let Count = 0
    //console.log("Sugeneruotas skaicius: " + Skaiciai)
    if(Skaiciai % 1 != 0){
        return "Skaicius yra nesveikas tegul pasigydo"
    }
    for(let i = 1; i < (Skaiciai -1) ; i++){
        if(Skaiciai % (Skaiciai - i) == 0){
            //console.log("Dalinasi iš: " + (Skaiciai - i))
            Count += 1
        }
    }
    return Count
}
//Tarpas
const RandomMassive = (Ilgis,Nuo,Iki) =>{
    let Massive = []
    while(Ilgis > Massive.length){
        Massive.push(randomIntFromInterval(Nuo,Iki))
    }
    return Massive
}

//Uzduotys
//Pirma/Antra
Iterpimas("Insert Creative Text<br><br>",randomIntFromInterval(1,6))

//Trecia
Batonas(btoa(Date.now()))

//ketvirta
let Random = randomIntFromInterval(1,100)
console.log(Random)
console.log(Sveikuolis(Random))

//Penkta
let Masyvas = RandomMassive(100,33,77)
console.log(Masyvas)
Masyvas.sort(function(a, b){return Sveikuolis(b) - Sveikuolis(a)})
console.log(Masyvas)

//Sesta
Masyvas = RandomMassive(100,333,777)
for(let i = 0; i < 100;){
    if(Sveikuolis(Masyvas[i]) == 0){
        Masyvas.splice(i,1)
    }
    else{
        i++
    }
}
console.log(Masyvas)