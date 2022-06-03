const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")

    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú")
    } else{
        navToggle.setAttribute("aria-label", "Abrir menú")
    }
});

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit" , e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length < 8){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(isNaN(phone) && phone.value.length < 10){
        warnings += 'El telefono no es valido <br>'
        entrar = true
    }
    if (entrar = true) {
        parrafo.innerHTML = warnings
    }else{
        warnings += 'Enviado <br>'
    }
} )



