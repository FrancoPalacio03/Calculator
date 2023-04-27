
function add(){
    const forma=document.getElementById("forma");
    let operandoA=forma["operandoA"];
    let operandoB=forma["operandoB"];
    let resultado=parseFloat(operandoA.value)+ parseFloat(operandoB.value); 
    if(isNaN(resultado))
        resultado="Operandos vacios";
    document.getElementById("resultado").innerHTML="resultado: "+resultado;
       
}

function substract(){
    const forma=document.getElementById("forma");
    let operandoA=forma["operandoA"];
    let operandoB=forma["operandoB"];
    let resultado=parseFloat(operandoA.value)- parseFloat(operandoB.value); 
    if(isNaN(resultado))
        resultado="Operandos vacios";
    document.getElementById("resultado").innerHTML="resultado: "+resultado;
       
}

function multiply(){
    const forma=document.getElementById("forma");
    let operandoA=forma["operandoA"];
    let operandoB=forma["operandoB"];
    let resultado=parseFloat(operandoA.value)* parseFloat(operandoB.value); 
    if(isNaN(resultado))
        resultado="Operandos vacios";
    document.getElementById("resultado").innerHTML="resultado: "+resultado;
       
}

function divide(){
    const forma=document.getElementById("forma");
    let operandoA=forma["operandoA"];
    let operandoB=forma["operandoB"];
    let resultado=parseFloat(operandoA.value)/ parseFloat(operandoB.value); 
    if(isNaN(resultado))
        resultado="Operandos vacios";
    document.getElementById("resultado").innerHTML="resultado: "+resultado;
       
}

