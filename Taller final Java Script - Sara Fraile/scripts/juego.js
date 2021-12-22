//Referenciar el id del elemento
let pelota = document.getElementById ("pelota")
//Definir velocidad de la animación
let velocidad = 5
//Definir el Margin top donde quiero que arranque
let margintop= 0
//Definimos el Margin left
let marginleft= 0
//Definir las funciones de cada movimiento(flecha)

//Derecha
function moverderecha(){
    marginleft+=velocidad
    pelota.style.marginLeft=marginleft+"px"
}
//Izquierda
function moverizquierda(){
    marginleft-=velocidad
    pelota.style.marginLeft=marginleft+"px"
}
//Arriba
function moverarriba(){
    margintop-=velocidad
    pelota.style.marginTop=margintop+"px"
}
//Abajo
function moverabajo(){
    margintop+=velocidad
    pelota.style.marginTop=margintop+"px"
}
//Agregar el Event Listener
document.addEventListener("keydown", e=>{
 if (e.key=="ArrowRight"){
     moverderecha()
 }
 if (e.key=="ArrowLeft"){
     moverizquierda()
 }
 if (e.key=="ArrowUp"){
    moverarriba()
}
 if (e.key=="ArrowDown"){
    moverabajo()
}
})