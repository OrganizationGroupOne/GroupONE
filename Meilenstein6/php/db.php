<?php
	$server = "localhost";
	$db_name = "mybooks";
	$user = "root";
	$password = "";
	$db = new PDO("mysql:host=$server;dbname=$db_name", $user, $password);
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>