const core = document.getElementById('deze')

const getData = async (url) => {
    try {
        const resp = await fetch(url)
        return await resp.json()
    } catch {
        return false
    }
}

const butt = document.getElementById("butt")
const butt2 = document.getElementById("butt2")
const puslapis = document.getElementById("page")
let Page = 1
let Switch = false

const useData = async () => {
    const resp = await getData('https://www.omdbapi.com/?apikey=c8eacdb8&s=Batman&page='+Page)
    const data = resp.Search
    console.log(data)

    for(let i = 0; i < data.length; i++){
    core.innerHTML += `<div class="filmai"><div><img class="Nuotrauka" src="${data[i].Poster}" alt="${data[i].Title}"></div><div>${data[i].Type +"<br>"+data[i].Title +"<br>"+data[i].Year}<div></div>`
}
puslapis.innerHTML =`Page: ${Page}/52`
}

const Previous = () =>{
    if(Page > 1 ){
        if(Page === 2){
            butt.classList.add('btn-secondary')
            butt.classList.remove('btn-primary')
        }
        if(Page === 52){
            butt2.classList.remove('btn-secondary')
            butt2.classList.add('btn-primary')
        }
        core.innerHTML = ''
        Page -= 1
        useData()
    }

}

const Next = () =>{
    if(Page < 52){
    core.innerHTML = ''
    Page += 1
    if(Page === 52){
        butt2.classList.add('btn-secondary')
        butt2.classList.remove('btn-primary')
    }
    if(Page === 2){
        butt.classList.remove('btn-secondary')
        butt.classList.add('btn-primary')
        console.log(butt.classList)
    }
    useData()
}
}

useData()