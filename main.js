document.addEventListener ("click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome );

document.getElementById( "btn-soma" ).addEventListener( "click" , botaosoma );

function showcolor()
{
    document.body.style.backgroundColor = "red";
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





