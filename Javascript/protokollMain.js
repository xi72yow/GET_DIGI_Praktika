function toggletheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function Datum1() {
  var date1 = new(Date);

  document.getElementById('datumdruck').innerHTML = ('Datum: ' + date1.getDate() + '.' + (date1.getMonth() + 1) + '.' + (date1.getYear() + 1900));
};

function Datum() {
  var date = new(Date);
  let content = document.getElementById('pnebenlogo').innerHTML;
  document.getElementById('pnebenlogo').innerHTML = content+('Praktikum am: ' + date.getDate() +
    '.' +
    (date.getMonth() + 1) +
    '.' +
    (date.getYear() + 1900));
};

function neuladen() {
  var unloadCheck = true;
  window.onbeforeunload = function() {
    if (unloadCheck) {
      return "Sie verlieren ggf. Ihre letzten, nicht gespeicherten Eingaben!";
    } else {
      return;
    }
  }
};
