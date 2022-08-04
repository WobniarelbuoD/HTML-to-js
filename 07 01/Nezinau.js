function makeid(length) {
    var result           = '';
    var characters       = 'ABCD';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
let Massive = []
let Massive2 = []
let Massive3 = []
let Huge = []
let Random = ""
let Random2 = ""
let Random3 = ""
let A = 0
let B = 0
let C = 0
let D = 0

for(let i = 0; i < 200 ; i++){
    Random = makeid(1);
    Random1 = makeid(1);
    Random2 = makeid(1);
    if(Random  == "A"){
        A += 1
    }
    else if(Random == "B"){
        B += 1
    }
    else if(Random == "C"){
        C += 1
    }
    else{
        D += 1
    }
    Massive.push(Random);
    Massive2.push(Random1);
    Massive3.push(Random2);
    Huge.push(Random + Random1 + Random2)
}
let Count1 = 0
let Count = 0
for(let x = 0; x < 200 ; x++){
    if(Huge[Count1] != 'AAA' && Huge[Count1] != 'BBB' && Huge[Count1] != 'CCC' && Huge[Count1] != 'DDD') {
        Count += 1;
    }
    Count1 += 1;
}
let Count2 = 0;
let Count3

for(let z = 0; z < 200 ; z++){
    Count3 = 0;
    for(let j = 0; j < 200 ; j++){
        if(Huge[Count2] == Huge[j]){
            Count3 += 1
        }
    }
    if(Count3 == 1){
    console.log("Unikalius: " + Huge[Count2])
    }
    Count2 += 1
}





console.log(Massive)
console.log("A raidžių: " + A);
console.log("B raidžių: " + B);
console.log("C raidžių: " + C);
console.log("D raidžių: " + D);
console.log(Massive.sort());
console.log(Huge)
console.log("unikalų yra: " + Count)
