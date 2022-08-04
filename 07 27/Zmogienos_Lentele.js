const stalas = document.getElementById('stalas')

let Masyvas = []

let i = 0

const LentelesDydis = 50
const getData = async (url) => {
    try {
        const resp = await fetch(url)
        return await resp.json()
    } catch {
        return false
    }
}

const useData = async () => {
    for(let i = 0; i < LentelesDydis; i++){
    const resp = await getData('https://randomuser.me/api/')
    const data = resp.results[0]
    
    const datele = new Date(data.dob.date)
    const gime ="" + datele.getDay()+ "/" + datele.getMonth()+ "/" + datele.getFullYear()

    Masyvas.push({
    name : data.name.first +" "+ data.name.last,
    email : data.email,
    birth : gime,
    address : data.location.street.number + " " + data.location.street.name,
    phone : data.phone,
    password : data.login.password
})
console.log(Masyvas)
}
Lentele()
}

const Remove = (Index) =>{
    Masyvas.splice(Index,1)
    console.log(Masyvas)
    stalas.innerHTML = ""
    Lentele()
}

const Lentele = () =>{
for(let i = 0; i < Masyvas.length;){
    stalas.innerHTML +=`<tr>
    <td>${Masyvas[i].name}</td>
    <td>${Masyvas[i].email}</td>
    <td>${Masyvas[i].birth}</td>
    <td>${Masyvas[i].address}</td>
    <td>${Masyvas[i].phone}</td>
    <td>${Masyvas[i].password}</td>
    <td><button type="button" onclick="Remove(`+i+`)" class="btn btn-dark" >Delete</button></td>
    </tr>`
    i++
}
}


useData()
