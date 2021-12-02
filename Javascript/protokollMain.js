setTimeout(() => {
  let script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/darkreader@4.9.40/darkreader.min.js";
  document.body.appendChild(script);
}, 1000);

function toggletheme() {
  let element = document.body;
  element.classList.toggle("dark-reader");
  if (!element.classList.contains('dark-reader')) {
    DarkReader?.disable();
  } else {
    DarkReader.enable({
      brightness: 100,
      contrast: 80,
      sepia: 5,
    });
  }
}


function Datum1() {
  var date1 = new (Date);

  document.getElementById('datumdruck').innerHTML = ('Datum: ' + date1.getDate() + '.' + (date1.getMonth() + 1) + '.' + (date1.getYear() + 1900));
};

function Datum() {
  var date = new (Date);
  let content = document.getElementById('pnebenlogo').innerHTML;
  document.getElementById('pnebenlogo').innerHTML = content + ('Praktikum am: ' + date.getDate() +
    '.' +
    (date.getMonth() + 1) +
    '.' +
    (date.getYear() + 1900));
};

function neuladen() {
  var unloadCheck = true;
  window.onbeforeunload = function () {
    if (unloadCheck) {
      return "Sie verlieren ggf. Ihre letzten, nicht gespeicherten Eingaben!";
    } else {
      return;
    }
  }
};
