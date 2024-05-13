function openNav(){
    document.getElementById("myNav").style.width = '100%';
}

function closeNav(){
    document.getElementById("myNav").style.width = '0%';
}

const form = document.querySelector("#form");
const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const passWordInput = document.querySelector("#senha");
const confpassWordInput = document.querySelector("#confirma_senha");
const dateInput = document.querySelector("#data_nascimento");

let password = document.getElementById('senha');
let password_2 = document.getElementById('confirma_senha');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // verifica se o nome está vazio
    if(nameInput.value == ""){
        alert("Preencha o seu nome")
        return;
    }

    // Verifica se senha está preenchida
    if(!validadatePassword(passWordInput.value, 8)){
        alert("A senha precias ser no mínimo 8 dígitos.")
        return;
    }

    // Verificar se a situação foi selecionada
    if(!validadateConfirmPass(passWordInput,confpassWordInput)){
        alert("A senha não é valida")
        return;
    }

    // Verifica se o emial está preenchido e se é valido
    if(emailInput.value == "" || !isEmailValid(emailInput.value)){
        alert("Preencha o seu email")
        return;
    }

    // Se todos os campos estiverem corretamente preenchidos envie o form
    form.submit();
});

// função que valida o e-mail
function isEmailValid(email){

    // cria uma regex para valida email
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/ 
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}

// Função que valida a senha
function validadatePassword(password, minDigits){
    if(password.length >= minDigits){
        // Senha válida
        return true;
    }

    // Senha inválida
    return false;
}

function validadateConfirmPass(){
    if (password.value != password_2.value) {
        password_2.setCustomValidity("Senhas diferentes!");
        password_2.reportValidity();
        return false;
    } else {
        password_2.setCustomValidity("");
        return true;
        }
    }
    
    // verificar também quando o campo for modificado, para que a mensagem suma quando as senhas forem iguais
    password_2.addEventListener('input', validadateConfirmPass);

