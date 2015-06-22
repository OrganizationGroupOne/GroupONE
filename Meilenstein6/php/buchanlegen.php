<?php
	require_once("db.php");
	
	if(isset($_POST['submit'])) {
		$autor = isset($_POST['autor'])?$_POST['autor']:"";
		$titel = isset($_POST['titel'])?$_POST['titel']:"";
		$kapitel = isset($_POST['kapitel'])?$_POST['kapitel']:"";
		$buchart = isset($_POST['buchart'])?$_POST['buchart']:"";
		$isbn = isset($_POST['isbn'])?$_POST['isbn']:"";
		$jahr = isset($_POST['jahr'])?$_POST['jahr']:"";
		$auflage = isset($_POST['auflage'])?$_POST['auflage']:"";
		
		if($autor == "" || $titel == "" || $kapitel == "" || $buchart == "" || $isbn == "" || $jahr == "" || $auflage == "") {
			echo "Bitte geben Sie alle Daten ein";
		} else if($autor == "/^[a-zA-Z ]*$/" || $titel == "/^[a-zA-Z ]*$/" || $kapitel == "/^[a-zA-Z ]*$/" || $buchart == "/^[a-zA-Z ]*$/" || $isbn == "/^[0-9]{13}/" || $jahr == "/^[0-9]{4}/" || $auflage == ""){
                        }
                        else{
			$query = "INSERT INTO myBooks.buch
						(autor, titel, kapitel, jahr, auflage, buchart, isbn)
						VALUES(:autor, :titel, :kapitel, :jahr, :auflage, :buchart, :isbn)";
			$prepare = $db->prepare($query);
			$prepare -> execute(array(":autor" => $autor, ":titel" => $titel, ":kapitel" => $kapitel, 
						":buchart" => $buchart, ":isbn" => $isbn, ":jahr" => $jahr, ":auflage" => $auflage));
		}
	}
?>
<html>
<body>
	<form action="buchanlegen.php" method="post">
		<table border="0">
			<tr>
				<td>Autor:</td>
				<td><input type="text" name="autor" value=""></td>
			</tr>
			<tr>
				<td>Titel:</td>
				<td><input type="text" name="titel" value=""></td>
			</tr>
			<tr>
				<td>Kapitel:</td>
				<td><input type="text" name="kapitel" value=""></td>
			</tr>
			<tr>
				<td>Buchart:</td>
				<td><input type="text" name="buchart" value=""></td>
			</tr>
			<tr>
				<td>ISBN:</td>
				<td><input type="text" name="isbn" value=""></td>
			</tr>
			<tr>
				<td>Erscheinungsjahr:</td>
				<td><input type="text" name="jahr" value=""></td>
			</tr>
			<tr>
				<td>Auflage:</td>
				<td><input type="text" name="auflage" value=""></td>
			</tr>
			<tr>
				<td colspan="2"><input type="submit" name="submit" value="abschicken"></td>
			</tr>
		</table>
	</form>
</body>
</html>