
function chkBookAddFormular() {
/*
    letters = /^[A-Za-zÖöÄäÜü]+$/;
    if (document.bookadd.vorname.value == "" || !document.bookadd.vorname.value.match(letters)
	|| document.bookadd.vorname.value == "" || !document.bookadd.vorname.value.match(letters) 
	|| document.bookadd.nachname.value == "" || !document.bookadd.nachname.value.match(letters)
	|| document.bookadd.buchautor.value == "" || !document.bookadd.buchautor.value.match(letters)) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben!");
        document.bookadd.vorname.focus();
        return false;
    }
    if (document.bookadd.nachname.value == "") {
        alert("Bitte Nachname eingeben!");
        document.bookadd.nachname.focus();
        return false;
    }
    if (document.bookadd.titel.value == "") {
        alert("Bitte Buchtitel eingeben!");
        document.bookadd.titel.focus();
        return false;
    }
    if (document.bookadd.autor.value == "") {
        alert("Bitte Autor eingeben!");
        document.bookadd.autor.focus();
        return false;
    }
    if (document.bookadd.isbn.value == "") {
        alert("Bitte ISBN eingeben!");
        document.bookadd.isbn.focus();
        return false;
    }
    if (document.bookadd.kapitel.value == "") {
        alert("Bitte Kapitel eingeben!");
        document.bookadd.kapitel.focus();
        return false;
    }
    if (document.bookadd.jahr.value == "") {
        alert("Bitte Jahr eingeben!");
        document.bookadd.jahr.focus();
        return false;
    }
    if (document.bookadd.auflage.value == "") {
        alert("Bitte Auflage eingeben!");
        document.bookadd.auflage.focus();
        return false;
    }
    
    
}
function chkBookAddFormular()
  {
    //Check Autor, Vorname, Name 
    letters = /^[A-Za-zÖöÄäÜü]+$/;
    if (document.bookadd.vorname.value == "" || !document.bookadd.vorname.value.match(letters)
	|| document.bookadd.vorname.value == "" || !document.bookadd.vorname.value.match(letters) 
	|| document.bookadd.nachname.value == "" || !document.bookadd.nachname.value.match(letters)
	|| document.bookadd.buchautor.value == "" || !document.bookadd.buchautor.value.match(letters)) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben!");
        document.bookadd.vorname.focus();
      document.bookadd.vorname.style.borderColor = "red";
      return false;
    }
    if(!buchstaben.test(document.getElementsByName("vorname")[0].value)) {
      alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
      document.getElementsByName("vorname")[0].focus();
      document.getElementsByName("vorname")[0].style.borderColor = "red";
      return false;
    }
    if(!buchstaben.test(document.getElementsByName("name")[0].value)) {
      alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
      document.getElementsByName("name")[0].focus();
      document.getElementsByName("name")[0].style.borderColor = "red";
      return false;
    }
    //Ende: Überprüfung der Eingabefelder Autor, Vorname & Name
*/
    var isbn = /^[0-9]{13}$/;
    if( !document.bookadd.vorname.value.match(isbn)){
      alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
      document.bookadd.isbn.focus();
      document.bookadd.isbn.style.borderColor = "red";
      return false;
    }
    var jahr = /^[0-9]{4}$/;
    var maxJahr = 2015;
   if(document.bookadd.jahr.value <= maxJahr || document.bookadd.jahr.value.match(jahr)) {
       alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
       document.bookadd.jahr.focus();
       document.bookadd.jahr.style.borderColor = "red";
       return false;
    }
    var auflage = /^[0-9]/;
     if(document.bookadd.jahr.value.match(auflage)) {
      alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
      document.getElementsByName("auflage")[0].focus();
      document.bookadd.jahr.value.match.style.borderColor = "red";
      return false;
    }
    // Überprüfung war erfolgreich
    return true;
  }