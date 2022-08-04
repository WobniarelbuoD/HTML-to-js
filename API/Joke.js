const getData = async (url) => {
    try {
        const resp = await fetch(url)
        return await resp.json()
    } catch {
        return false
    }
}

const useData = async () => {
    const resp = await getData('https://v2.jokeapi.dev/joke/Any?safe-mode')
    console.log(resp)
    const {category, setup, delivery, type, joke} = resp
    const Stalas = document.getElementById('GreatJoke')
    if(type == 'twopart'){
    let html = `<h1>${category}</h1>
    <p>${setup}</p>
    <p id="punchline" style="font-size: 2rem; display: none;">${delivery}</p>`
    Stalas.innerHTML = html
}
else if(type == 'single'){
    let html = `<h1>${category}</h1>
    <p style="font-size: 2rem;">${joke}</p>`
    Stalas.innerHTML = html
}
}
useData()

setTimeout(() => {
    document.getElementById('punchline').style.display = "block"
},5000);