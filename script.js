console.log('Clase 1 - JSAv')

let a = 'g'
a = 'l'

var f
//console.log(f)

const Pi = 3.1415926
//Pi = 9
//console.log(Pi)

for(let i=0; i<10; i++) {
    //console.log(i)
}
//console.log(i)

{
    //console.log(a)
    const b = 'h'
    //console.log(b)
}
//console.log(b)

if(true) {
    //console.log(a)
    let c = 'i'
    //console.log(c)
}
//console.log(c)


function foo() {
    //console.log(a)
    let d = 'j'
    //console.log(d)
}
foo()

//console.log(d)

//console.log(a)

/* function dobleDe(numero) {
    return 2*numero
}
console.log(dobleDe(9))
 */
/*
const dobleDe = function(numero) {
    return 2*numero
}
console.log(dobleDe(10))
*/

//Arrow function - Lambda Expression
const dobleDe = numero => 2*numero
console.log(dobleDe(54))

const sumar = (a,b) => a + b
console.log(sumar(4,6))

/* const mostrarMensaje = mensaje => {
    return console.log(mensaje)
} */
/*
const mostrarMensaje = mensaje => {console.log(mensaje)}
mostrarMensaje('Hola!!!')
*/
/*
const getPersona = () => ({nombre: 'Juan', edad: 35})

console.log(getPersona())

var alumno = {}
alumno.nombre = 'Ana'
console.log(alumno)

console.log(this);
var persona = (function() {
    this.edad = 32
    console.log(this)
    //var that = this

    return {
        //getEdad: function() {
        //    console.log(this)
        //    return that.edad
        //}
        getEdad: () => this.edad

    }
})()

console.log(persona.getEdad())
*/

/*
Variables:

1)tipo: (primitivo) copia es por valor
number
boolean
string
undefined
null

2)tipo: (objeto) copia es por referencia
array
objetos
*/
/*
//1)
var z = 'hola'
var y = z
z = 'mundo'
console.log(z)
console.log(y)

//2)
var arr = [1,2,3]
var arr_copia = arr
arr[0] = 88
console.log(arr)
console.log(arr_copia)

//alert('Hola')
console.log(document.URL)
console.log(window)
*/

console.log(document.getElementById('titulo'))
console.log(document.getElementsByClassName('titulo')[0])
console.log(document.getElementsByTagName('h1')[1])

var referencia = document.getElementById('titulo')
referencia.innerText = '<u>otro título!</u>'

var p = document.createElement('p')
p.innerText = 'Lorem Ipsum'

//var body = document.getElementsByTagName('body')[0]
//body.appendChild(p)
document.body.appendChild(p)

var refP = document.getElementsByTagName('p')[0]
console.log(refP)
refP.innerText = 'LOREM IPSUM'

document.body.removeChild(refP)












