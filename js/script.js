function Iniciar(){
    var BotonCaracter=document.getElementById("BotonPalabras");
    if (BotonCaracter.addEventListener) {
        BotonCaracter.addEventListener("click",Caracter,false);
    }
    var BotonPalabra=document.getElementById("BotonChar")
    if (BotonPalabra.addEventListener) {
        BotonPalabra.addEventListener("click",Palabra,false);
    }
    var BotonLetra=document.getElementById("BotonLetra")
    if (BotonLetra.addEventListener) {
        BotonLetra.addEventListener("click",Letra,false);
    }
    var BotonNum=document.getElementById("BotonNum")
    if (BotonNum.addEventListener) {
        BotonNum.addEventListener("click",Num,false);
    }
    var BotonNoNum=document.getElementById("BotonNoNum")
    if (BotonNoNum.addEventListener) {
        BotonNoNum.addEventListener("click",NoNum,false);
    }
    var BotonAlter=document.getElementById("BotonAlter")
    if (BotonAlter.addEventListener) {
        BotonAlter.addEventListener("click",Alter,false);
    }
}

function Caracter(){
    var RadiosPalabras=document.frm_palabras.elements["RadiosTexto"];
    var ImpresorPalabras=document.getElementById("ImpresorTexto");
    var EntradaPalabras=document.getElementById("TextAreaPalabras");
    var TipoExpresion=ActualizarChk(RadiosPalabras);
    var texto=EntradaPalabras.value;
    var patt=/e/g;
    var resultado="";
    switch (TipoExpresion) {
        case "Global":
            var patt=/e/g;
            resultado=texto.match(patt);
            break;
        case "Insensitivo":
            var patt=/e/i;
            resultado=texto.match(patt);
            break;
        case "Multilinea":
            var patt=/^e/m;
            resultado=texto.match(patt);
            break;
        default:
            break;
    }
    ImpresorPalabras.innerHTML=resultado;
}

function Palabra(){
    var RadiosChar=document.frm_char.elements["RadiosChar"];
    var ImpresorChar=document.getElementById("ImpresorChar");
    var EntradaChar=document.getElementById("TextAreaChar");
    var TipoExpresion=ActualizarChk(RadiosChar);
    var texto=EntradaChar.value;
    var patt=/Botella/g;
    var resultado="";
    switch (TipoExpresion) {
        case "Global":
            var patt=/Botella/g;
            resultado=texto.match(patt);
            break;
        case "Insensitivo":
            var patt=/Botella/i;
            resultado=texto.match(patt);
            break;
        case "Multilinea":
            var patt=/^Botella/m;
            resultado=texto.match(patt);
            break;
        default:
            break;
    }
    ImpresorChar.innerHTML=resultado;
}

function Letra(){
    var RadiosLetra=document.frm_letra.elements["RadiosLetra"];
    var ImpresorLetra=document.getElementById("ImpresorLetra");
    var EntradaLetra=document.getElementById("TextAreaLetra");
    var TipoExpresion=ActualizarChk(RadiosLetra);
    var texto=EntradaLetra.value;
    var patt=/[Botella]/g;
    var resultado="";
    switch (TipoExpresion) {
        case "Global":
            var patt=/[Botella]/g;
            resultado=texto.match(patt);
            break;
        case "Insensitivo":
            var patt=/[Botella]/i;
            resultado=texto.match(patt);
            break;
        case "Multilinea":
            var patt=/^[Botella]/m;
            resultado=texto.match(patt);
            break;
        default:
            break;
    }
    ImpresorLetra.innerHTML=resultado;
}

function Num(){
    var RadiosNum=document.frm_Num.elements["RadiosNum"];
    var ImpresorNum=document.getElementById("ImpresorNum");
    var EntradaNum=document.getElementById("TextAreaNum");
    var TipoExpresion=ActualizarChk(RadiosNum);
    var texto=EntradaNum.value;
    var patt=/[0-5]/g;
    var resultado="";
    switch (TipoExpresion) {
        case "Global":
            var patt=/[0-5]/g;
            resultado=texto.match(patt);
            break;
        case "Insensitivo":
            var patt=/[0-5]/i;
            resultado=texto.match(patt);
            break;
        case "Multilinea":
            var patt=/^[0-5]/m;
            resultado=texto.match(patt);
            break;
        default:
            break;
    }
    ImpresorNum.innerHTML=resultado;
}

function NoNum(){
    var RadiosNoNum=document.frm_NoNum.elements["RadiosNoNum"];
    var ImpresorNoNum=document.getElementById("ImpresorNoNum");
    var EntradaNoNum=document.getElementById("TextAreaNoNum");
    var TipoExpresion=ActualizarChk(RadiosNoNum);
    var texto=EntradaNoNum.value;
    var patt=/[^2-6]/g;
    var resultado="";
    switch (TipoExpresion) {
        case "Global":
            var patt=/[^2-6]/g;
            resultado=texto.match(patt);
            break;
        case "Insensitivo":
            var patt=/[^2-6]/i;
            resultado=texto.match(patt);
            break;
        case "Multilinea":
            var patt=/[2-6]/m;
            resultado=texto.match(patt);
            break;
        default:
            break;
    }
    ImpresorNoNum.innerHTML=resultado;
}

function Alter(){
    var RadiosAlter=document.frm_Alter.elements["RadiosAlter"];
    var ImpresorAlter=document.getElementById("ImpresorAlter");
    var EntradaAlter=document.getElementById("TextAreaAlter");
    var TipoExpresion=ActualizarChk(RadiosAlter);
    var texto=EntradaAlter.value;
    var patt=/(pescado|carne)/g;
    var resultado="";
    switch (TipoExpresion) {
        case "Global":
            var patt=/(pescado|carne)/g;
            resultado=texto.match(patt);
            break;
        case "Insensitivo":
            var patt=/(pescado|carne)/i;
            resultado=texto.match(patt);
            break;
        case "Multilinea":
            var patt=/^(pescado|carne)/m;
            resultado=texto.match(patt);
            break;
        default:
            break;
    }
    ImpresorAlter.innerHTML=resultado;
}

function ActualizarChk(Arreglo){
    var tipoExp="";
    for (let i = 0; i < Arreglo.length; i++) {
        if(Arreglo[i].checked){
            tipoExp=Arreglo[i].value;
        }
    }
    return tipoExp;
}

if(window.addEventListener){
    window.addEventListener("load", Iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", Iniciar);
}