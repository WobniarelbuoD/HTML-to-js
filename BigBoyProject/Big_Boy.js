
CountUp = (UpTo,text,Time,counter) =>{
    text.textContent = counter
    if(((UpTo / 10) * 9) > counter){
        counter += 11
    }
    else{
        counter += 1
    }
    if(counter != UpTo + 1){
    setTimeout(() => CountUp(UpTo,text,Time,counter),Time)  
    }
    else{
        counter = 0
    }
}

const UTub = () =>{
    var EyeFrames = document.getElementById('Iframe');
    var batonas = document.getElementById('Batonas');
    var background = document.getElementById('BatonasBackground')
    EyeFrames.style.display = 'block';
    batonas.style.display = 'block';
    background.style.display = 'block';
}
const Close = () =>{
    var EyeFrames = document.getElementById('Iframe');
    var batonas = document.getElementById('Batonas');
    var background = document.getElementById('BatonasBackground')
    EyeFrames.style.display = 'none';
    batonas.style.display = 'none';
    background.style.display = 'none';
}

window.addEventListener('scroll',() =>{
    const header = document.querySelector('header')
    console.log(scrollY)

    if(header && window.scrollY > 100){
        TopBar.style.background = 'linear-gradient(90deg, rgba(0,60,0,1) 0%, rgba(30,110,20,1) 25%, rgba(20,155,0,1) 50%, rgba(60,200,60,1) 75%, rgba(20,240,45,1) 100%)'
    }
    if(header && window.scrollY <= 100){
        TopBar.style.background = 'none'
    }
})


const Count1 = document.querySelector('[data-content="Count1"]')
const Count2 = document.querySelector('[data-content="Count2"]')
const Count3 = document.querySelector('[data-content="Count3"]')
const Count4 = document.querySelector('[data-content="Count4"]')
const TopBar = document.getElementById('TopBar')
console.log(TopBar)
CountUp(2350,Count1,10,0)
CountUp(2150,Count2,10,0)
CountUp(2350,Count3,10,0)
CountUp(2250,Count4,10,0)

