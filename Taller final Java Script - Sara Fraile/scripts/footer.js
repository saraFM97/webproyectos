function inicio(){
    let h2= document.createElement("h2")
    let pText= document.createTextNode ("Sara Fraile Moreno")
    h2.appendChild(pText)
    h2.classList.add("nombrecompleto")    

    
    let h4= document.createElement ("h4")
    let tText = document.createTextNode ("Diseño Web-CEI© 2021")
    h4.appendChild(tText)
    h4.classList.add("DiseñoWeb")



    let intro = document.getElementById("footer")
    intro.appendChild(h2)
    intro.appendChild(h4)
    
    botonEnvio = document.getElementById ("añadirRegalo")
    nuevoItem = document.getElementById ("add")
    listaRegalos = document.getElementById ("listaRegalos")
    botonEnvio.addEventListener("click", add)
}
    window.onload=inicio


    function add (e){
        evento = e
        if (nuevoItem.value==""){
                evento.preventDefault()
        }else {
            let lista = document.createElement ("li")
            lista.innerHTML= nuevoItem.value
            listaRegalos.appendChild (lista)
            nuevoItem.value=""
            lista.addEventListener ("dblclick", eliminarLi)
        }
    }
    function eliminarLi(){
        this.parentNode.removeChild(this)
    
    }