document.addEventListener('DOMContentLoaded', function(){
    let contenedorDato =  document.getElementById("data")
    let datoGuardado = localStorage.getItem('dato ingresado')
    contenedorDato.innerHTML = datoGuardado
})