let czyVIP = true;
const przycisk = document.querySelector('#btn-bramka');
const wiadomosc = document.querySelector('#wiadomosc');

przycisk.addEventListener('click', function(){
    if(czyVIP === true){
        wiadomosc.textContent = "Wstęp wolny";
        wiadomosc.style.backgroundColor = "gold";
    } else{
        wiadomosc.textContent = "Brak dostępu";
        wiadomosc.style.backgroundColor = "gray";
    }
})