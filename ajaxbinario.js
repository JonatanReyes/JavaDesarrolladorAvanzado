console.log("JSAv - Ajax Binario")

function cargarImagen(imagen) {
    let img = document.querySelector('img')
    let progress = document.querySelector('progress')
    let span = document.querySelector('span')
    img.src = ""
    progress.value()
let xhr = new XMLHttpRequest
xhr.open('get', 'imgs/' + imagen + '?' + Date.now())
xhr.responseType = 'blob'
xhr.addEventListener('load', () => {
    if(xhr.status == 200) {
        let imagenBlob = xhr.response
       // console.log(imagenBlob)
      let url = URL.createObjectURL(imagenBlob)
     // console.log(url) 
      
    //  let img = document.createElement('img')
      img.src = url
    //  document.body.appendChild(img)
    }
})



xhr.addEventListener('progress', e => {
    console.log(e)

    if(e.lengthComputable){
        let porcentaje = parseInt((e.loaded * 100) / e.total)
        //console.log(porcentaje)
        progress.value = porcentaje
        span.innerText = porcentaje + '%'
    }

})

xhr.send()
}


let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()
    let nombreImagen = form[0].files[0].name 
    //console.log(nombreImagen)

    cargarImagen(nombreImagen)
    //console.log(Date.now())
   
})
