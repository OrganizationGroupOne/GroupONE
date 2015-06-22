function horrorAuswahl(){
	//Farbe dunkel
	document.getElementById('horror').style.backgroundColor = "rgb(63,72,204)";
	//Farbe hell
	document.getElementById('roman').style.backgroundColor = "rgb(0,162,232)";
	
	document.getElementById('tabelle').innerHTML = "";
	//Vorgefertige JS-Funktion

    var xmlHttp = null;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch(e) {

    }
    if (xmlHttp) {
        xmlHttp.open('GET', '../php/getBooks.php?genre=horror', true);
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4)
                addTable(JSON.parse(xmlHttp.responseText));};
        xmlHttp.send(null);
    }

}

function romanAuswahl(){
	//Farbe dunkel
	document.getElementById('roman').style.backgroundColor = "rgb(63,72,204)";
	//Farbe hell
	document.getElementById('horror').style.backgroundColor = "rgb(0,162,232)";

	document.getElementById('tabelle').innerHTML = "";


    var xmlHttp = null;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch(e) {

    }
    if (xmlHttp) {
        xmlHttp.open('GET', '../php/getBooks.php?genre=roman', true);
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4)
                addTable(JSON.parse(xmlHttp.responseText));};
        xmlHttp.send(null);
    }
}




    function addTable(tableData) {

            var tableDiv = document.getElementById("tabelle")
            var table = document.createElement('TABLE')
            var tableBody = document.createElement('TBODY')

            table.border = '1'
            table.appendChild(tableBody);


            var heading = new Array();
            heading[0] = "Autor"
            heading[1] = "Titel"
            heading[2] = "Kapitel"
            heading[3] = "Art des Buches"
            heading[4] = "ISBN"
            heading[5] = "Erscheinungsjahr"
            heading[6] = "Auflage"	


            
            var stock = tableData;
  

            //Tabellen Zeilen erstellen 
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);
            for (i = 0; i < heading.length; i++) {
                var th = document.createElement('TH')
                th.appendChild(document.createTextNode(heading[i]));
                tr.appendChild(th);

            }

           for (i = 0; i < stock.length; i++) {
				var tr = document.createElement('TR');
        				var td = document.createElement('TD')
        				td.appendChild(document.createTextNode(stock[i].autor));
        				tr.appendChild(td)
        				var td = document.createElement('TD')
        				td.appendChild(document.createTextNode(stock[i].titel));
        				tr.appendChild(td)
        				var td = document.createElement('TD')
        				td.appendChild(document.createTextNode(stock[i].kapitel));
        				tr.appendChild(td)
        				var td = document.createElement('TD')
        				td.appendChild(document.createTextNode(stock[i].buchart));
        				tr.appendChild(td)
        				var td = document.createElement('TD')
        				td.appendChild(document.createTextNode(stock[i].ISBN));
        				tr.appendChild(td)
        				var td = document.createElement('TD')
        				td.appendChild(document.createTextNode(stock[i].erscheinungsjahr));
        				tr.appendChild(td)
        				var td = document.createElement('TD')
        				td.appendChild(document.createTextNode(stock[i].auflage));
        				tr.appendChild(td)
    			tableBody.appendChild(tr);
			}

            tableDiv.appendChild(table)

        }
