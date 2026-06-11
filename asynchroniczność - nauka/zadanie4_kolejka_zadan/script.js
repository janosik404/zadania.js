// TODO: uzupelnij zadanie wedlug instrukcji
const lista = ["nakarm flok", "poglaszcz flok", "kochaj flok", "skladaj ofiary z ludzi dla flok"];
let licznik = 0;
const wyliczanie = setInterval(function () {
    document.write(licznik+1, ". ", lista[licznik], "<br>");
    licznik++;
    if(licznik >= lista.length){
        clearInterval(wyliczanie);
    }
  }, 1000);