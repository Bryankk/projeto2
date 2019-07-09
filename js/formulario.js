var checked1 = false;
var checked2 = false;

function verificaButton(){
    if(checked1 == true && checked2 == true) {
        document.getElementById("enviar").disabled = false;
    }
} 

function fncGrupo1() {
    checked1 = true;
    verificaButton();
}

function fncGrupo2() {
    checked2 = true;
    verificaButton();
}

