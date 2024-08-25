/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

const output= document.querySelector(".contenido__output"); 
const input= document.querySelector(".contenido__input");
let matriz= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function btnEncriptar(){
    output.value=encriptar(input.value);
    output.style.backgroundImage="none";
}

function btnDesencriptar(){
    output.value=desencriptar(input.value);
    output.style.backgroundImage="none";
}

function limpiar(){
    input.value='';
}

function copiar() {    
    //Selecciona el texto
    output.select();
    output.setSelectionRange(0, 99999);//Para dispositivos móviles
    
    //Copia el texto al portapapeles
    document.execCommand("copy");
}

function encriptar(texto){
    for(let i=0; i<matriz.length; i++){
        if(texto.includes(matriz[i][0])){//.value retorna true o false
            texto=texto.replaceAll(matriz[i][0], matriz[i][1]);//replaceAll reemplaza todos los valores que encuentre que sean iguales al primer argumento por el valor del segundo argumento
        }
    }
    return texto;    
}

function desencriptar(texto){
    for(let i=0; i<matriz.length; i++){
        if(texto.includes(matriz[i][1])){
            texto=texto.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return texto;
}

input.addEventListener('input', function(e) {
    //Reemplazar las mayúsculas y caracteres especiales
    this.value = this.value.replace(/[^a-z0-9\s]/g, '').toLowerCase();
});
