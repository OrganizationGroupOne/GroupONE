<!DOCTYPE html>

<html>
    <head>
        <title>Meilenstein6</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <?php
        
        
        $verbindung = mysql_connect("localhost", "root", "")or die("keine Verbindung möglich.Benutzername oder Passwort sind falsch");

        
			mysql_select_db("mybooks")or die("Die Datenbank existiert nicht.");
            $sql = "SELECT * FROM buch";

        
			$ergebnis = mysql_query($sql);

        
			echo "<table border=1>";
        
			echo "<tr><th>ISBN</th><th>TITEL</th><th>Autor</th><th>Kapitel</th><th>Auflage</th><th>Erscheinungsjahr</th><th>Buchart</th></tr>";
        
			while ($row = mysql_fetch_object($ergebnis)) {
            
			echo "<tr><td>$row->isbn</td> <td>$row->titel</td> <td>$row->autor</td> <td>$row->kapitel</td> <td>$row->auflage</td> <td>$row->jahr</td> <td>$row->buchart</td></tr>";
        }
        
			echo "</table>";
        ?>
    </body>
</html>
