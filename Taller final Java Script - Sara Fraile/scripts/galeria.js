let textos = ["Forma nº1", "Forma nº2", "Forma nº3", "Forma nº4"]
function cargarImg (img, txt){
    document.getElementById("galeria").src="img/"+img+".jpg"
    document.getElementById("mitexto").innerHTML=textos [txt]
}