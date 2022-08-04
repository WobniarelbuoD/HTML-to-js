const core = document.getElementById('deze')

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getData = async (url) => {
    try {
        const resp = await fetch(url)
        return await resp.json()
    } catch {
        return false
    }
}

const useData = async () => {
    const resp = await getData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    const data = resp.drinks
    console.log(resp)

    for(i = 0; i < data.length; i++){
        console.log('test')
    core.innerHTML += `<div class="wide"><div class="scramble"><img class="test" src="${data[i].strDrinkThumb}" alt="${data[i].strDrink}"></div><div>${data[i].strDrink}</div></div>`
}

const Scramble = () =>{
    core.innerHTML = ''
    const Skaiciai = []
    while(Skaiciai.length < data.length){
        kinta = randomIntFromInterval(0,data.length -1)

        if(Skaiciai.includes(kinta)){
        }
        else{
            Skaiciai.push(kinta)
            core.innerHTML += `<div class="wide"><div  class="scramble"><img class="test" src="${data[kinta].strDrinkThumb}" alt="${data[kinta].strDrink}"></div><div>${data[kinta].strDrink}</div></div>`
        }
    }
    const scram = document.getElementsByClassName('scramble')

    console.log(Skaiciai)

for (y = 0; y < scram.length; y++) {
    scram[y].addEventListener("click", Scramble);
}
}

const scram = document.getElementsByClassName('scramble')

for (y = 0; y < scram.length; y++) {
    scram[y].addEventListener("click", Scramble);
}

}


useData()