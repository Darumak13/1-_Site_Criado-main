<?php  
    if($_SERVER ['REQUEST_METHOD'] == "POST") {


        $email = htmlspecialchars($_POST['email']);
        $senha = htmlspecialchars($_POST['senha']);
        $tipo = @$_POST['tipo'];

        if($tipo=='login'){
            if($email != 'admin' and $senha !='123456'){
                echo "<h1>Login Invalido</h1>";
            } else {
                echo "<h1>Login Realizado com sucesso</h1>";
                echo "<p>E-mail: $email</p>";
                echo "<p>Senha: $senha</p>";
                header("location: pagina.html");
            }

        }else{
            echo "<h1>Cadastro Realizado com sucesso</h1>";
            echo "<p>E-mail: $email</p>";
            echo "<p>Senha: $senha</p>";
            header("location: login.html");
        }


    } else {
        echo "<h1>Acesso Inválido</h1>";
        echo "<p>Por favor, envie o formulário corretamente.</p>";
    }
?>