<?php

if($_GET['genre']=='horror')
echo file_get_contents('../json/horror_books.json');
else
echo file_get_contents('../json/roman_books.json');
