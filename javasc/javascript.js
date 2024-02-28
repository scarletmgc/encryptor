//Encriptar elemento
    // const letraA = /a/g;
    // const letraI = /i/g;
    // const letraO = /o/g;
    // const letraU = /u/g;

let vocales = [[/e/g,"enter"],[/a/g,"ai"],[/o/g,"ofer"],[/u/g,"ufat"],[/i/g,"imes"]];
let texto = [[/enter/g,"e"],[/ai/g,"a"],[/ofer/g,"o"],[/ufat/g,"u"],[/imes/g,"i"]];

function captarDatos(){
    let entradaDeDatos=document.querySelector(".entradaDeDatos").value;
    for (let index = 0; index < vocales.length; index++) {
        entradaDeDatos = entradaDeDatos.replaceAll(vocales[index][0],vocales[index][1]);
    }
    document.querySelector(".salidaDeDatos").innerHTML=entradaDeDatos;
    console.log(entradaDeDatos);
    document.querySelector(".entradaDeDatos").value="";
}

function devolverDatos(){
    let salidaDeDatos= document.querySelector(".salidaDeDatos").value;
    for (let index = 0; index < texto.length; index++) {
        salidaDeDatos = salidaDeDatos.replaceAll(texto[index][1],texto[index][0]);        
    }
    document.querySelector(".salidaDeDatos").innerHTML=salidaDeDatos;
    console.log(salidaDeDatos);
}