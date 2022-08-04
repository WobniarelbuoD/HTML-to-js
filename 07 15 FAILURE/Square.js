function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const RandomRGB = () =>{
   R = randomIntFromInterval(0, 255)
   G = randomIntFromInterval(0, 255)
   B = randomIntFromInterval(0, 255)
   return "rgb(" + R + "," + G + "," + B + ")"
}

const Start = (Interval) =>{
    var Tit = document.getElementById('CreativeTitle')
    var Butt = document.getElementById('START')
    var Sq = document.getElementById('Kvadratas')
    player = 0
    square = -1
    Timer = 30
    Tit.style.display = "none"
    Butt.style.display = "none"
    Sq.style.display = "block"
    ZeTimer = setInterval(Jumper,Interval)
    RoundTimer = setInterval((Timeris),10)
}
    
const Clicker = () =>{
    if(click == true){
    console.log(player)
    player += 1
    square -= 1
    click = false
}
}

const Jumper = () =>{
    var i = 0
    var Kvadras = document.getElementById('Kvadratas')
    var Top = randomIntFromInterval(1,90)
    var Left = randomIntFromInterval(20,90)
    Kvadras.style.backgroundColor = RandomRGB()
    Kvadras.style.top = Top + "%"
    Kvadras.style.left = Left + "%"
    square += 1
    Turns += 1
    click = true
    if(Turns == 11){
        clearInterval(ZeTimer)
        Turns = 0
        var Butt = document.getElementById('START')
        var Sq = document.getElementById('Kvadratas')
        var Teet = document.getElementById('CreativeTitle')
        Sq.style.display = "none"
        if(square > player){
           Round += 1
           Kubas += 1
        }
        else if(square < player){
            Round += 1
            Zaidejas += 1
        }
        square = -1
        player = 0
        }
        var Player = document.getElementById('P' + Round)
        var Cube = document.getElementById('K' + Round)
        Player.textContent = Zaidejas
        Cube.textContent = Kubas
}

const Timeris = () => {
    var Tim = document.getElementById('Timer')
    Tim.textContent = Timer
    Timer -= 1
    if(Round == 10){
        var Butt = document.getElementById('START')
        var Win = document.getElemenById('Winner')
        Butt.style.display = 'block'
        Butt.textContent = "Play Again?"
        Win.textContent = Kubas > Zaidejas ? "Square" : Kubas < Zaidejas ? "Player" :  "French Ship"
        Timer = 0
        clearInterval(RoundTimer)
    }
    else if(Timer == 0){
        Start(10)
        clearInterval(RoundTimer)
    }
}

var Timer = 30
var click = true
var Round = 0
let stop = false
var player = 0
let square = -1
var Zaidejas = 0
var Kubas = 0
let S = false
let ZeTimer
let Turns= 0