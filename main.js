document.addEventListener ("click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome );

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usuário = document.getElementById( "name" ).value;
    document.getElementById( "mensagem" ).innerText = "Meu nome é " = usuário;
    document.getElementById( "nome" ).value = "";

}

