<?php 


if($_GET['genre']=='horror') {
	$_file = file_get_contents('horror_books.json');
}
else {
	$_file = file_get_contents('roman_books.json');
}

echo json_decode ($_file);

?>
