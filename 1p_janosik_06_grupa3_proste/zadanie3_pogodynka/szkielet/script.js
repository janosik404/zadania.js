const pogoda = ["Słońce", "Deszcz", "Śnieg", "Wiatr"];
const kafelki = document.querySelectorAll('.dzien');
const przycisk = document.querySelector('#btn-prognoza');

przycisk.addEventListener('click', function(){
    for(let i = 0; i < kafelki.length; i++){
        kafelki[i].textContent = pogoda[i];
    }
})