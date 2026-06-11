// TODO: uzupelnij zadanie wedlug instrukcji
let licznik = 0;
let tekst = document.querySelector("#placeholder")

const monitor = setInterval(function() {
    licznik++;
    tekst.textContent = licznik;
    
    if(licznik === 6){
        clearInterval(monitor);
        tekst.textContent = "koniec odlicznia"
    }
    
}, 1000);