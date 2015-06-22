 function checkEntries()
  {
    //Anfang: Überprüfung der Eingabefelder Autor, Vorname & Name 

    var buchstaben = /[A-Za-z]/;

    if(!buchstaben.test(document.getElementsByName("autor")[0].value)) {
      alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
      document.getElementsByName("autor")[0].focus();
      document.getElementsByName("autor")[0].style.borderColor = "red";
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



    var isbnVal = /^[0-9]{13}$/;

    if(!isbnVal.test(document.getElementsByName("isbn")[0].value)) {
      alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
      document.getElementsByName("isbn")[0].focus();
      document.getElementsByName("isbn")[0].style.borderColor = "red";
      return false;
    }


    var jahrVal = /^[0-9]{4}$/;
    var maxJahr = 2015;

   if(!jahrVal.test(document.getElementsByName("jahr")[0].value) || document.getElementsByName("jahr")[0].value <= 2015) {
       alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
       document.getElementsByName("jahr")[0].focus();
       document.getElementsByName("jahr")[0].style.borderColor = "red";
       return false;
    }


    var auflageVal = /^[0-9]/;

     if(!auflageVal.test(document.getElementsByName("auflage")[0].value)) {
      alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
      document.getElementsByName("auflage")[0].focus();
      document.getElementsByName("auflage")[0].style.borderColor = "red";
      return false;
    }


    // Überprüfung war erfolgreich
    return true;
  }