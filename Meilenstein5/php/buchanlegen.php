<?php
$myfile = fopen("books.txt", "w") or die("Unable to open file!");
if(isset($_GET['submit'])){
    $txt = $_GET['autor'].', '.$_GET['titel'].', '.$_GET['kapitel'].', '.$_GET['art'].', '.
        $_GET['isbn'].', '.$_GET['jahr'].', '.$_GET['auflage'].';';
    fwrite($myfile, $txt);
}
fclose($myfile);

