
function chkBookAddFormular() {
    if (document.bookadd.vorname.value == "") {
        alert("Bitte Vorname eingeben!");
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
