<?php
$_toWrite = $_GET[autor] . ", " . $_GET[titel].", ".$_GET[kapitel].", ".$_GET[art].", ". $_GET[isbn].", ".$_GET[jahr].", ". $_GET[auflage] ;

$handle = fopen("books.txt","a");
fwrite($handle, $_toWrite.";\n");
fclose($handle);

?>
