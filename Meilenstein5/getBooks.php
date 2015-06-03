<?php 
if($_get[]){ // horror geglickt
	
}else{ // roman geglickt
	
}
$_horror = file_get_contents('horror_books.json');
$_roman = file_get_contents('roman_books.json');
echo json_decode ($_horror);
?>
