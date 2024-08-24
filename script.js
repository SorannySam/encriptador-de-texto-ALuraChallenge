const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value = " ";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matriCod =[["e","enter"],["i", "imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i=0; i<matriCod.length; i++)
        {
            if (stringEncriptado.includes(matriCod[i][0])) 
                {
                    stringEncriptado=stringEncriptado.replaceAll(matriCod[i][0], matriCod[i][1]);
                }
        }
return stringEncriptado;
}

function botondesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value= textoEncriptado;
    textArea.value = " ";
}

function desencriptar(stringdesencriptado){
    let matriCod =[["e","enter"],["i", "imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]];
    stringdesencriptado =stringdesencriptado.toLowerCase();

    for (let i=0; i<matriCod.length; i++)
        {
            if (stringdesencriptado.includes(matriCod[i][1])) 
                {
                    stringdesencriptado=stringdesencriptado.replaceAll(matriCod[i][1], matriCod[i][0]);
                }
        }
return stringdesencriptado;
}

function copiar() {
    var texto = document.querySelector(".mensaje");
    texto.select();
    texto.setSelectionRange(0, texto.value.length);
    document.execCommand('copy');
}
