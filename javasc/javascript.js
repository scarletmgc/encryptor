
//[["e","enter"],["a","ai"],["o","ofer"],["u","ufat"],["i","imes"]];
//aquí tenemos un objeto con los datos de las vocales a utilizar
let vocales = {
    e: "enter",
    a: "ai",
    o: "ofer",
    u: "ufat",
    i: "imes"
};

//En esta primera función, captamos los datos a encriptar.

function encriptardor(){
    //Aquí ocultamos el div que contiene las imágenes.
    document.querySelector(".mostrar").classList.add("ocultar");
    let entradaDeDatos=document.querySelector(".entradaDeDatos").value;
    let matches = [];    
    
    for(let i = 0; i < entradaDeDatos.length; i++) {
        if(vocales[entradaDeDatos[i].toLowerCase()]) {
            matches.push(vocales[entradaDeDatos[i].toLowerCase()]);
        } else {
            matches.push(entradaDeDatos[i]);
        }
    }
    entradaDeDatos = matches.join("");

    document.querySelector(".textoACopiar").innerText=entradaDeDatos;
    
    console.log(entradaDeDatos);
    document.querySelector(".entradaDeDatos").value="";
}

//class de la salida de datos desencriptar
function desencriptar(){
    let entradaDeDatos=document.querySelector(".entradaDeDatos").value;
    for(let key in vocales) {
       
        entradaDeDatos = entradaDeDatos.replace(vocales[key], key);
    }

    document.querySelector(".textoACopiar").innerText=entradaDeDatos;
    
    console.log(entradaDeDatos);
    document.querySelector(".entradaDeDatos").value="";

}

//class de copiar datos
function copiar(){
    let salidaDeDatos= document.querySelector(".textoACopiar").innerText;
    console.log(salidaDeDatos);
  navigator.clipboard.writeText(salidaDeDatos);  
  document.querySelector(".entradaDeDatos").value=salidaDeDatos;
  
}