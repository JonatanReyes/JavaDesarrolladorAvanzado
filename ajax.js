console.log('Ajax.js')

let button = document.querySelector('button')
button.addEventListener('click', () =>{
    console.log('click')

    let xhr = new XMLHttpRequest()
console.log(xhr.readyState)


  xhr.addEventListener('load',() =>{
      console.log(xhr.status)
        if(xhr.status == 200){
            console.log(xhr.response)

            let div = document.createElement('div')
            div.innerHTML = xhr.response
            document.body.appendChild(div)
        }
       
    })
xhr.open('get','miplantilla.html')
xhr.send()
})


























var xhr = new XMLHttpRequest()
console.log(xhr.readyState)


  xhr.addEventListener('load',() =>{
      console.log(xhr.status)
        if(xhr.status == 200){
            console.log(xhr.response)
        }
        else if (xhr.status == 404){
            console.log('recurso no encontrado')
        }
    })

 /*   
xhr.addEventListener('readystatechange', () => {
    console.log('-->',xhr.readyState)
  

    if (xhr.readyState == 2) {
        let headers = xhr.getAllResponseHeaders()
        let tipo = xhr.getResponseHeader('content-type')
       // console.log(Headers)
        //console.log(tipo)
        if (tipo != 'text/html'){
           // xhr.abort()
        }
    }
   if(xhr.readyState == 4){
    console.log(xhr.response)
   }
})
*/

xhr.addEventListener('timeout', () =>{
    console.log('Timeout XHR')
})


xhr.timeout = 0
xhr.open('get', 'js/texto.txt')
//console.log(xhr.readyState)


xhr.send()
/*
setTimeout(() => {
    console.log(xhr.readyState)
    console.log(xhr.response)
}, 100)

*/

/*
console.log('Soy un mensaje sincronico 1')
console.log('Soy un mensaje sincronico 2')

console.log('----> inicio tarea timeout 1')
setTimeout(()=>{
    console.log('----> mensaje del timeout 1')
},4000)

console.log('----> inicio tarea timeout 2')
setTimeout(()=>{
    console.log('----> mensaje del timeout 2')
},5000)

console.log('----> inicio tarea timeout 3')
setTimeout(()=>{
    console.log('----> mensaje del timeout 3')
},3000)

console.log('Soy un mensaje sincronico 3')
console.log('Soy un mensaje sincronico 4')
*/