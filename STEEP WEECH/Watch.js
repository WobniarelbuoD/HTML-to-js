
const StopWatch = () => {

    if(STOP === true){
        return
    }
    else{
        Milisecond += 1
        if(Second == 59 && Milisecond == 99){
            Minute +=1
            Second = 0
            Milisecond = 0
        }
        if(Milisecond == 99){
            Second += 1
            Milisecond = 0
        }
    }
    Min.textContent = Minute
    Sec.textContent = Second < 10 ? "0" + Second : Second
    MS.textContent = Milisecond < 10 ? "0" + Milisecond : Milisecond
}


const baton = () =>{
    if(Startas == true){
    vazuoja = setInterval(StopWatch,10)
    Startas = false
    }
    if(STOP == true){
        STOP = false
    }
    else if(STOP == false){
        STOP = true
    }
}
const Reset = () =>{
    Startas = true
    STOP = true
    clearInterval(vazuoja)
    Minute = 0
    Second = 0
    Milisecond = 0
    Min.textContent = "0"
    Sec.textContent = "00"
    MS.textContent = "00"
}
let vazuoja
let STOP = true
let Startas = true
let Minute = 0
let Second = 0
let Milisecond = 0
const Min = document.querySelector('[data-content="Minute"]')
const Sec = document.querySelector('[data-content="Second"]')
const MS = document.querySelector('[data-content="milisecond"]')
