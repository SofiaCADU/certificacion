//primera función
function iSesión(){
    alert("Inicio de Sesión exitos")
}

//segunda función
document.getElementById("rentar").onclick = function() {
    this.textContent = "No disponible"
}
document.getElementById("renta").onclick = function() {
    this.textContent = "No disponible"
}
document.getElementById("rentas").onclick = function() {
    this.textContent = "No disponible"
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