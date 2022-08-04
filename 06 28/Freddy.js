//Uno
const vardas = " Bob";
const pavarde = " Not";
const birth = 1969;
const year = 2022;
console.log("Aš esu" + vardas + pavarde + ". Man yra " + (year - birth) + "metai(ų)")

//Dos
let pvz1 = (Math.random(3) * 4);
let pvz2 = (Math.random(3) * 4);
let pvz3;
if(pvz1 >= pvz2){
    pvz3 = (pvz1 / pvz2)
}
else{
    pvz3 = (pvz2 / pvz1)
}
function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}
console.log(round(pvz3));
//Tres
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  pvz1 = randomIntFromInterval(0, 25);
  pvz2 = randomIntFromInterval(0, 25);
  pvz3 = randomIntFromInterval(0, 25);
if(pvz1 < pvz2 < pvz3){
    console.log(pvz2);
}
else if(pvz3 < pvz2 < pvz1){
    console.log(pvz1);
}
else if(pvz3 < pvz1 < pvz2){
    console.log(pvz1);
}
else if(pvz2 < pvz1 < pvz3){
    console.log(pvz1);
}
else{
    console.log(pvz3);
}

//Cuatro
pvz1 = randomIntFromInterval(0, 2).toString();
pvz2 = randomIntFromInterval(0, 2).toString();
pvz3 = randomIntFromInterval(0, 2).toString();
let pvz4 = randomIntFromInterval(0, 2).toString();
let pvz5 = (pvz1 + pvz2 + pvz3 + pvz4);
console.log("0 yra: " + ((pvz5.match(/0/g)||[]).length));
console.log("1 yra: " + ((pvz5.match(/1/g)||[]).length));
console.log("2 yra: " + ((pvz5.match(/2/g)||[]).length));

//Cinco
pvz1 = randomIntFromInterval(1, 6);
if(pvz1 == 1){ 
    document.getElementById(1).innerHTML = pvz1;
}
else if(pvz1 == 2){
    document.getElementById(2).innerHTML = pvz1;
}
else if(pvz1 == 3){
    document.getElementById(3).innerHTML = pvz1;
}
else if(pvz1 == 4){
    document.getElementById(4).innerHTML = pvz1;
}
else if(pvz1 == 5){
    document.getElementById(5).innerHTML = pvz1;
}
else{
    document.getElementById(6).innerHTML = pvz1;
}
//Seis
pvz1 = "*";
document.getElementById(7).innerHTML = pvz1.repeat(400);
document.getElementById(8).innerHTML = (pvz1.repeat(50) + "<br>").repeat(8);

//Siete
let Random
let Viskas = "Random" + "<br>"
let Virs = 0;
 for (let i = 0; i < 299; i++){
    Random = (randomIntFromInterval(0, 300))
    if (Random > 150){
        Virs += 1
    }
    if (Random > 275){
        Viskas += '<span style="color:red">'+ Random +'</span>' + " ";
    }
    else{
        Viskas += Random + " ";
    }
}
document.getElementById(8).innerHTML = Viskas;
document.getElementById(9).innerHTML = Virs;
