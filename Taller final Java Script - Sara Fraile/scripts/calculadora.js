// Funcion para sumar
function suma(){
    let num1 = document.getElementById("num1").value
    let num2= document.getElementById("num2").value
    let resultado= parseInt(num1, 10) + parseInt(num2, 10);
    document.getElementById("resultado").value = resultado
}
//Funcion para restar
function resta(){
    let num1 = document.getElementById("num1").value
    let num2= document.getElementById("num2").value
    let resultado= num1-num2;
    document.getElementById("resultado").value = resultado
}
//Funcion para multiplicar
function multiplica(){
    let num1 = document.getElementById("num1").value
    let num2= document.getElementById("num2").value
    let resultado= num1*num2;
    document.getElementById("resultado").value = resultado
}
//Funcion para dividir
function division(){
    let num1 = document.getElementById("num1").value
    let num2= document.getElementById("num2").value
    let resultado= num1/num2;
    document.getElementById("resultado").value = resultado
}

document.getElementById("num1").value=" "
document.getElementById("num2").value=" "
document.getElementById("resultado").value=" "