const image = document.getElementById('image')
const text = document.getElementById('text')
const Name = document.getElementById('name')
const email = document.getElementById('email')
const birth = document.getElementById('birth')
const address = document.getElementById('adress')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const titleText = document.getElementById('text1')

const getData = async (url) => {
    try {
        const resp = await fetch(url)
        return await resp.json()
    } catch {
        return false
    }
}

const useData = async () => {
    const resp = await getData('https://randomuser.me/api/')
    console.log(resp)
    image.innerHTML = `<img src="${resp.results[0].picture.large}" alt="thumbnail">`
    titleText.textContent = 'My name is'
    text.textContent = ''
    text.textContent += `${resp.results[0].name.first+ " " + resp.results[0].name.last}`    

    Name.addEventListener('mouseover', () => {
        titleText.textContent = 'My name is'
        text.textContent = ''
        text.textContent += `${resp.results[0].name.first+ " " + resp.results[0].name.last}`
    });
    email.addEventListener('mouseover', () => {
        titleText.textContent = 'My email is'
        text.textContent = ''
        text.textContent += `${resp.results[0].email}`
    });
    birth.addEventListener('mouseover', () => {
        let bday = resp.results[0].dob.date
        const datele = new Date(bday)
        const gime ="" + datele.getDay()+ "/" + datele.getMonth()+ "/" + datele.getFullYear()
        titleText.textContent = 'My birthday is'
        text.textContent = ''
        text.textContent += `${gime}`
    });
    address.addEventListener('mouseover', () => {
        titleText.textContent = 'My address is'
        text.textContent = ''
        text.textContent += `${resp.results[0].location.street.number+ " " + resp.results[0].location.street.name}`
    });
    phone.addEventListener('mouseover', () => {
        titleText.textContent = 'My phone number is'
        text.textContent = ''
        text.textContent += `${resp.results[0].phone}`
    });
    password.addEventListener('mouseover', () => {
        titleText.textContent = 'My phone number is'
        text.textContent = ''
        text.textContent += `${resp.results[0].login.password}`
    });
}


useData()

