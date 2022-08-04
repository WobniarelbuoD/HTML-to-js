//Ichi
let pvz1 = ""
for (let i = 0; i < 3000; i += 77) {
    pvz1 += ((i + " ").toString())
}
console.log(pvz1)

//Ni
pvz1 = "*"
let yes = 25
document.getElementById(1).innerHTML = ("<br>" + pvz1.repeat(yes)).repeat(yes);

//San

//Lukas Edition
let pvz2 = "";
let pvz3 = "";
let pvz4 = 0;
let pvz5 = '<span style="color:red">*</span>';
for (let i = 0; i < 25; i++) {
    pvz2 += "<br>" + pvz3 + pvz5;
    pvz3 += "*"
    pvz4 -= 1
    for (let x = 0; x < 25; x++) {
        pvz2 += "*";
    }

    pvz2 = pvz2.slice(0, pvz4);
    console.log(pvz2)

}
document.getElementById(2).innerHTML = (pvz2)

//Maybe Smarter?
let Result = ""
let L = 0
let R = 24
for (let i = 0; i < 25; i++) {
    Result += "<br>"
    for (let x = 0; x < 25; x++) {
        if (x == L || x == R) {
            Result += pvz5;
        }
        else {
            Result += "*"
        }
    }
    L += 1;
    R -= 1;
}
document.getElementById(3).innerHTML = (Result)

//Shi
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let Flip1
let Flip2
let Flip3
let Toss1 = 0
let Toss2 = 0
let Toss3 = 0
let Herbas = 0
let Herbas1 = 0
let Skaicius = 0
let Result1 = ""
let Result2 = ""
let Result3 = ""


while (Flip1 != 1) {
    Flip1 = randomIntFromInterval(0, 1);
    Toss1 += 1
    if(Flip1 == 1){
        Result1 +="H "
    }
    else{
        Result1 +="S "
    }
}

while (Herbas != 3) {
    Flip2 = randomIntFromInterval(0, 1);
    if(Flip2 == 1){
        Result2 +="H "
    }
    else{
        Result2 +="S "
    }
    if (Flip2 == 1) {
        Herbas += 1
    }
    Toss2 += 1
}

while (Herbas1 != 3) {
    Flip3 = randomIntFromInterval(0, 1);
    if(Flip3 == 1){
        Result3 +="H "
    }
    else{
        Result3 +="S "
    }
    if (Flip3 == 1) {
        Herbas1 += 1
    }
    else{
        Herbas1 = 0
    }
    Toss3 += 1
}

document.getElementById(4).innerHTML = (Result1 + "<br>Herbas Iškrito po: " + Toss1 + " metimų")
document.getElementById(5).innerHTML = ("<br>" + Result2 + "<br>3 Herbai Iškrito po: " + Toss2 + " metimų")
document.getElementById(6).innerHTML = ("<br>" + Result3 + "<br>3 Herbai Iš eiles Iškrito po: " + Toss3 + " metimų")

//Go
let Petras = 0
let Juozas = 0
let P = 0
let J = 0
let P1= 0
let J1= 0
document.getElementById(7).innerHTML = ("<br><br><br>The Great Chess-Off<br><br>")

document.getElementById(8).innerHTML += ("Petras <br><br>")
while(P <= 222){
    Petras = randomIntFromInterval(10 , 20);
    let Round = Petras
    P += Petras
    P1 += 1
    document.getElementById(8).innerHTML += (" Round: " + P1 + "<br>Points From Round: " + Petras + "<br>Total Points:" + P + "<br><br>")
}

document.getElementById(9).innerHTML += ("Juozas <br><br>")
while(J <= 222){
    Juozas = randomIntFromInterval(5 , 25);
    let Round = Juozas
    J += Juozas
    J1 += 1
    document.getElementById(9).innerHTML += (" Round: " + J1 + "<br>Points From Round: " + Juozas + "<br>Total Points:" + J + "<br><br>")
}



if(P1 < J1){
    document.getElementById(10).innerHTML = ("<br>Laimėjo: Petras")
}
else if(P1 == J1){
    document.getElementById(10).innerHTML = ("<br>Laimėjo Draugystė")
}
else{
    document.getElementById(10).innerHTML = ("<br>Laimėjo: Juozas")
}
