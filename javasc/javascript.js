//Encriptar elemento
    // const letraA = /a/g;
    // const letraI = /i/g;
    // const letraO = /o/g;
    // const letraU = /u/g;

let vocales = [[/e/g,"enter"],[/a/g,"ai"],[/o/g,"ofer"],[/u/g,"ufat"],[/i/g,"imes"]];
let texto = [[/enter/g,"e"],[/ai/g,"a"],[/ofer/g,"o"],[/ufat/g,"u"],[/imes/g,"i"]];


//class de captar datos

function captarDatos(){
    document.querySelector(".mostrar").classList.add("ocultar");
    let entradaDeDatos=document.querySelector(".entradaDeDatos").value;
    console.log(entradaDeDatos)
    
    for (let index = 0; index < vocales.length; index++) {
        entradaDeDatos = entradaDeDatos.replaceAll(vocales[index][0],vocales[index][1]);
    }
    document.querySelector(".textoACopiar").innerText=entradaDeDatos;
    
    console.log(entradaDeDatos);
    document.querySelector(".entradaDeDatos").value="";
}

//class de la salida de datos desencriptar
function devolverDatos(){
    let salidaDeDatos= document.querySelector(".salidaDeDatos").value;
    for (let index = 0; index < texto.length; index++) {
        salidaDeDatos = salidaDeDatos.replaceAll(texto[index][1],texto[index][0]);        
    }
    document.querySelector(".mostrar").classList.add("ocultar");
    console.log(salidaDeDatos);
}

//class de copiar datos
function copiar(){
    let salidaDeDatos= document.querySelector(".textoACopiar").innerText;
    console.log(salidaDeDatos);
  // Copy the text inside the text field
  navigator.clipboard.writeText(salidaDeDatos);
  
  document.querySelector(".entradaDeDatos").value=salidaDeDatos;
  
}