const txtEncriptado = document.querySelector(".textoencriptado");
const mensajeD = document.querySelector (".textodesencriptado");

function b_Encriptar(){
    const txencriptado = f_encriptar (txtEncriptado.value);
    mensajeD.value = txencriptado;
    txtEncriptado.value = "";
    mensajeD.style.backgroundImage = "none";
    
}


function f_encriptar (msjEncriptado){

    let matrizCod = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    msjEncriptado = msjEncriptado.toLowerCase()
    
    for (let i = 0; i < matrizCod.length; i++){
        
        if (msjEncriptado.includes(matrizCod[i][0])){
            
            msjEncriptado = msjEncriptado.replaceAll (matrizCod[i][0],matrizCod[i][1])
            
        }

    }
    return msjEncriptado
}

function b_Desencriptar(){
    const txencriptado = f_desencriptar (txtEncriptado.value);
    mensajeD.value = txencriptado;
    txtEncriptado.value = "";
    
}

function f_desencriptar (msjDesencriptado){

    let matrizCod = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    msjDesencriptado = msjDesencriptado.toLowerCase()
    
    for (let i = 0; i < matrizCod.length; i++){
        
        if (msjDesencriptado.includes(matrizCod[i][1])){
            
            msjDesencriptado = msjDesencriptado.replaceAll (matrizCod[i][1],matrizCod[i][0])
            
        }

    }
    return msjDesencriptado
}

function copiarPegar(){

    mensajeD.focus();
    document.execCommand("SelectAll");
    document.execCommand("copy");
    mensajeD.value="";

}

