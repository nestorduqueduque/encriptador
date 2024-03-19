var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".container-muneco");
var contenedor = document.querySelector(".container-p");
var resultado = document.querySelector(".texto-resultado");
var mostrarAlert = document.querySelector(".container-p");
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    var cajatexto = recuperarTexto();
    if (cajatexto.trim() === '') {
        mostrarMensaje();
        resultado.textContent = "";
    } else {
        ocultarAdelante();
        resultado.textContent = encriptarTexto(cajatexto);
    }
}

function mostrarMensaje() {
    munieco.classList.remove("ocultar");
    contenedor.classList.remove("ocultar");
}

function desencriptar() {
    var cajatexto = recuperarTexto();
    if (cajatexto.trim() === '') {
        mostrarMensaje();
        resultado.textContent = "";
    } else {
        ocultarAdelante();
        resultado.textContent = desencriptarTexto(cajatexto);
    }
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".box-text")
    return cajatexto.value
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    if (recuperarTexto().trim() === '') {
        munieco.classList.remove("ocultar");
    }
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});