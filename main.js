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
    document.getElementById( "resultado" ).innerHTML = " = " + parseFloat(caixa1) + parsetFloat(caixa2);
    document.getElementById( "num1" ).value = "";
    document.getElementById( "num2" ).value = "";
    
}





