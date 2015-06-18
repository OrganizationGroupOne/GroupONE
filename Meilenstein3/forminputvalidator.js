
function chkBookAddFormular() {
    var letters = /^[A-Za-zÖöÄäÜü]/;
    if (!document.bookadd.vorname.value.match(letters)) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben!");
        document.bookadd.vorname.focus();
        document.getElementByName("vorname")[0].style.borderColor = "red";
        return false;
    }
    if (!document.bookadd.nachname.value.match(letters)) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben!");
        document.bookadd.nachname.focus();
        document.getElementByName("nachname")[0].style.borderColor = "red";
        return false;
    }

    if (!document.bookadd.autor.value.match(letters)) {
       alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben!");
        document.bookadd.autor.focus();
        document.getElementByName("autor")[0].style.borderColor = "red";
        return false;
    }
    
    var isbn = /^[0-9]{13}/;
    if (!document.bookadd.vorname.value.match(isbn)) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben!");
        document.bookadd.isbn.focus();
        document.getElementByName("isbn")[0].style.borderColor = "red";
        return false;
    }

    var jahr = /^[0-9]{4}/;
    var maxJahr = 2015;
    if (document.bookadd.jahr.value <= maxJahr || !document.bookadd.jahr.value.match(jahr)) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben!");
        document.bookadd.jahr.focus();
         document.getElementByName("auflage")[0].style.borderColor = "red";
        return false;
    }
    
    var auflage = /^[0-9]/;
    if (!document.bookadd.vorname.value.match(auflage)) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        document.bookadd.auflage.focus();
         document.getElementByName("auflage")[0].style.borderColor = "red";
        return false;
    }
    return true;
  }
  