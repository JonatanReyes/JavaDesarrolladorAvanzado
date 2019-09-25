console.log("JSAv - api")

let url = 'https://jsonplaceholder.typicode.com/users'

let xhr = new XMLHttpRequest
xhr.open('get', url)
xhr.addEventListener('load', () => {
    if(xhr.status == 200){
        let datos = JSON.parse(xhr.response)
        console.log(typeof datos)
        console.log(datos)
    }
})
xhr.send()
