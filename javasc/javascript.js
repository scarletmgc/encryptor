//Encriptar elemento

function captarDatos(){

    let entradaDeDatos=document.querySelector(".entradaDeDatos").value;
    // const letraA = /a/g;
    // const letraI = /i/g;
    // const letraO = /o/g;
    // const letraU = /u/g;
    
    let vocales = [[/e/g,"enter"],[/a/g,"ai"],[/o/g,"ofer"],[/u/g,"ufat"],[/i/g,"imes"]];
    for (let index = 0; index < vocales.length; index++) {
        entradaDeDatos = entradaDeDatos.replaceAll(vocales[index][0],vocales[index][1]);
        
        console.log(index);
    }


    console.log(entradaDeDatos);
    

}