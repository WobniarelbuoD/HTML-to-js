function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let Massive = []
let Massive1 = []
let Massive2 = []
let Count = 0
let Count1 = 0
let Count2 = 0
let Count3 = ""
let Count4 = 0
let b = 0
let y = 2
let u = 1
let Lyginis = []
let Nelyginis= []

for(let i = 0; i < 30; i++){
    let Betkoks   = randomIntFromInterval(5, 25);
    Count1 += 1
    Massive.push(Betkoks)
    Massive1.push(Betkoks - Count1)
    if(Betkoks > 10){
        Count += 1
    }
    if(Betkoks > b){
        Count2 = Count1
        b = Betkoks
    }
    else if(b == Betkoks)
    Count2 +=", " + Count1
    if(Count1 == y){
        y += 2
        Count3 += " " + Betkoks;
        Count4 += Betkoks;
        Lyginis.push(Betkoks);
        if(Betkoks > 15){
            Massive2.push(0)
        }
        else{
            Massive2.push(Betkoks)
        }
    }
    if(Count1 == u){
        u += 2;
        Nelyginis.push(Betkoks);
    }
}
document.write(Massive)

for(let i = 0; i < 10; i++){
Betkoks   = randomIntFromInterval(5, 25);
Massive.push(Betkoks)
}

document.write("<br><br>Skaičių daugiau už 10: " + Count)
document.write("<br><br>didžiausias masyvas: " + b)
document.write("<br>Index: " + Count2 )
document.write("<br><br>Lyginiai Indexai: " + Count3)
document.write("<br><br>Indexų suma: " + Count4)
document.write("<br><br>Masyvas Po Index Dietos: " + Massive1)
document.write("<br><br>Nelyginis Masyvas: " + Nelyginis)
document.write("<br><br>Lyginis Masyvas: " + Lyginis)
document.write("<br><br>Lyginis <15 = 0: " + Massive2)
//H
let Pos = 0;
for(let x = 0; x < 40; x++){
    if(Massive[Pos] > 10){
        Massive.splice(Pos,1);
    }
    else{
        Pos += 1
    }
}
document.write("<br><br>Culling Above 10: " + Massive)

//I
document.write("<br><br>Masyvas pries žudynes: " + Massive1)
y = 0;
for(i = 0; i < 30 ; i++){
    if(i == y){
        Massive1.splice(y,1)
        y += 1
    }
}
document.write("<br><br>Masyvas po žudynių: " + Massive1)