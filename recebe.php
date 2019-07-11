<?php

require_once("connection/conexao.php");

$nome = $_POST['nome'];
$idade = $_POST['email'];

$sql = "INSERT INTO `clientes` (`nome`, `email`) VALUES ('$nome', '$email')";
$result = mysql_query($sql);

if(!$result) {
	echo("Ocorreu um erro durante a inserção na tabela!");
} else {
	echo("Dados inseridos com sucesso!");
}

?>