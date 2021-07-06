
let tamplate = '<!DOCTYPE html>'+
'<html>'+
'  <head>'+
'    <meta charset="utf-8" />'+
'    <meta name="viewport" content="width=device-width, initial-scale=1.0" />'+
'    <title>###########</title>'+
'    <!-- Scriptdatein -->'+
'    <script src="Javascript/MeineFunktionen.js"></script>'+
'    <script src="Javascript/protokollMain.js"></script>'+
'    <link rel="stylesheet" href="CSS/stylesheet.css" />'+
'    <script src="https://cdn.plyr.io/3.6.8/plyr.js"></script>'+
'    <link rel="stylesheet" href="CSS/plyr.css" />'+
'    <!-- Temporäre sicherrung der HTML -->'+
'    <script>'+
'      neuladen();'+
'    </script>'+
''+
'    <!-- Favicon -->'+
'    <link rel="shortcut icon" type="image/x-icon" href="Bilder/favicon.ico" />'+
'  </head>'+
''+
'  <body>'+
'    <!-- zum drucken -->'+
'    <div id="capture">'+
'      <header>'+
'        <!-- Seitenkopf -->'+
'        <div class="row border">'+
'          <div class="column small-4">'+
'            <img src="Bilder/EAH.png" title="EAH Logo" />'+
'          </div>'+
'          <div class="colum small-8">'+
'            <p class="pnebenlogo" id="pnebenlogo">'+
'              <b>Fachbereich Elektrotechnik und Informationstechnik</b> <br />'+
'              Laborpraktikum <br />'+
'              Grundlagen der Elektrotechnik <br />'+
'              Dipl.-Ing. O.Reimer<br />'+
'              <span id="datum" class="datum"> </span>'+
'            </p>'+
'          </div>'+
''+
'          <script>'+
'            Datum();'+
'          </script>'+
'        </div>'+
''+
'        <!-- Titel -->'+
'        <div class="divtitle" id="element-to-print">'+
'          <h1>Kennenlernen der Elektrotechnik: ##############</h1>'+
'        </div>'+
''+
'        <!-- Eintragungen Studenten -->'+
'        <div class="links" width="50%" height="400">'+
'          <table>'+
'            <tr>'+
'              <td>'+
'                <label for="Studiengang"> Studiengang/Set:</label>'+
'              </td>'+
'              <td>'+
'                <input'+
'                  for="StudiengangEingabe"'+
'                  type="search"'+
'                  list="Studiengang"'+
'                  size="25"'+
'                  maxlength="25"'+
'                  placeholder="Studiengang"'+
'                  style="margin-left: 25px"'+
'                  required'+
'                />'+
'                <datalist id="Studiengang">'+
'                  <option value="WI"></option>'+
'                  <option value="UT"></option>'+
'                  <option value="MT"></option>'+
'                </datalist>'+
'                <input'+
'                  for="Setnummer"'+
'                  type="search"'+
'                  list="Set"'+
'                  size="9"'+
'                  maxlength="15"'+
'                  placeholder="1.01"'+
'                  required'+
'                />'+
'                <datalist id="Set">'+
'                  <option value="2.01"></option>'+
'                  <option value="2.02"></option>'+
'                  <option value="2.03"></option>'+
'                  <option value="2.04"></option>'+
'                  <option value="2.05"></option>'+
'                  <option value="2.06"></option>'+
'                  <option value="2.07"></option>'+
'                  <option value="2.08"></option>'+
'                </datalist>'+
'              </td>'+
'            </tr>'+
'            <tr>'+
'              <td>'+
'                <label for="Teilnehmer">Teilnehmer:</label>'+
'              </td>'+
'              <td>'+
'                <input'+
'                  type="text"'+
'                  id="Teilnehmer"'+
'                  size="40"'+
'                  maxlength="50"'+
'                  placeholder="Erika Mustermann"'+
'                  style="margin-left: 25px"'+
'                  required'+
'                />'+
'              </td>'+
'            </tr>'+
'            <tr>'+
'              <td>'+
'                <label for="Matrikelnummer">Matrikelnummer:</label>'+
'              </td>'+
'              <td>'+
'                <input'+
'                  id="Matrikelnummer"'+
'                  size="40"'+
'                  maxlength="50"'+
'                  placeholder="665544"'+
'                  style="margin-left: 25px"'+
'                  required'+
'                />'+
'              </td>'+
'            </tr>'+
'          </table>'+
''+
'          <label>Versuchs-ID: GET-01</label>'+
'          <label'+
'            >persönliche Prüf-ID:'+
'            <script type="text/javascript">'+
'              var min = 9,'+
'                max = 99999;'+
'              document.write('+
'                20201407 + Math.floor(Math.random() * (max - min)) + min'+
'              );'+
'            </script>'+
'          </label>'+
'        </div>'+
''+
'        <!-- Eintragung Testat -->'+
'        <div class="rechts">'+
'          <table>'+
'            <tr>'+
'              <td>Betreuer</td>'+
'              <td><input readonly /></td>'+
'            </tr>'+
'            <tr>'+
'              <td>Datum</td>'+
'              <td><input readonly /></td>'+
'            </tr>'+
'            <tr>'+
'              <td>Unterschrift</td>'+
'              <td><input readonly /></td>'+
'            </tr>'+
'          </table>'+
'        </div>'+
''+
'        <!-- Inhaltsverzeichnis -->'+
'        <div id="inhaltsverzeichnis" class="inhalt">'+
'          <hr />'+
'          <h2>Inhaltsverzeichnis</h2>'+
'          <a href="#span">#############</a><br /><br />'+
'          <a href="#mess">#############</a><br /><br />'+
'          <a href="#diod">#############</a><br /><br />'+
'          <a href="#lite">#############</a><br /><br />'+
'        </div>'+
''+
'        <!-- hinweise -->'+
'        <div class="hinweise">'+
'          <h2>Hinweise zum Praktikum</h2>'+
'          <ul>'+
'            <li>'+
'              Für die Lösungen zu den einzelnen Aufgaben sind im Protokoll'+
'              Leerstellen vorgesehen. <br />'+
'              Verwenden Sie bitte für die Nebenrechnungen kein eigenes Papier.'+
'            </li>'+
'            <li style="color: #a52f33">'+
'              Folgen Sie immer den Anweisungen der Aufsichtspersonen! <br />'+
'              Wenn Sie sich unsicher sind, stellen Sie Fragen.<br />'+
'              Lassen Sie sich Ihren Versuchsaufbau vor dem Einschalten abnehmen.'+
'            </li>'+
'          </ul>'+
'        </div>'+
''+
'        <div class="Druckhinweis">'+
'          <h2>Druckhinweis</h2>'+
'          <ul>'+
'            <li>'+
'              <p id="datumdruck"></p>'+
'              <script>'+
'                Datum1();'+
'              </script>'+
'            </li>'+
'          </ul>'+
'        </div>'+
'      </header>'+
''+
'      <!-- Inhalt -->'+
'      <div id="aufgaben"></div>'+
''+
'      <!-- Druckoptionen -->'+
'      <div id="wrapper">'+
'        <p>'+
'          <b>zum drucken der Datei auf dem iPad:</b><br />'+
'          Klicken Sie auf den nachfolgenden Button<br />'+
'          Anschließend die Druckvorschau mit der Zoom-Geste groß ziehen und das'+
'          Dokument speichern'+
'        </p>'+
''+
'        <a><button id="pbtn" class="button">Drucken</button></a>'+
'        <a'+
'          ><button class="button" onclick="toggletheme()">'+
'            Toggle dark mode'+
'          </button></a'+
'        >'+
''+
'        <p>'+
'          <b>Hinweise zur Selbstkontrolle:</b><br />'+
'          Achten Sie auf richtige eingabe der Einheit. Zulässige Einheiten sind:'+
'          "Ohm, Ω, A, V, %".<br />'+
'          Anschließend können Sie auch folgende Zehnerpotenzen benuntzen: "n, u,'+
'          m, k"<br />'+
'          In den Feldern ist keine Berechnung des Ergebnisses zulässig.<br />'+
'          <b>Beteutung der Farben:</b><br />'+
'          Grau: das Feld wurde nicht ausgefüllt.<br />'+
'          Gelb: die verlangte Einheit ist nicht richtig oder entspricht nicht'+
'          den Vorgaben.<br />'+
'          Türkies: kein Zahlenwert vor erforderlicher Basiseinheit'+
'          gefunden.<br />'+
'          Rot: das eingegebene Ergebnis ist falsch.<br />'+
'          Grün: das eingegebene Ergebnis ist richtig.<br />'+
'        </p>'+
''+
'        <p>'+
'          <button onclick="kontrolle()" class="button">Selbstkontrolle</button>'+
'        </p>'+
'      </div>'+
''+
'      <!-- Fußzeile -->'+
'      <footer>'+
'        <br />'+
'        <hr />'+
'        <a href="mailto:oliver.reimer@eah-jena.de" target="_blank"'+
'          >Kontakt - Mail</a'+
'        >'+
'        <p>'+
'          © 2020'+
'          <a href="https://www2.eah-jena.de/et/"'+
'            >EAH Jena - FB Elektrotechnik und Informationstechnik</a'+
'          >'+
'        </p>'+
'      </footer>'+
'      <!-- zum drucken -->'+
'    </div>'+
'  </body>'+
'  <script src="Javascript/Drucken.js"></script>'+
'</html>'+
''+
'<script>'+
'  function kontrolle(params) {}'+
'</script>';
	