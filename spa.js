console.log('Clase JSAv - SPA')

function ajax(url, metodo) {
    let httpMetodo = metodo || 'get'

    let xhr = new XMLHttpRequest
    xhr.open(httpMetodo, url)
    xhr.send()

    return xhr
}

let main = document.querySelector('main')
let links = document.querySelectorAll('a')

links.forEach( link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        let id = link.id
        //console.log(id)
        //location.hash = id
        //history.pushState(null,'',id)
        
        let archivo = id + '.html'
        let xhr = ajax(archivo)
        xhr.addEventListener('load', ()=> {
            if(xhr.status == 200) {
                let contenido = xhr.response
                //console.log(contenido)
                main.innerHTML = contenido
                history.pushState({
                    template: contenido
                },'',id)
            }
        })

    })
})

window.addEventListener('popstate', e => {
    console.log('cambió el historial')
    console.log(e.state)

    if(e.state.template) {
        main.innerHTML = e.state.template
    }
    else {
        let archivo = location.pathname.split("/")[1] + '.html'
        //console.log(archivo)
        //let archivo = id + '.html'
        let xhr = ajax(archivo)
        xhr.addEventListener('load', ()=> {
            if(xhr.status == 200) {
                let contenido = xhr.response
                //console.log(contenido)
                main.innerHTML = contenido
            }
        })
    }
})

/*
window.addEventListener('hashchange', () => {
    console.log('cambió la URL')
    let archivo = location.hash.split("#")[1] + '.html'
    //console.log(archivo)

//     let arr = "#mundo"
//    console.log(arr.split("#"))

    //let archivo = id + '.html'
    let xhr = ajax(archivo)
    xhr.addEventListener('load', ()=> {
        if(xhr.status == 200) {
            let contenido = xhr.response
            //console.log(contenido)
            main.innerHTML = contenido
        }
    })

})
*/

let archivo = 'home.html'//location.hash.split("#")[1] + '.html'
let xhr = ajax(archivo)
xhr.addEventListener('load', ()=> {
    if(xhr.status == 200) {
        let contenido = xhr.response
        //console.log(contenido)
        main.innerHTML = contenido
    }
})




