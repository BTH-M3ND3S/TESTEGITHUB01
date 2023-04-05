document.addEventListener ("click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome );

document.getElementById( "btn-soma" ).addEventListener( "click" , botaosoma );

document.getElementById( "botao-dividir" ).addEventListener( "click" , botaodividir );

document.getElementById( "botao-multiplicar" ).addEventListener( "click" , botaomultiplicar );

document.getElementById( "botao-subtrair" ).addEventListener( "click" , botaosubtrair );

function showcolor()
{
    document.body.style.backgroundColor = "aqua";
}

function exibenome()
{
    let usuário = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerHTML = "Meu nome é " + usuário;
    document.getElementById( "nome" ).value = "";
}
function botaosoma()
{
    let caixa1 = document.getElementById( "num1" ).value; 
    let caixa2 = document.getElementById( "num2" ).value;
    let caixa3 = parseFloat(caixa1) + parseFloat(caixa2);
    document.getElementById( "resultado" ).innerHTML = " = " + caixa3;
    document.getElementById( "num1" ).value = "";
    document.getElementById( "num2" ).value = "";   
}
function botaodividir()
{
    let caixa4 = document.getElementById( "num3" ).value; 
    let caixa5 = document.getElementById( "num4" ).value;
    let caixa6 = parseFloat(caixa4) / parseFloat(caixa5);
    document.getElementById( "resultado1" ).innerHTML = " = " + caixa6;
    document.getElementById( "num3" ).value = "";
    document.getElementById( "num4" ).value = "";
}
function botaomultiplicar()
{
    let caixa7 = document.getElementById( "num5" ).value; 
    let caixa8 = document.getElementById( "num6" ).value;
    let caixa9 = parseFloat(caixa7) * parseFloat(caixa8);
    document.getElementById( "resultado2" ).innerHTML = " = " + caixa9;
    document.getElementById( "num5" ).value = "";
    document.getElementById( "num6" ).value = "";
}
function botaosubtrair()
{
    let caixa10 = document.getElementById( "num7" ).value; 
    let caixa11 = document.getElementById( "num8" ).value;
    let caixa12 = parseFloat(caixa10) / parseFloat(caixa11);
    document.getElementById( "resultado3" ).innerHTML = " = " + caixa12;
    document.getElementById( "num7" ).value = "";
    document.getElementById( "num8" ).value = "";
}





