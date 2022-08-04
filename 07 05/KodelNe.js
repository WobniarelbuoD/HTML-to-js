function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

let Massive = [];
let Massive2 = [];
let Massive3 = [];
let Massive4 = [];
let Massive5 = [];
let Massive6 = [];
let Massive7 = [];
let Random = [];
let Count = 0;
let Big = 0;

while(Massive.length < 100){
    const R = randomIntFromInterval(100,999);
    Massive.push(R)
    Massive = removeDuplicates(Massive)
}
while(Massive2.length < 100){
    const R = randomIntFromInterval(100,999);
    Massive2.push(R)
    Massive2 = removeDuplicates(Massive2)
}

for(let i = 0; i < 100 ; i++){
    if(Massive2.includes(Massive[i]) == false){
        Massive3.push(Massive[i])
    }
    else{
        Massive4.push(Massive[i])
    }
    Massive5[Massive[i]] = Massive2[i]
}
console.log(Massive)
console.log(Massive2)
console.log(Massive3)
console.log(Massive4)
console.log(Massive5)

//5 uzduotis
Massive6.push(randomIntFromInterval(5,25))
Massive6.push(randomIntFromInterval(5,25))

while(Massive6.length < 10){
Massive6.push(Massive6[Count] + Massive6[ Count + 1])
Count++
}
console.log(Massive6)

//6 uzduotis
while(Massive7.length < 10){
    for(let i = 0; i < 5 ; i++){
        Random.push(randomIntFromInterval(5,25))
    }
    Massive7.push(Random);
    Random = [];
}

let Count1 =0;
let CountMass =0;
let CountMassInMass =0;
let Kordinates = "";
let Suma1 = 0;  
let Suma2 = 0;  
let Suma3 = 0;  
let Suma4 = 0;  
let Suma5 = 0;  
console.log(Massive7)


//7 uzduotis a ir b
for(let i = 0; i < 10 ; i++){
    for(let z = 0; z < 5 ; z++){
        if(Massive7[i][z] > 10){
            Count1 += 1
        }
        if(Big < Massive7[i][z]){
            Big = Massive7[i][z]
            Kordinates = CountMass+ ":" + CountMassInMass + " "
        }
        else if(Big <= Massive7[i][z]){
            Kordinates += CountMass+ ":" + CountMassInMass + " "
        }
        CountMassInMass += 1


        //c
        if(z === 0){
            Suma1 += Massive7[i][z]
        }
        else if(z === 1){
            Suma2 += Massive7[i][z]
        }
        else if(z === 2){
            Suma3 += Massive7[i][z]
        }
        else if(z === 3){
            Suma4 += Massive7[i][z]
        }
        else if(z === 4){
            Suma5 += Massive7[i][z]
        }
    }
    CountMass += 1
    CountMassInMass = 0
}
console.log(Count1)
console.log("Didžiausias elementas: " + Big + "  Kordinatės: " + Kordinates)
console.log("Pirmas: " + Suma1 + " Antras: " + Suma2 + " Trecias: " + Suma3 + " Ketvirtas: " + Suma4 + " Penktas: " + Suma5)

CountMass = 0;
CountMassInMass = 0;
Suma1 = 0;
Suma2 = 0;
Suma3 = 0;
Suma4 = 0;
Suma5 = 0;

//d ir e
for(let i = 0; i < 10 ; i++){
    for(let z = 0; z < 2 ; z++){
        Massive7[i].push(randomIntFromInterval(5,25))
    }
    for(let z = 0; z < 7 ; z++){
        CountMassInMass += 1

        if(i === 0){
            Suma1 += Massive7[i][z]
        }
        else if(i === 1){
            Suma2 += Massive7[i][z]
        }
        else if(i === 2){
            Suma3 += Massive7[i][z]
        }
        else if(i === 3){
            Suma4 += Massive7[i][z]
        }
        else if(i === 4){
            Suma5 += Massive7[i][z]
        }
    }
    CountMass += 1
    CountMassInMass = 0
}
console.log(Massive7)
let MassiveFinal = [Suma1, Suma2, Suma3, Suma4, Suma5]
console.log(MassiveFinal)