// TODO: uzupelnij zadanie wedlug instrukcji
const tekst = document.querySelector('#text');

const przekroczono = setTimeout(function () {
    tekst.textContent = "przekroczono czas";
  }, 5000);

const sukcess = setTimeout(function () {
    tekst.textContent = "sukcess";
    clearTimeout(przekroczono);
  }, 2000);