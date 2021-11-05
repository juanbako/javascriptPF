//---JSON
let barriosLS = localStorage.getItem(`barrios`)

const barrios = JSON.parse(barriosLS)

console.log(barrios)

//---BARRIO
const barrio = document.getElementById("formBarrio")

barrios.forEach((varrio) => {
    const opciones = document.createElement(`option`)
    opciones.value = varrio
    opciones.innerHTML = varrio

    barrio.appendChild(opciones)
})

//---FormCONTACTO
const formContacto = document.getElementById(`formContacto`)
const nombre = document.getElementById(`formNombre`)
const apellido = document.getElementById(`formApellido`)
const email = document.getElementById(`formEmail`)
const mensaje = document.getElementById(`formMensaje`)
const contBtn = document.getElementById(`contBtn`)
const btnContacto = document.getElementById(`btnContacto`)

var contacto = [];

nombre.addEventListener(`change`, () => {
    if (nombre.value.length >= 2) {
        nombre.classList.add(`borde-verde`)
    } else {
        nombre.classList.add(`borde-rojo`)
    }
})

apellido.addEventListener(`change`, () => {
    if (apellido.value.length >= 2) {
        apellido.classList.add(`borde-verde`)
    } else {
        apellido.classList.add(`borde-rojo`)
    }
})

email.addEventListener(`change`, () => {
    if (email.value.length >= 5) {
        email.classList.add(`borde-verde`)
    } else {
        email.classList.add(`borde-rojo`)
    }
})

mensaje.addEventListener(`change`, () => {
    if (mensaje.value.length >= 5) {
        mensaje.classList.add(`borde-verde`)
    } else {
        alert(`El mensaje debe tener un minimo de 5 caracteres`)
        mensaje.classList.add(`borde-rojo`)
    }
})

formContacto.addEventListener(`submit`, (e) => {
    e.preventDefault()
        console.log(`submitea`)
        
    if (nombre.value.length >= 2 && apellido.value.length >= 2 & email.value.length >= 5 && mensaje.value.length >= 5) {
        contacto.push(new Contacto (nombre.value, apellido.value, email.value, barrio.value, mensaje.value))
        console.log(contacto)
        
            localStorage.setItem(`contacto`, JSON.stringify(contacto))
        console.log(localStorage.getItem(`contacto`))

        contBtn.style.visibility = "visible"
        contBtn.style.opacity = "1"

        formContacto.reset()
    } else {alert(`Hay un error en los datos del formulario`)}
})

btnContacto.addEventListener(`click`, () => {
    contBtn.style.visibility = "hidden"
    contBtn.style.opacity = "0"
})