function encriptar() {
    var texto = document.getElementById("inputtext").value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    document.getElementById("copiar").style.display = "show";
    document.getElementById("borrar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtext").innerHTML = " ";
    document.getElementById("copiar").style.display = "initial";
    document.getElementById("borrar").style.display = "initial";
}
  
function desencriptar() {
    var texto = document.getElementById("texto2").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    document.getElementById("copiar").style.display = "show";
    document.getElementById("borrar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtext").innerHTML = " ";
    document.getElementById("copiar").style.display = "initial";
    document.getElementById("borrar").style.display = "initial";
   
}
  
function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
    alert("El texto encriptado ha sido copiado.");
}
function borrar() {
    var contenidoborrar = document.getElementById("texto2");;
    var contenidoborrar2 = document.getElementById("inputtext");;
    contenidoborrar.value = "";
    contenidoborrar2.value = "";
    alert("El texto encriptado ha sido borrado.");
}

