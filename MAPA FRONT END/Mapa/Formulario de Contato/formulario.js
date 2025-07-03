const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-requerimento')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 

/*Faz com que quando o botão "Enviar" for clicado verifica se todos os campos estão cumprindo os requerimentos necessarios*/
form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    senhaPrincipalValidate();
    compararSenhas();
});

/*função para informar o erro de validação*/
function setError(index){
    campos[index].style.border = '3px solid #ff0000';
    spans[index].style.display ='block';

}

/*função para remover o erro de validação*/
function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display ='none';
}

/*função para Validar o nome digitado*/
function nameValidate(){
    if (campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

/*função para Validar o email digitado*/
function emailValidate(){
    if(emailRegex.test(campos[1].value))
    {
       removeError(1);
    }
    else
    {
        setError(1);
    }
}

/*função para Validar a senha digitado*/
function senhaPrincipalValidate(){
    if(campos[2].value.length < 8)
    {
       setError(2); 
    }
    else
    {
        removeError(2);
        compararSenhas();
    }
}

/*função para comparar se as senhas são iguais*/
function compararSenhas(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8)
    {
        removeError(3);
    }
    else
    {
        setError(3);

    }
}