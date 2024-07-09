
function cuentaPalabras() {
  
    //separo cadena
    let texto = document.getElementById("myTextarea").value;
    let dividido = texto.split(' ')

    //Longitud de las palabras
    let palabras = dividido.length;
    document.getElementById("demo2").innerHTML = palabras;

    //Capturo valores del Textarea - longitud para conocer el num de caracteres
    let longitud = texto.length
    document.getElementById("demo3").innerHTML = longitud
}

function borrarTexto() { 
    document.getElementById("myTextarea").value = "";
    
    //reinicio  a 0 los valores
    document.getElementById("demo2").innerHTML = "0"
    document.getElementById("demo3").innerHTML = "0"
}

