
document.getElementById("buttonText").addEventListener('click', function(){
    let dato = document.getElementById("inputText").value
    localStorage.setItem("dato ingresado", dato)
})