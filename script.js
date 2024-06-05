function openNav(){
    document.getElementById("myNav").style.width = '100%';
}

function closeNav(){
    document.getElementById("myNav").style.width = '0%';
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


// function validadateConfirmPass(){
//     if (password.value != password_2.value) {
//         password_2.setCustomValidity("Senhas diferentes!");
//         password_2.reportValidity();
//         return false;
//     } else {
//         password_2.setCustomValidity("");
//         return true;
//         }
//     }

function validar(){
    let form = document.querySelector("#form");
    let nameInput = document.querySelector("#nome");
    let emailInput = document.querySelector("#email");
    let passWordInput = document.querySelector("#senha");
    let confpassWordInput = document.querySelector("#confirma_senha");
    let dateInput = document.querySelector("#data_nascimento");
    let password = document.getElementById('senha');
    let password_2 = document.getElementById('confirma_senha');


        // verifica se o nome está vazio
        if(nameInput.value == ""){
            alert("Preencha o seu nome")
            return false;
        }

        // Verifica se o emial está preenchido e se é valido
        if(emailInput.value == "" || !isEmailValid(emailInput.value)){
            alert("Preencha o seu email")
            return false;
        }
        
        if(passWordInput.value == ""){
            alert("Informe uma senha")
            return false;
        }

        // Verifica se a senha tem o número de caracteres validos
        if(passWordInput.value.length < 5){
            // Senha válida
            alert('mínimo 6 digitos');
            return false;
        }
        
        if(confpassWordInput.value == ""){
            alert("Confirme a senha");
            return false;
            
        }

        // Verifica se a duas senha são iguais
        if(passWordInput.value != confpassWordInput.value){
            alert("Senha divergentes")
            return false;
        }

        if(dateInput.value == ""){
            alert("Informe a data de nascimento")
            return false;
        }

        // Se todos os campos estiverem corretamente preenchidos envie o form
        this.form.submit();
        
        if(this.form.submit == true){
            alert("Teste")
            Login();
        }
}







