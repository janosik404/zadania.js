// TODO: uzupelnij zadanie wedlug instrukcji
const odlicznie = document.querySelector('#text');
let val = 10;

const odlicz = setInterval( function(){
    odlicznie.textContent = val;
    val--;

        if(val == 0){
            clearInterval(odlicz);
            odlicznie.textContent = "koniec odliczania";
        }
}, 1000)