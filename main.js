
function cuentaPalabras() {
    //Guardo valores del textarea


    //Separo la cadenacon espacio
    var dividido = document.getElementById("myTextarea").value.split(" ");

    //Longitud (en palabras)
    var palabras = dividido.length;
    document.getElementById("demo2").innerHTML = palabras;

    //Capturo valores del Textarea - longitud para conocer el num de caracteres
    var valortextarea = document.getElementById("myTextarea").value;
    document.getElementById("demo3").innerHTML = valortextarea.length;
}

