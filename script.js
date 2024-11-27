//primera función
function iSesión(){
    alert("Inicio de Sesión exitos")
}

//segunda función
const but = document.getElementById("rentar")
document.getElementById("rentar").onclick = function() {
    this.textContent = "No disponible"
    but.style.backgroundColor = "#990000";
}
const buton = document.getElementById("renta")
document.getElementById("renta").onclick = function() {
    this.textContent = "No disponible"
    buton.style.backgroundColor = "#990000";
}
const button = document.getElementById("rentas")
document.getElementById("rentas").onclick = function() {
    this.textContent = "No disponible"
    button.style.backgroundColor = "#990000";
}

//tercera función
document.getElementById("ficcion").onclick = function(){
    document.getElementById("titulo").textContent = "Ficción"
}
document.getElementById("historico").onclick = function(){
    document.getElementById("titulo").textContent = "Historicos"
}
document.getElementById("tecnologia").onclick = function(){
    document.getElementById("titulo").textContent = "Tecnología"
}
document.getElementById("autoayuda").onclick = function(){
    document.getElementById("titulo").textContent = "Autoayuda"
}
document.getElementById("poesia").onclick = function(){
    document.getElementById("titulo").textContent = "Poesía"
}