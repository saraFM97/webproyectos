const nav = document.querySelector(".nav")
document.querySelector(".menuham").addEventListener ("click", e=>{
    e.preventDefault()
    if(nav.classList.contains("open")){
        nav.classList.remove("open")
        document.getElementById('menuham').src="img/ham.svg"
    }else{
        nav.classList.add("open")
        document.getElementById('menuham').src="img/x.svg"
    }
})