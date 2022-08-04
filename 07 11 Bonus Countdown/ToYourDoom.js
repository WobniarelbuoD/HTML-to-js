let Hour
let Minute
let Second
let Saved1
let Saved2
let Saved3
let switchas = false
let stop = false
let Count
let Milisecond = 00
let pause = false

const Pause = () =>{
    change()
    if(pause == false){
        pause = true
    }
    else{
        pause = false
    }
}
function change(){
    var btn = document.getElementById("10");
    btn.value = 'START';
    btn.innerHTML = 'PAUSE';
}
const Run = () => {
    pause = false
    clearTimeout(Count)
    Milisecond = 0
    switchas = true
    Hour = document.querySelector('input[name="Val"]').value
    Minute = document.querySelector('input[name="Min"]').value
    Second = document.querySelector('input[name="Sec"]').value
    Saved1 = document.querySelector('input[name="Val"]').value
    Saved2 = document.querySelector('input[name="Min"]').value
    Saved3 = document.querySelector('input[name="Sec"]').value
    Countdown(Hour, Minute, Second)
}
const Restart = () => {
    pause = false
    if(switchas == true){
    clearTimeout(Count)
    Milisecond = 0
    Hour = document.querySelector('input[name="Val"]').value
    Minute = document.querySelector('input[name="Min"]').value
    Second = document.querySelector('input[name="Sec"]').value
    Countdown(Saved1,Saved2,Saved3)
}
}
const Reset = () => { 
    clearTimeout(Count)
    hours.textContent = "0"
    minutes.textContent = "00"
    seconds.textContent = "00"
    miliseconds.textContent = "00"
}


  const Countdown = (Hour, Minute, Second) =>{
    hours.textContent = Hour
    minutes.textContent = Minute < 10 ? "0" + Minute : Minute
    seconds.textContent = Second < 10 ? "0" + Second : Second
    miliseconds.textContent = Milisecond < 10 ? "0" + Milisecond : Milisecond
    if(!pause) {
    if(Minute == 0 && Second == 0 && Milisecond == 0){
        Hour -= 1
        Minute = 59
        Second = 59 
        Milisecond = 99
    }
    else if(Second == 0 && Milisecond == 0){
        Milisecond = 99
        Second = 59
        Minute -= 1
    }
    else if(Milisecond == 0){
        Milisecond = 99
        Second -= 1
    }
    else{
        Milisecond -=1
    }   
    }
    
    if(Hour != 0 || Minute != 0 || Second != 0 || Milisecond != 0){
    Count = setTimeout(() => Countdown(Hour, Minute, Second), 10)
    }   
}
const hours = document.querySelector('[data-content="hours"]')
const minutes = document.querySelector('[data-content="minutes"]')
const seconds = document.querySelector('[data-content="seconds"]')
const miliseconds = document.querySelector('[data-content="miliseconds"]')

