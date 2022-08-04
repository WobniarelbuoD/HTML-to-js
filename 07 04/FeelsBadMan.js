function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

let Massive = []
let Massive2 = []
let R = 0
let y = 1
let b = 0
let suma1 = 0
let suma2 = 0
let suma3 = 40

while(suma3 > 30){
while(Massive.length < 101){
    R = randomIntFromInterval(0,300);
    Massive.push(R)
    Massive = removeDuplicates(Massive)
}
Massive = Massive.sort(function(a, b){return a - b})
console.log(Massive);
Massive2.push(Massive[100])
Massive.splice(100,1)
const reversed = Massive.reverse()

for(let z = 0; z < 100 ; z++){
    if(z == y){
        Massive2.push(reversed[y])
        y += 2
    }
    else{
        Massive2.unshift(reversed[b])
        b += 2
    }
    if(suma1 > suma2){
        suma2 += reversed[z]
    }
    else{
        suma1 += reversed[z]
    }
}
if(suma1 > suma2){
    suma3 = suma1 % suma2
}
else{
    suma3 = suma2 % suma1
}
console.log(Massive2);
console.log(suma1);
console.log(suma2);
console.log(suma3);
}