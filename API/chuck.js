const getData = async (url) => {
    try {
        const resp = await fetch(url)
        return await resp.json()
    } catch {
        return false
    }
}

const showData = async () => {
    console.log(await getData('https://api.chucknorris.io/jokes/random'))
}

showData()

const useData = async () => {
    const resp = await getData('https://api.chucknorris.io/jokes/random')
    const joke = resp.value
    const pic = resp.icon_url
    const kunas = document.getElementById('yes')
    const date = resp.created_at

    let html = `<img src="${pic}" alt=""></img><br>
    <h1>${date}</h1>
    <p>${joke}</p>`
    kunas.innerHTML = html
}
useData()