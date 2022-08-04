const getData = async (url) => {
    try {
        const resp = await fetch(url)
        return await resp.json()
    } catch {
        return false
    }
}

const useData = async () => {
    for(let i = 1; i <= 50; i++){
    const resp = await getData('https://randomfox.ca/floof/')
    console.log(resp)
    const {image, link} = resp
        document.getElementById('Stalas').innerHTML += `<img class="col-2" src="${image}" alt="${link}"></img>`
    }
}
useData()