<?php

require_once 'conexao.php';

//verifica post
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //recebe os dados do formulario
    $nome = $_POST["nome"];
    $idade = $_POST["idade"];
    $rua = $_POST["rua"];
    $bairro = $_POST["bairro"];
    $estado = $_POST["estado"];
    $bio = mysqli_real_escape_string($conexao, $_POST["bio"]);

    //prepara a consulta sql
    $sql = "INSERT INTO perfil (nome, idade, rua, bairro, estado, biografia) VALUES ('$nome', '$idade', '$rua', '$bairro', '$estado', '$bio')";
    
    //faz consulta sql
    if ($conexao->query($sql) === TRUE) {
        echo "Dados inseridos com sucesso";
    } else {
        echo "Erro ao inserir dados: " . $conexao->error;
    }

    //fecha conexao
    $conexao->close();
}
?>

