console.log('Formularios - JSAv')
let btn = document.getElementById('btn')
let input = document.querySelector('input')
/*
btn.addEventListener('click', e => {
    e.preventDefault()
    console.log('click!')
    console.log(input.checkValidity())
})
*/

let form = document.getElementById('formulario')
/*
input.addEventListener('input', () => {
    let valor = input.value
    console.log('input', valor)
    let longitud = valor.length
    if (longitud > 3) {
        input.setCustomValidity('')
    }
    else {
        input.setCustomValidity('Este campo debe tener 4 caracteres como minimo')
    }
})
*/
form.addEventListener('submit', e => {
    e.preventDefault()
  //  console.log('submit')
    // HTMLInputElement (input) -> Web Api
    let valor = input.value
    let regExpNombre = /^[A-Z][a-zA-Z]{5,10}$/
    if (regExpNombre.test(valor)){
        console.log('Ok', valor)
    }
    else {
        console.log('Input ERROR')
    }
    /*
    let longitud = valor.length
    if (longitud){
        let valorConTrim = valor.trim()
        // console.log('Ok!','*'+valor+'*', longitud)
        // console.log('#'+valorConTrim+'#')
        //if (valorConTrim.indexOf(' ') < 0){
        if (!valorConTrim.includes(' ')){
        console.log('Ok',valorConTrim)
        //Inyeccion de datos script causa problemas de seguridad > Inyeccion XSS
        console.log(encodeURIComponent(valorConTrim))

        }
        else{
            console.log('El campo no permite espacios intermedios')
        }

    }  
    else console.log('Campo vacio')
    */
})
/*
//Validacion de un mail en regex101
let regExpMail = /^\w+@[a-z]+\.[a-z]{2,3}(\.[a-z]{2})?$/
console.log(regExpMail.test('danielsanchez68@hotmail.com,ar'))
*/